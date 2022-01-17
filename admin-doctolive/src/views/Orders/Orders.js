
import React, {useState, useEffect, useRef} from "react";


import Table from "components/Table/Table.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Collapse, TextField, FormControl, FormControlLabel, Switch as SwitchCheckox } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import Button from "components/CustomButtons/Button.js";
import SearchInput from "components/SearchInput/SearchInput.js";

import styles from "assets/jss/views/iconsStyle.js";

import SnackbarContent from 'components/Snackbar/SnackbarContent'
import { Switch, Route } from "react-router-dom";

import { useAuth } from "context/Auth";
import { getAllElement, getOneElement, updateElement, deleteElement } from 'services/Orders/OrderService'

import StyledCheckbox from 'components/Checkbox/Checkbox'

import SwipeableViews from "react-swipeable-views";


export default function Orders() {
    return (
        <div>
            <h3> 
                Géstion des Commandes
            </h3>
            <Switch>
                <Route exact path="/admin/orders" component={Commandes} />
                <Route path="/admin/orders/:id" component={VilleDetails} />
            </Switch>
        </div>
    )
}



const useStyles = makeStyles(styles);

  function Commandes()  {
    const {UserData} = useAuth();

    const classes = useStyles();
    const [elements, setElements] = useState([]);
    const [elementsToShow, setElementsToShow] = useState([]);

    const [changedState, setChangedState] = useState(false);

    const [state, setState] = useState({
        unblocked: true,
        validate: true,
        allDay: true,
        onlyNight: true,
        allWeek: true,
        onlyWeekend: true,
        moto: true,
        bycicle : true,
    });

    const timerResetSuccessAdded = useRef(null);

    useEffect(() => {
      getAllElement(UserData.token)
      .then((response) => {
        console.log(response)
        if(!response.data.error){
              if(response.data.orders !== undefined){
                  let data = response.data.orders.reverse();
                  setElements(data);
                  setElementsToShow(data);
              }
          }
      })
        return () => {
            clearTimeout(timerResetSuccessAdded.current)
        }
    }, []);

    const researching = (event) => {
      let value = event.target.value;
      let filtredElements = elements.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
      });
      setElementsToShow(filtredElements)
    }

    const changeElementToShow = () => {
        setChangedState(true);
      let filtredElements = elements.filter(item => {
        return ((state.validate && item.active)|| (state.invalidate && !item.active)) 
      });
      setElementsToShow(filtredElements)

    }

    const handleChange = (e) => {
        let field = e.target;
        if(field !== null){
            setState(state => {return {...state, [field.name] :  field.checked  }})
        }
        setChangedState(true);
    }

    // const setNewVille = (addedDeliveryMan) => {
    //   setElements( elements=> [addedDeliveryMan, ...elements] )
    //   setElementsToShow(elements=> [addedDeliveryMan, ...elements])
    // }
   


    return (
      
      <GridContainer >
      
        <GridItem xs={12} sm={12} md={12}>
          <Card >
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                  Paramettre d'affichage
              </h4>
              
            </CardHeader>
            <CardBody>
                <GridContainer >
                    <GridItem xs={12} sm={12} md={6} xl={4}>
                        <label> Afficher les commandes selon la validité : </label>
                        <div>
                            <StyledCheckbox checked={state.validate} onChange={handleChange} label="commande validé" name="validate" />
                            <StyledCheckbox checked={state.invalidate} onChange={handleChange} label="commande non validé" name="invalidate" />
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <GridContainer justify="center" alignItems="center" >
                            <Button disabled={!changedState} onClick={changeElementToShow} round color="primary"> rafraichir l'affichage  </Button>
                        </GridContainer>
                    </GridItem>
                </GridContainer>
              {/* <ListParameters changeElementToShow={changeElementToShow} /> */}
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
       
          <Card >
            <CardHeader style={{display: "flex", justifyContent:"space-between", alignItems:"center"}} color="primary">
                <div >
                  <h4 className={classes.cardTitleWhite}>
                    Liste des commandes
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                    
                  </p>
                </div>
                <div >
                  <SearchInput onChange={researching} placeholder= "rechercher ville..."  />
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
    id: 'shop', 
    label: 'Magasin', 
    type: "cascade",
    cascadeId: "name",
  },
  { 
    id: 'user', 
    label: 'Client', 
    type: "cascade", 
    cascadeId: "fullName",

  },
  { 
    id: 'delivery', 
    label: 'Livreur', 
    type: "cascade", 
    cascadeId: "fullName",

  },
  { 
    id: 'date', 
    label: 'Date de la commande', 
    type: "text", 
  },
  { 
    id: 'totalAmount', 
    label: 'Prix total', 
    type: "text", 
  },
  { 
    id: 'amountWay', 
    label: 'Méthode de paiement', 
    type: "text", 
  },
  {
    id: 'payed',
    label: 'état de paiement',
    type: "boolean",
    valueTrue: 'payer',
    valueFalse: 'non payer',
    minWidth: 170,
    align: 'center',
  },
  
  { 
    id: 'status', 
    label: 'Status', 
    type: "cascade", 
    cascadeId: "name",

  },
  {
    id: 'action',
    label: '',
    type: "link",
    path: 'orders',
    content: 'Voir details',
    // minWidth: 170,
    align: 'right',
  }
];


