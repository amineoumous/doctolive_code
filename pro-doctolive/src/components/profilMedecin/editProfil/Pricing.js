
import React,{useState, useEffect} from 'react'

import {Row, Col, Collapse, Alert} from 'react-bootstrap'

import  SubmitButton  from 'components/CustomButtons/SubmitButton.js';

import TextField from 'components/Inputs/InputIcone/index';

import {  FaUserMd } from 'react-icons/fa';

import { makeStyles } from '@material-ui/core/styles';


import NumberFormat from 'react-number-format';

import Fab from '@material-ui/core/Fab';

import IconButton from '@material-ui/core/IconButton';

import {MdSave, MdDelete, MdAdd} from 'react-icons/md'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Tooltip from '@material-ui/core/Tooltip';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import {StoreTarifs, DeleteTarif, UpdateTarif} from 'services/medecin/MedecinService'
import { useAuth } from "context/Auth";


const useStyles = makeStyles((theme) => ({
    deleteButton: {
      margin: theme.spacing(2),
      color: "#d92550",

    },
    saveButton: {
        margin: theme.spacing(2),
        color: "#5BC236",
    },
   
  }));
export default function Pricing(props)  {
    const {UserData} = useAuth();

    const [pricings, setPricings] = useState([])
    const [savedPricings, setSavedPricings] = useState([])
    const [etatRequest, setEtatRequest] = useState({success: false, sending:false, donneIncorrect: false});

    useEffect(() => {
        // console.log(props.pricings)
        // if(props.pricings !== undefined){
            setSavedPricings(props.pricing)
        // }
        
        return () => {
            
        }
    }, [props.pricing])
// pricing
    const handleSubmit = (e) => {
        e.preventDefault();
        setEtatRequest({sending: true,success: false})

        StoreTarifs(pricings, UserData.token)
        .then(res => {
            setSavedPricings( old =>  [...old, ...pricings]);
            setPricings([]);
            setEtatRequest({sending: false,success: true});
        })
        .catch(error =>{
            setEtatRequest({sending: false,success: false, donneIncorrect: true})
        })
    }

    const setElement = (pricing, index) => {
        setSavedPricings((exp) => {
            let clonePri = [...exp];
            clonePri[index] = pricing;
            return clonePri
        })
    }
    const setNewElement = (pricing, index) => {
        setPricings((exp) => {
            let clonePri = [...exp];
            clonePri[index] = pricing;
            return clonePri
        })
    }
    const addElement = () => {
        setPricings(e=> [...e, {name: "", price:'200'}])
    }
    const deleteElement = (index) => {

        setSavedPricings(oldPri => {

            let clonePri = [...oldPri];
            clonePri.splice(index, 1);

            return clonePri;
        });
    }

    return (
        <>
        <Row className="w-100">
            { (savedPricings !== undefined) ?
                (savedPricings.length > 0) ?
                    savedPricings.map((pricing, index) => {
                        return(
                            <div className="w-100" key={index}>
                                <ExistFormlement UserData={UserData} setPricings={setPricings} index={index} pricing={pricing} setElement={setElement} deleteElement={deleteElement} />
                            </div>
                        )
                    })
                    : <div> Vous n'avez aucune tarif de services </div>
                    :null
            }
        </Row>
        
        <form onSubmit={handleSubmit} className="w-100" autoComplete="off">
            { (pricings !== undefined) ?
            (pricings.length > 0) ?
                pricings.map((pricing, index) => {
                    return(
                        <div key={index}>
                            <Formlement index={index} pricing={pricing} setElement={setNewElement} deleteElement={deleteElement} />
                        </div>
                    )
                })
                : null
                :null
            }
            <Row className="align-items-center justify-content-around mt-4 ">
                <Tooltip onClick={addElement} title="Add" aria-label="add">
                    <Fab color="primary" >
                        <MdAdd />
                    </Fab>
                </Tooltip>
            </Row>
            <Row>
                <Collapse in={ etatRequest.donneIncorecte}>
                    <div>
                        <Alert  variant="danger">
                            les information sont incorrecte
                        </Alert>
                    </div>
                </Collapse>
            </Row>
            <Row>
                <Collapse in={etatRequest.success}>
                    <div >
                        <Alert  variant="success">
                            Votre tarification est mis à jours avec succées
                        </Alert>
                    </div>
                </Collapse>
            </Row>           
            <Row className="align-items-center justify-content-around mt-4 ">
                <SubmitButton sending={etatRequest.sending} successRequest={etatRequest.success} type="submit" color="primary"> Enregistrer </SubmitButton>
            </Row>
        </form>

        </>
        );
    
}

    function Formlement(props) {

        const [fieldValidationErrors, setFieldValidationErrors] = useState({
            nameError:false,
            priceError:false,
            anneeError:false,            
        })
        const classes = useStyles();


        const handleChange = (e) => {
            props.setElement({...props.pricing, [e.target.name] : e.target.value}, props.index) 
        }
        const validateField = (e) => {
            let field = e.target;
            switch (field.name) {
                case "name":
                    setFieldValidationErrors( err => { return {...err, nameError:  field.value.length < 3}});
                    break;
                case "price":
                    setFieldValidationErrors(err => { return {...err, priceError:  field.value.length < 3}});
                    break;
               
                default:
                    break;
            }
        }
        return(
            <Row className="w-100" >
                <Col xs="11" md="11">
                    <Row>
                        
                        <Col xs="12" md="6" className="mt-3"> 
                            <TextField
                                error={fieldValidationErrors.priceError}
                                placeholder=""
                                label="Service - Visit"
                                Icone={FaUserMd}
                                required={true}
                                variant="outlined"
                                name="name"
                                onBlur={validateField} 
                                value={props.pricing.name}
                                onChange={handleChange} 
                            />
                        </Col>
                        <Col xs="12" md="6" className="mt-3"> 
                        <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="formatted-text-mask-input"> Prix </InputLabel>
                                <OutlinedInput
                                 label="Prix"
                                 value={props.pricing.price}
                                 onChange={handleChange}
                                 name="price"
                                 id="formatted-numberformat-input"
                                 inputComponent={NumberFormatCustom}
                                />
                            </FormControl>
                        </Col>
                    </Row>
                </Col>
                <Col xs="1" md="1">
                {
                    props.index !== 0 ?
                        <Col xs="12" md="3" className="mt-3"> 
                            <Tooltip onClick={() => props.deleteElement(props.index)} title="Delete">
                                <IconButton className={classes.deleteButton} aria-label="delete">
                                    <MdDelete />
                                </IconButton>
                            </Tooltip>
                        </Col>
                    : null
                }
                </Col>
                
                
               
            </Row>
        )
    }


    function ExistFormlement(props) {

        const [pricing, setPricing] = useState(props.pricing);
        const [fieldValidationErrors, setFieldValidationErrors] = useState({
            nameError:false,
            priceError:false,
            anneeError:false,            
        })
        const classes = useStyles();


        const handleChange = (e) => {
            let target = e.target;
            setPricing( oldPricing => {return {...oldPricing, [target.name] : target.value}}) 
        }
        const validateField = (e) => {
            let field = e.target;
            switch (field.name) {
                case "name":
                    setFieldValidationErrors( err => { return {...err, nameError:  field.value.length < 3}});
                    break;
                case "price":
                    setFieldValidationErrors(err => { return {...err, priceError:  field.value.length < 3}});
                    break;
               
                default:
                    break;
            }
        }

        const deleteElement = () => {
            DeleteTarif(props.pricing.id, props.UserData.token) 
            .then(res => {
                props.deleteElement(props.index)
            })
            .catch(err => {

            })
        }

        const _updateTarif = () => {
            UpdateTarif(pricing, props.pricing.id, props.UserData.token) 
            .then(res => {
                props.setElement(pricing, props.index)
            })
            .catch(err => {
                
            })
        }
        
        return(
            <Row className="w-100" >
                <Col xs="10" md="10">
                    <Row>
                        
                        <Col xs="12" md="6" className="mt-3"> 
                            <TextField
                                error={fieldValidationErrors.priceError}
                                placeholder=""
                                label="Service - Visit"
                                Icone={FaUserMd}
                                required={true}
                                variant="outlined"
                                name="name"
                                onBlur={validateField} 
                                value={pricing.name}
                                onChange={handleChange} 
                            />
                        </Col>
                        <Col xs="12" md="6" className="mt-3"> 
                        <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="formatted-text-mask-input"> Prix </InputLabel>
                                <OutlinedInput
                                 label="Prix"
                                 value={pricing.price}
                                 onChange={handleChange}
                                 name="price"
                                 id="formatted-numberformat-input"
                                 inputComponent={NumberFormatCustom}
                                />
                            </FormControl>
                        </Col>
                    </Row>
                </Col>
                <Col xs="1" md="1">
                        <Col xs="12" md="3" className="mt-3"> 
                            <Tooltip onClick={deleteElement} title="Delete">
                                <IconButton className={classes.deleteButton} aria-label="delete">
                                    <MdDelete />
                                </IconButton>
                            </Tooltip>
                        </Col>
                </Col>
                <Col xs="1" md="1">
                        <Col xs="12" md="3" className="mt-3"> 
                            <Tooltip onClick={_updateTarif} title="Delete">
                                <IconButton className={classes.saveButton} aria-label="delete">
                                    <MdSave />
                                </IconButton>
                            </Tooltip>
                        </Col>
                </Col>
                
               
            </Row>
        )
    }
    function NumberFormatCustom(props) {
        const { inputRef, onChange, ...other } = props;
      
        return (
          <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
              onChange({
                target: {
                  name: props.name,
                  value: values.value,
                },
              });
            }}
            thousandSeparator
            isNumericString
            prefix="MAD : "
          />
        );
      }