import React, {useState, useEffect} from 'react'

import {Row, Col, Collapse, Alert} from 'react-bootstrap'


import  SubmitButton  from 'components/CustomButtons/SubmitButton.js';

import PhoneField from 'components/Inputs/PhoneNumber/index';
import TextField from 'components/Inputs/InputIcone/index';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { FaMailBulk, FaPhone, FaUserMd } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';

import {getCity, GeneralInfoUpdate} from 'services/medecin/MedecinService'
import { useAuth } from "context/Auth";


export default function GeneralInfos(props)  {
    const {UserData} = useAuth();

    const [infoGeneral, setInfoGeneral] = useState({})
    const [fieldValidationErrors, setFieldValidationErrors] = useState({
        nameError:false,
        domaineError:false,
        anneeError:false,            
    })

    const [etatRequest, setEtatRequest] = useState({success: false, sending:false, donneIncorrect: false});
    const [villes, setVilles] = useState([]);

    useEffect(() => {
        getCity()
        .then(res => {
            setVilles(res.data.cities)
        })
        .catch(error =>{ console.log("on n'a pas pus se connécter au serveur")})
        return () => {
            
        }
    }, [])
    useEffect(() => {
        setInfoGeneral(props.medecinInfos)      
        console.log(props.medecinInfos)      
          
        return () => {
            
        }
    }, [props.medecinInfos])

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = infoGeneral;

        GeneralInfoUpdate(data, UserData)
        .then(res => {
            setEtatRequest({sending: false,success: true});
        })
        .catch(error =>{ 
            // console.log(error.response)
        })
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

    const handleChange = ({target : {value, name}}) => {
        
        if(name === "phone"){
            value = value
            // Remove all non-digits, turn initial 33 into nothing
            .replace(/[^\d+]/g, '')
            .replace(/^0/, '+212')
            // Stick to first 10, ignore later digits
            .slice(0, 13)
            // Add a space after any 2-digit group followed by more digits
            .replace(/(\d{3})(?=\d)/g, '$1 ')
        }
        setInfoGeneral((i) => { return {...i, [name]: value } })
        // setState({[name]: value}) ;
    }

        return (
            <form onSubmit={handleSubmit} autoComplete="off">
            {
                infoGeneral.nom !== undefined && infoGeneral.nom !== null ?
                <Col>
                    <Row>
                        <Col xs="12" md="6" className="mt-3"> 
                            <TextField
                                error={fieldValidationErrors.nomError}
                                placeholder=""
                                label="Nom"
                                // disabled={true}
                                Icone={FaUserMd}
                                required={true}
                                variant="outlined"
                                name="nom"
                                onBlur={validateField} 
                                value={infoGeneral.nom}
                                onChange={handleChange} 
                            />
                             
                        </Col>
                        <Col xs="12" md="6" className="mt-3"> 
                            <TextField
                                placeholder=""
                                variant="outlined"
                                required={true}
                                error={fieldValidationErrors.prenomError}
                                label="Prenom"
                                // disabled={true}
                                Icone={FaUserMd}
                                onBlur={validateField} 
                                name="prenom"
                                value={infoGeneral.prenom}
                                onChange={handleChange} 
                            />
                        </Col>
                        <Col xs="12" md="6" className="mt-3">
                            <PhoneField 
                                label="Numéro de téléphone" 
                                Icone={FaPhone}
                                name="phone"
                                required={true}
                                variant="outlined"
                                error={fieldValidationErrors.numeroError}
                                onBlur={validateField}
                                value={infoGeneral.phone}
                                placeholder="+212 600 000 000"
                                onChange={handleChange} 
                            />
 
                        </Col>
                        <Col xs="12" md="6" className="mt-3">
                            <TextField 
                                label="Adresse email"
                                Icone={FaMailBulk}
                                placeholder="Adresse email"
                                variant="outlined"
                                name="email"
                                error={fieldValidationErrors.emailError}
                                required={true}
                                onBlur={validateField} 
                                value={infoGeneral.email}
                                onChange={handleChange} 
                                disabled={true}
                            />   
                           
                        </Col> 
                       
                        <Col xs="6" md="6" className="mt-3">
                            {
                                infoGeneral.cityId !== undefined ?
                                <FormControl variant="outlined" fullWidth >
                                <InputLabel id="demo-simple-select-outlined-label">Ville</InputLabel>
                                <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={infoGeneral.cityId}
                                onChange={handleChange}
                                name="cityId"
                                label="Ville"
                                required={true}
                                >
                                {villes.map(((ville, index) =>
                                        <MenuItem key={index} value={ville.id}>{ville.name}</MenuItem>
                                    ))
                                }
                                </Select>
                            </FormControl>
                            : null
                            }
                             
                        </Col>
                        <Col xs="6" md="6" className="my-3">
                            {
                                infoGeneral.sexe !== undefined ?
                                <FormControl component="div">
                                <FormLabel component="legend">Sexe</FormLabel>
                                <RadioGroup className="flex-row" aria-label="Sexe" name="sexe" 
                                    value={
                                        infoGeneral.sexe
                                    } 

                                    onChange={(event)=>{ 
                                        setInfoGeneral( (i) => { return {...i , sexe:event.target.value}})
                                    }}
                                >
                                    <FormControlLabel value='homme' control={<Radio />} label="Homme" />
                                    <FormControlLabel value='femme' control={<Radio />} label="Femme" />
                                </RadioGroup>
                            </FormControl>
                            :null
                            }
                            
                        </Col>
                        <Col xs="6" md="6" className="my-3">
                            {
                                infoGeneral.sexe !== undefined ?
                                <FormControl component="div">
                                <FormLabel component="legend"> Téléconsultation </FormLabel>
                                <RadioGroup className="flex-row" aria-label="teleconsultation" name="teleconsultationIsDisponible" 
                                    value={
                                        infoGeneral.teleconsultationIsDisponible
                                    } 

                                    onChange={(event)=>{ 
                                        console.log(event.target.value)
                                        setInfoGeneral( (i) => { return {...i , teleconsultationIsDisponible: event.target.value == "true" ? true : false}})
                                    }}
                                >
                                    <FormControlLabel value={true} control={<Radio />} label="disponibile" />
                                    <FormControlLabel value={false} control={<Radio />} label="pas disponible" />
                                </RadioGroup>
                            </FormControl>
                            :null
                            }
                            
                        </Col>
                        <Col xs="12" md="12" className="mt-3">
                        <TextField
                            error={fieldValidationErrors.nomError}
                            placeholder=""
                            label="À propos de mois"
                            multiline
                            rows={4}
                            Icone={FaUserMd}
                            required={false}
                            variant="outlined"
                            name="presentation"
                            onBlur={validateField} 
                            value={infoGeneral.presentation}
                            onChange={handleChange} 
                        />
                           
                        </Col> 
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
                                    Votre information personnel sont mis à jours avec succées
                                </Alert>
                            </div>
                        </Collapse>
                    </Row>
                    <Row className="align-items-center justify-content-around mt-4 ">
                    <SubmitButton sending={etatRequest.sending} successRequest={etatRequest.success} type="submit" color="primary"> Enregistrer </SubmitButton>
                    </Row>
                </Col>
                :null
                }
            </form>
    );


}