function VilleDetails (props) {
    const classes = useStyles();

    const {UserData} = useAuth();

    const [cityInfo, setVilleInfo] = useState({});
    const [active, setActive] = useState(0);

    const [successUpdate,  setSuccessUpdate]  = useState(false);
    const timerResetSuccessAdded = useRef(null);

    useEffect(() => {
        getOneElement(props.match.params.id, UserData.token)
        .then(result => {
        if(! result.data.error ){
            setVilleInfo(result.data.city);
        }
        })
        .catch(err => {
        // console.log(err.response)
        })

        return () => {
          clearTimeout(timerResetSuccessAdded.current)
        }
    }, []);

    const updateVille = (data, token) => {
      updateElement(data, cityInfo.id , token)
        .then(result => {
            if(!result.data.error){
                setActive(0);
                setSuccessUpdate(true);
                timerResetSuccessAdded.current = setTimeout(() => {
                    setSuccessUpdate(false);
                }, 5000);
            }
        })
        .catch(error => {
            // console.log(error)
        });
    }
    return (
        <div>

 <GridContainer >


        <GridItem xs={12} sm={12} md={12}>
              <Card >
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>
                      details de la ville
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                      
                  </p>
                </CardHeader>
                <CardBody>
                    <GridItem xs={12} sm={12} md={12}>
                        <GridContainer justify="flex-end" alignItems="center" >
                            <Button onClick={() => (setActive(active=> {return active === 1 ? 0 : 1} ))} round color="primary"> {active ? "Annuler modification" : "Modifier cette ville"}  </Button>
                        </GridContainer>
                    </GridItem>
                    <SwipeableViews
                        axis="x"
                        index={active}
                        onChangeIndex={(e, active)=> setActive(active)}
                    >
                        <div>
                        
                          <Collapse in={successUpdate}>
                            <GridItem xs={12} sm={12} md={12}>
                                <SnackbarContent
                                    message="La ville à était ajouter avec succés"
                                    close
                                    color="success"
                                />
                            </GridItem>
                          </Collapse>
                          <label> name : </label>  <span> {cityInfo.name} </span>  <br />
                          <label> active : </label>  <span> {cityInfo.active ? "ville activé" : "ville n'est pas activé"} </span> 
                        </div>
                       <FormCity formType="update" {...props} onSubmit= {updateVille} data={cityInfo} />
                       
                    </SwipeableViews>
                </CardBody>
              </Card>
          {/* </Collapse> */}
        </GridItem>
      </GridContainer>
        </div>
    )
}

function FormCity (props) {
    const {UserData} = useAuth();

    const [nameError, setNameError] = useState(false);
    const [name, setName] = useState('');
    const [validate, setValidite] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);


    const validateField = () => {
        setNameError(name.length < 3);
    }

    useEffect(() => {
      if(!props.data.name){

      }
      else{
        setName(props.data.name);
        setValidite(props.data.active)
      }
        
        return () => {
            
        }
    }, [props.data])

    const checkData = () => {

        if(!name || validate === null || validate === undefined){
            return false;
        }else {
            if (name.length > 3){
                if (typeof validate === "boolean") {
                    return true
                }
                else {
                    return false
                }
            }
            else {
                return false
            }
           
        }
    }

    const onSubmit = () => {
        const isDataValide = checkData();
        if(isDataValide){
            setName('');
            props.onSubmit({name: name, active: validate}, UserData.token);
        }
        
    }

    const handleDelete = () => {
      deleteElement(props.data.id, UserData.token)
      .then((deletedElement) => {
        return props.history.push({
          pathname: `/admin/villes`,
        })
      })
      .catch((e) => {

      })
    }
    return (
        <GridContainer justify="space-around"  alignItems="center" >
          {
            props.formType=== "update" ? 
            <GridItem xs={12} sm={12} md={12} lg={12}>
            <GridContainer justify="space-around"  alignItems="center" >   
                <Button color="danger" onClick={ () => setShowConfirmation(true)}> 
                  Suprimer
                </Button>
                <Dialog
                  open={showConfirmation}
                  onClose={() => setShowConfirmation(false)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        On confirmant la supression le systéme vas essayer la supréssion défénitive de la catégorie.
                        si la catégorie est déja lié avec d'autre élément ne poura pas éêtre suprimer physiquement mais logiquements
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setShowConfirmation(false)} color="normale">
                      Annuler
                    </Button>
                    <Button onClick={handleDelete} color="danger" autoFocus>
                      Confirmer
                    </Button>
                  </DialogActions>
                </Dialog>
            </GridContainer>
          </GridItem>
          : null
          }   
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <TextField
                    value= {name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={ (e) => validateField(e.target.name)} 
                    error={nameError}
                    helperText={nameError ? "ne nom de la ville n'est pas accépter" : ""}
                    margin="normal"
                    required
                    fullWidth
                    id="ville"
                    label="nom de la ville"
                    name="name"
                    autoComplete="block"
                />
                <Collapse in={nameError}>
                    <GridItem xs={12} sm={12} md={12}>
                        <SnackbarContent
                            message={nameError === "Invalid value" ? "Le nom est obligatoire et doit contenir 3 caractére minimum" : "Ce nom n'est pas accepter"}
                            close
                            color="danger"
                        />
                    </GridItem>
                </Collapse>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6} style={{textAlign:"right"}} >
                <FormControl component="fieldset">
                    <FormControlLabel
                    value={validate}
                    onChange={(e) => setValidite(validate => !validate)}
                    control={<SwitchCheckox color="primary" checked={validate} />}
                    label="Valide"
                    labelPlacement="end"
                    />
                </FormControl>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6} style={{textAlign:"right"}} >
                <FormControl component="fieldset">
                    <Button onClick={onSubmit} round color="primary"> enregistrer </Button>
                </FormControl>
            </GridItem>
        </GridContainer>

    )
}