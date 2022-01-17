
import React,{useState, useEffect} from 'react'

import {Row, Col, Collapse, Alert} from 'react-bootstrap'

import  SubmitButton  from 'components/CustomButtons/SubmitButton.js';

import TextField from 'components/Inputs/InputIcone/index';

import {  FaUserMd } from 'react-icons/fa';

import { makeStyles } from '@material-ui/core/styles';


import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MaskedInput from 'react-text-mask';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


import {StoreExperiences} from 'services/medecin/MedecinService'
import { useAuth } from "context/Auth";

const useStyles = makeStyles((theme) => ({
    deleteButton: {
      margin: theme.spacing(2),
      color: "#d92550",

    },
   
  }));
export default function Education(props)  {
    const {UserData} = useAuth();

    const [experiences, setExperiences] = useState([{name: "",domaine:"",annee:'2000-2007', type: "", link:" "}])
    const [etatRequest, setEtatRequest] = useState({success: false, sending:false, donneIncorrect: false});

    useEffect(() => {
        setExperiences(props.experiences)
        return () => {
            
        }
    }, [props.experiences])


    const handleSubmit = (e) => {
        e.preventDefault();
        setEtatRequest({sending: true,success: false})

        let data = {experiences: experiences};

        StoreExperiences(data, UserData.token)
        .then(res => {
            setEtatRequest({sending: false,success: true});
        })
        .catch(error =>{
            setEtatRequest({sending: false,success: false, donneIncorrect: true})
        })
    }

    const setExperience = (formation, index) => {
        setExperiences((exp) => {
            let cloneExp = [...exp];
            cloneExp[index] = formation;
            return cloneExp
        })
    }
    const addExperience = () => {
        setExperiences(e=> [...e, {naame: "",domaine:"",annee:'2000-2007',}])
    }
    const deleteElement = (index) => {
        let cloneExp = [...experiences];
        cloneExp.splice(index, 1)
        setExperiences(cloneExp);
    }

    return (
        <form onSubmit={handleSubmit} className="w-100" autoComplete="off">
            { (experiences !== null && experiences !== undefined )?
                experiences.map((formation, index) => {
                    return(
                        <div key={index}>
                        <Formlement index={index} formation={formation} setExperience={setExperience} deleteElement={deleteElement} />
                        </div>

                    )
                })
                :null
            }
            <Row className="align-items-center justify-content-around mt-4 ">
                <Tooltip onClick={addExperience} title="Add" aria-label="add">
                    <Fab color="primary" >
                        <AddIcon />
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
                            Votre parcours est mis à jours avec succées
                        </Alert>
                    </div>
                </Collapse>
            </Row>

            <Row className="align-items-center justify-content-around mt-4 ">
                <SubmitButton sending={etatRequest.sending} successRequest={etatRequest.success} type="submit" color="primary"> Enregistrer </SubmitButton>
            </Row>
        </form>
        );
    
}

    function Formlement(props) {

        const [fieldValidationErrors, setFieldValidationErrors] = useState({
            nameError:false,
            domaineError:false,
            anneeError:false,            
        })
        const classes = useStyles();


        const handleChange = (e) => {
            props.setExperience({...props.formation, [e.target.name] : e.target.value}, props.index) 
        }
        const validateField = (e) => {
            let field = e.target;
            switch (field.name) {
                case "name":
                    setFieldValidationErrors( err => { return {...err, nameError:  field.value.length < 3}});
                    break;
                case "domaine":
                    setFieldValidationErrors(err => { return {...err, domaineError:  field.value.length < 3}});
                    break;
                case "annee":
                    setFieldValidationErrors(err => { return {...err, anneeError:  field.value.length < 3}});
                    break;
                default:
                    break;
            }
        }
        return(
            <Row className="w-100" >
                <Col xs="11" md="11">
                    <Row>
                        <Col xs="12" md="3" className="mt-3"> 
                            <TextField
                                error={fieldValidationErrors.nameError}
                                placeholder=""
                                label="Ecole/Faculté/société"
                                Icone={FaUserMd}
                                required={true}
                                variant="outlined"
                                name="name"
                                onBlur={validateField}
                                value={props.formation.name}
                                onChange={handleChange} 
                                helperText={fieldValidationErrors.nameError? "le nom de l'école doit contenir au moins 3 caractére" : ""}
                            />
                        </Col>
                        <Col xs="12" md="3" className="mt-3"> 
                            <TextField
                                error={fieldValidationErrors.domaineError}
                                placeholder=""
                                label="Domaine/Mission"
                                Icone={FaUserMd}
                                required={true}
                                variant="outlined"
                                name="domaine"
                                onBlur={validateField} 
                                value={props.formation.domaine}
                                onChange={handleChange} 
                            />
                        </Col>
                        <Col xs="12" md="3" className="mt-3"> 
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="formatted-text-mask-input"> Année de débur et de fin </InputLabel>
                                <OutlinedInput
                                    error={fieldValidationErrors.anneeError}
                                    value={props.formation.annee}
                                    onChange={handleChange}
                                    onBlur={validateField}
                                    name="annee"
                                    label="Année de débur et de fin" 
                                    id="formatted-text-mask-input"
                                    inputComponent={TextMaskCustom}
                                />
                            </FormControl>
                        </Col>
                        <Col xs="12" md="3" className="mt-3"> 
                        <FormControl variant="outlined" fullWidth >
                            <InputLabel id="demo-simple-select-label">Type d'éxperience</InputLabel>
                            <Select
                                name="type"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Type d'éxperience"
                                value={props.formation.type}
                                onChange={handleChange}
                            >
                                <MenuItem value={"education"}> Etude supérieur </MenuItem>
                                <MenuItem value={"experience"}> expérience professionnel </MenuItem>
                                <MenuItem value={"award"}> prix </MenuItem>
                            </Select>
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
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </Col>
                    : null
                }
                </Col>
                
                
               
            </Row>
        )
    }
    function TextMaskCustom(props) {
        const { inputRef, ...other } = props;
      
        return (
          <MaskedInput
            {...other}
            ref={(ref) => {
              inputRef(ref ? ref.inputElement : null);
            }}
            mask={[ /[1-9]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
          />
        );
      }

