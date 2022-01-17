
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
import { getAllElement } from 'services/Medecins/MedecinsService'
import ProfilePage from "views/Medecin/MedecinProfile/MedecinProfile";

export default function MedecinsViews(){
  return(
    <div>
       <Switch>
          <Route exact path="/admin/medecins" component={Medecins} />
          <Route exaxt path="/admin/medecins/:id" component={ProfilePage} />
        </Switch>
    </div>
  )
}


const useStyles = makeStyles(styles);

  function Medecins()  {
    const {UserData} = useAuth();

    const classes = useStyles();
    const [elements, setElements] = useState([]);
    const [elementsToShow, setElementsToShow] = useState([]);
    const [addItem, setAddElements] = useState(false);

    useEffect(() => {

      getAllElement(UserData.token)
      .then((response) => {
          if(!response.data.error){
            console.log(response.data.medecins)
              if(response.data.medecins !== undefined){
                  setElements(response.data.medecins.reverse());
                  setElementsToShow(response.data.medecins.reverse());
              }
          }
      })
        return () => {
            
        }
    }, [Config.BACKEND_URL]);


    const researching = (event) => {
      let value = event.target.value;
      let filtredElements = elements.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.email.toLowerCase().includes(value.toLowerCase()) ||
            item.phone.toLowerCase().includes(value.toLowerCase())
      });
      setElementsToShow(filtredElements)
    }

    const changeElementToShow = (parameters) => {
      let filtredElements = elements.filter(item => {
        // console.log(parameters.cities, item, parameters.cities[item.city.name])
        return ((parameters.validate && item.active)|| (parameters.invalidate && !item.active)) &&
        (parameters.teleactive && item.teleconsultationIsDisponible)|| (parameters.teleinactive && !item.teleconsultationIsDisponible) &&
        (parameters.cities[item.city.name])  
        // ( (parameters.allDay && item.allDay) || (parameters.onlyNight && !item.allDay)) &&
        // ( (parameters.moto && item.vehicule === "moto") || (parameters.bycicle && item.vehicule === "bicycle"))

      });
      setElementsToShow(filtredElements)

    }

    const setNewMedecin = (addedMedecin) => {
      setElements( elements=> [addedMedecin, ...elements] )
      setElementsToShow(elements=> [addedMedecin, ...elements])
    }

    return (
      
      <GridContainer >
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer justify="flex-end" alignItems="center" >
              <Button onClick={() => (setAddElements( value => !value))} round color="primary"> {addItem ? "Annuler l'ajout" : "Ajouter medecin"}  </Button>
          </GridContainer>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Collapse in={addItem}>
              <Card >
                <CardHeader color="primary">
                  
                  <h4 className={classes.cardTitleWhite}>
                      Formulaire d'ajout d'un nouveau medecin
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                      
                  </p>
                </CardHeader>
                <CardBody>
                  {
                    addItem ?
                      <FormAdd setNewMedecin={setNewMedecin} setAddElements={setAddElements} />
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
                    Liste des medecins
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                    
                  </p>
                </div>
                <div >
                  <SearchInput onChange={researching} placeholder= "rechercher medecins (nom, email ou téléphone)..."  />
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
    id: 'image', 
    label: 'image', 
    type: "avatar", 
  },
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
    id: 'city',
    label: 'ville',
    minWidth: 170,
    type: "cascade",
    cascadeId: "name",
    align: 'center',
  },

  {
    id: 'specialites',
    label: 'Spécialités',
    type: "cascadeArray",
    cascadeId: "name",
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'teleconsultationIsDisponible',
    label: 'Accept la téléconsultation',
    type: "badge",
    minWidth: 170,
    align: 'center',
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
    path: 'medecins',
    content: 'Voir details',
    // minWidth: 170,
    align: 'right',
  }
];





