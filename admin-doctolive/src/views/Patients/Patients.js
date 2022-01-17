
import React, {useState, useEffect} from "react";


import Table from "components/Table/Table.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Collapse } from "@material-ui/core";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import Button from "components/CustomButtons/Button.js";
import SearchInput from "components/SearchInput/SearchInput.js";

import FormAdd from './FormAdd/FormAdd'
import Config from 'Config';

import ListParameters from './ListParameters'
import styles from "assets/jss/views/iconsStyle.js";

import { Switch, Route } from "react-router-dom";

import { useAuth } from "context/Auth";
import { getAllElement } from 'services/Patients/PatientsService'
import ProfilePage from "views/ProfilePage/ProfilePage";

export default function PatientsViews(){

  return(
    <div>
       <Switch>
            <Route exact path="/admin/patients" component={Patients} />
            <Route path="/admin/patients/:id" component={ProfilePage} />
          </Switch>
    </div>
  )
}


const useStyles = makeStyles(styles);

  function Patients()  {
    const {UserData} = useAuth();

    const classes = useStyles();
    const [elements, setElements] = useState([]);
    const [elementsToShow, setElementsToShow] = useState([]);
    const [addItem, setAddElements] = useState(false);

    useEffect(() => {

      getAllElement(UserData.token)
      .then((response) => {
          if(!response.data.error){
            
              if(response.data.patients){
                let patients = response.data.patients.reverse()
                  setElements(patients);
                  setElementsToShow(patients);
              }
          }
      })
        return () => {
            
        }
    }, [Config.BACKEND_URL]);


    const researching = (event) => {
      let value = event.target.value;
      let filtredElements = elements.filter(item => {
        return item.nom.toLowerCase().includes(value.toLowerCase()) ||
          item.prenom.toLowerCase().includes(value.toLowerCase()) ||
            item.email.toLowerCase().includes(value.toLowerCase()) ||
            item.phone.toLowerCase().includes(value.toLowerCase())
      });
      setElementsToShow(filtredElements)
    }

    const changeElementToShow = (parameters) => {
      let filtredElements = elements.filter(item => {
        return ((parameters.validate && item.active)|| (parameters.invalidate && !item.active))
       
      });
      setElementsToShow(filtredElements)

    }

    const setNewPatient = (addedPatient) => {
      console.log(addedPatient)
      setElements( elements=> [addedPatient, ...elements] )
      setElementsToShow(elements=> [addedPatient, ...elements])
    }

    return (
      
      <GridContainer >
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer justify="flex-end" alignItems="center" >
              <Button onClick={() => (setAddElements( value => !value))} round color="primary"> {addItem ? "Annuler l'ajout" : "Ajouter patient"}  </Button>
          </GridContainer>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Collapse in={addItem}>
              <Card >
                <CardHeader color="primary">
                  
                  <h4 className={classes.cardTitleWhite}>
                      Formulaire d'ajout d'un nouveau patient
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                      
                  </p>
                </CardHeader>
                <CardBody>
                  {
                    addItem ?
                    <FormAdd data={{phone: "", nom:"", prenom:"", email: ""}} setNewPatient={setNewPatient} setAddElements={setAddElements} />
                    : null
                  }
                </CardBody>
              </Card>
          </Collapse>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card >
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                  Paramettre d'affichage
              </h4>
              
            </CardHeader>
            <CardBody>
              <ListParameters changeElementToShow={changeElementToShow} />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          
          <Card >
            <CardHeader style={{display: "flex", justifyContent:"space-between", alignItems:"center"}} color="primary">
                <div >
                  <h4 className={classes.cardTitleWhite}>
                    Liste des patients
                  </h4>
                  {/* <p className={classes.cardCategoryWhite}>
                    patients non validées
                  </p> */}
                </div>
                <div >
                  <SearchInput onChange={researching} placeholder= "rechercher patients..."  />
                </div>
            </CardHeader>

            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={columns}
                tableData={elementsToShow}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      
    );
  
  }


const columns = [
  { 
    id: 'nom', 
    label: 'Nom', 
    type: "text", 
  },
  { 
    id: 'prenom', 
    label: 'Prenom', 
    type: "text", 
  },
  { 
    id: 'email', 
    label: 'Email', 
    type: "text",
    minWidth: 100,
    align: 'center',
},
  {
    id: 'phone',
    label: 'numéro téléphone',
    minWidth: 170,
    align: 'center',
    type: "text",
  },
  {
    id: 'active',
    label: 'etat',
    type: "badge",
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'action',
    label: '',
    type: "link",
    path: 'patients',
    content: 'Voir details',
    // minWidth: 170,
    align: 'right',
  }
];





