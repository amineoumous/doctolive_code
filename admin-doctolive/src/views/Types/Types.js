
import React, {useState, useEffect, useRef} from "react";


import Table from "components/Table/Table.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Collapse, TextField, FormControl, FormControlLabel, Switch as SwitchCheckox } from "@material-ui/core";

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

import StyledCheckbox from 'components/Checkbox/Checkbox'

import SwipeableViews from "react-swipeable-views";

import { getAllElement, addElement, getOneElement, updateElement } from 'services/Type/TypeService'

export default function TypesViews(){

  return(
    <Switch>
      <Route exact path="/admin/types" component={Types} />
      <Route path="/admin/types/:id" component={TypesDetails} />
    </Switch>
  )
}



const useStyles = makeStyles(styles);

  function Types()  {
    const {UserData} = useAuth();

    const classes = useStyles();
    const [elements, setElements] = useState([]);
    const [elementsToShow, setElementsToShow] = useState([]);
    const [addItem, setAddElements] = useState(false);

    const [changedState, setChangedState] = useState(false);
    const [sucessAdded, setSuccessAdded] = useState(false);
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

        if(!response.data.error){
              if(response.data.types !== undefined){
                  let data = response.data.types.reverse();
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

    // const setNewType = (addedDeliveryMan) => {
    //   setElements( elements=> [addedDeliveryMan, ...elements] )
    //   setElementsToShow(elements=> [addedDeliveryMan, ...elements])
    // }
   
    const addType = (data, token) => {
        addElement(data, token)
        .then(result => {
            if(!result.data.error){
                setElements(elements => [result.data.type, ...elements]);
                setElementsToShow(elements => [result.data.type, ...elements]);
                setAddElements(false);
                setSuccessAdded(true);
                timerResetSuccessAdded.current = setTimeout(() => {
                    setSuccessAdded(false);
                }, 5000);
            }
        })
        .catch(error => {
            // console.log(error.response)
        });
    }

    return (
      <GridContainer >
        {/* <GridItem xs={12} sm={12} md={12}>
          <GridContainer justify="flex-end" alignItems="center" >
              <Button onClick={() => (setAddElements( value => !value))} round color="primary"> {addItem ? "Annuler l'ajout" : "Ajouter un type"}  </Button>
          </GridContainer>
        </GridItem> */}

        {/* <GridItem xs={12} sm={12} md={12}>
          <Collapse in={addItem}>
              <Card >
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>
                      Formulaire d'ajout d'un nouvelle type
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                      
                  </p>
                </CardHeader>
                <CardBody>
                {
                    addItem ?
                       <FormType onSubmit= {addType} data={{name: "", active: true}} />
                    : null
                }
                </CardBody>
              </Card>
          </Collapse>
        </GridItem> */}

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
                        <label> Afficher types selon la validité : </label>
                        <div>
                            <StyledCheckbox checked={state.validate} onChange={handleChange} label="types validé" name="validate" />
                            <StyledCheckbox checked={state.invalidate} onChange={handleChange} label="types non validé" name="invalidate" />
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
        <Collapse in={sucessAdded}>
            <GridItem xs={12} sm={12} md={12}>
                <SnackbarContent
                    message="La type à était ajouter avec succés"
                    close
                    color="success"
                />
            </GridItem>
        </Collapse>
          <Card >
            <CardHeader style={{display: "flex", justifyContent:"space-between", alignItems:"center"}} color="primary">
                <div >
                  <h4 className={classes.cardTitleWhite}>
                    Liste des types
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                    
                  </p>
                </div>
                <div >
                  <SearchInput onChange={researching} placeholder= "rechercher type..."  />
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
    id: 'name', 
    label: 'nom du type', 
    type: "text", 
  },
  {
    id: 'active',
    label: 'etat',
    type: "boolean",
    valueTrue: 'validé',
    valueFalse: 'pas encore validé',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'action',
    label: '',
    type: "link",
    path: 'types',
    content: 'Voir details',
    // minWidth: 170,
    align: 'right',
  }
];




function TypesDetails (props) {
    const classes = useStyles();

    const {UserData} = useAuth();

    const [typeInfo, setTypeInfo] = useState({});
    const [active, setActive] = useState(0);

    const [successUpdate,  setSuccessUpdate]  = useState(false);
    const timerResetSuccessAdded = useRef(null);

    useEffect(() => {
        getOneElement(props.match.params.id, UserData.token)
        .then(result => {
        if(! result.data.error ){
            setTypeInfo(result.data.type);
        }
        })
        .catch(err => {
        // console.log(err.response)
        })

        return () => {
          clearTimeout(timerResetSuccessAdded.current)
        }
    }, []);

    const updateType = (data, token) => {
      updateElement(data, typeInfo.id , token)
        .then(result => {
            if(!result.data.error){
              setTypeInfo(result.data.updatedType);
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
          {/* <Collapse in={updateInfo}> */}
              <Card >
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>
                      details du type
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                      
                  </p>
                </CardHeader>
                <CardBody>
                    <GridItem xs={12} sm={12} md={12}>
                        <GridContainer justify="flex-end" alignItems="center" >
                            <Button onClick={() => (setActive(active=> {return active === 1 ? 0 : 1} ))} round color="primary"> {active ? "Annuler modification" : "modifier ce type"}  </Button>
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
                                  message="Le type à était ajouter avec succés"
                                  close
                                  color="success"
                              />
                          </GridItem>
                      </Collapse>
                            <label> name : </label>  <span> {typeInfo.name} </span>  <br />
                            <label> active : </label>  <span> {typeInfo.active ? "type activé" : "type n'est pas activé"} </span> 
                        </div>
                       <FormType onSubmit= {updateType} data={typeInfo} />
                       
                    </SwipeableViews>
                </CardBody>
              </Card>
          {/* </Collapse> */}
        </GridItem>
      </GridContainer>
        </div>
    )
}

function FormType (props) {
    const {UserData} = useAuth();

    const [nameError, setNameError] = useState(false);
    const [name, setName] = useState('');
    const [validate, setValidite] = useState(true);


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

    return (
        <GridContainer justify="space-around"  alignItems="center" >   
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <TextField
                    value= {name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={ (e) => validateField(e.target.name)} 
                    error={nameError}
                    helperText={nameError ? "ne nom du type n'est pas accépter" : ""}
                    margin="normal"
                    required
                    fullWidth
                    id="type"
                    label="nom du type"
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