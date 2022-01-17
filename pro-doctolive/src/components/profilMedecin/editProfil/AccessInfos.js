import React, {useState, useEffect} from 'react'

import {Row, Col, Collapse, Alert} from 'react-bootstrap'


import  SubmitButton  from 'components/CustomButtons/SubmitButton.js';

import TextField from 'components/Inputs/InputIcone/index';


import { FaSearchLocation, FaClinicMedical } from 'react-icons/fa';
import { GiStreetLight, GiStairs, GiMailbox } from 'react-icons/gi';
import { BsBuilding, } from 'react-icons/bs';
// import { FaSearchLocation, } from 'react-icons/gr';

import {getCity, accessInfoStore} from 'services/medecin/MedecinService'
import { useAuth } from "context/Auth";

import MapAccess from './MapAccess'
import Config from 'Config';

export default function GeneralInfos(props)  {
    const {UserData} = useAuth();

    const [accessInfo, setAccessInfo] = useState({})
    const [notHave, setNotHave] = useState(false)
    const [fieldValidationErrors, setFieldValidationErrors] = useState({
        nameError:false,
        domaineError:false,
        anneeError:false,            
    })

    const [etatRequest, setEtatRequest] = useState({success: false, sending:false, donneIncorrect: false});

    useEffect(() => {
       
        
        return () => {
            
        }
    }, [])
    useEffect(() => {
        if(props.accessInfo === null || props.accessInfo === undefined){
            setNotHave(true)
        }else {
            setAccessInfo(props.accessInfo)   
        }
             
        return () => {
            
        }
    }, [props.accessInfo])

    const handleSubmit = (e) => {
        setEtatRequest({sending: true, success: false, donneIncorrect: false})
        e.preventDefault();
        accessInfoStore(accessInfo, UserData.token)
        .then(res => {
            setEtatRequest({sending: false, success: true, donneIncorrect: false})

        })
        .catch(error =>{ 
            setEtatRequest({sending: false, success: false, donneIncorrect: true})
        })
    }


    const validateField = (e) => {
      
    }

    const handleChange = ({target : {value, name}}) => {
        setAccessInfo((i) => { return {...i, [name]: value } })
    }
    const setLocation = (location) => {
        setAccessInfo((i) => { return {...i, latitude: location.lat, longitude: location.lng } })
    }

    return (
            <form onSubmit={handleSubmit} autoComplete="off">
                <Col>
                    <Row>
                        <Col xs="12" md="6" className="mt-3"> 
                            <TextField
                                error={fieldValidationErrors.nomError}
                                placeholder="Nom de la rue"
                                label="Nom de la rue"
                                Icone={GiStreetLight}
                                required={true}
                                variant="outlined"
                                name="streetName"
                                onBlur={validateField} 
                                value={accessInfo.streetName}
                                onChange={handleChange} 
                            />
                             
                        </Col>
                        <Col xs="12" md="6" className="mt-3"> 
                            <TextField
                                placeholder="Nom de l'imeuble"
                                variant="outlined"
                                required={true}
                                error={fieldValidationErrors.prenomError}
                                label="Nom de l'imeuble"
                                Icone={BsBuilding}
                                onBlur={validateField} 
                                name="buildingName"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                  }}
                                value={accessInfo.buildingName}
                                onChange={handleChange} 
                            />
                        </Col>
                        <Col xs="12" md="6" className="mt-3"> 
                            <TextField
                                placeholder="Secteur"
                                variant="outlined"
                                required={true}
                                error={fieldValidationErrors.prenomError}
                                label="Secteur"
                                Icone={FaSearchLocation}
                                onBlur={validateField} 
                                name="sector"
                                value={accessInfo.sector}
                                onChange={handleChange} 
                            />
                        </Col>
                        <Col xs="12" md="6" className="mt-3">
                            <TextField 
                                label="Nom du cabinet"
                                Icone={FaClinicMedical}
                                placeholder="Nom du cabinet"
                                variant="outlined"
                                name="nameCompany"
                                error={fieldValidationErrors.emailError}
                                required={false}
                                onBlur={validateField} 
                                value={accessInfo.nameCompany}
                                onChange={handleChange} 
                                disabled={false}
                            />   
                        </Col> 
                        <Col xs="12" md="6" className="mt-3">
                            <TextField 
                                label="Étage"
                                Icone={GiStairs}
                                placeholder="Étage"
                                variant="outlined"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                  }}
                                name="floor"
                                error={fieldValidationErrors.emailError}
                                required={false}
                                onBlur={validateField} 
                                value={accessInfo.floor}
                                onChange={handleChange} 
                                disabled={false}
                            />   
                        </Col> 
                        <Col xs="12" md="6" className="mt-3">
                            <TextField 
                                label="Numéro d'appartement"
                                Icone={GiStairs}
                                placeholder="Numéro d'appartement"
                                variant="outlined"
                                name="housseNumber"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                  }}
                                error={fieldValidationErrors.emailError}
                                required={false}
                                onBlur={validateField} 
                                value={accessInfo.housseNumber}
                                onChange={handleChange} 
                                disabled={false}
                            />   
                        </Col> 
                        <Col xs="12" md="6" className="mt-3">
                            <TextField 
                                label="Code postale"
                                Icone={GiMailbox}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                  }}
                                placeholder="Code postale"
                                variant="outlined"
                                name="codePostal"
                                error={fieldValidationErrors.emailError}
                                required={false}
                                onBlur={validateField} 
                                value={accessInfo.codePostal}
                                onChange={handleChange} 
                                disabled={false}
                            />   
                        </Col> 
                    </Row>
                    <Row className="mt-5"> 
                        <MapAccess apiKey={Config.apiKey} setLocation={setLocation} location={{lat: accessInfo.latitude, lng: accessInfo.longitude}} />
                    </Row>
                    <Row className="justify-content-center">
                        <Collapse in={ etatRequest.donneIncorecte}>
                            <div className="mt-3">
                                <Alert  variant="danger">
                                    les information sont incorrecte
                                </Alert>
                            </div>
                        </Collapse>
                    </Row>
                    <Row className="justify-content-center">
                        <Collapse in={etatRequest.success}>
                            <div className="mt-3">
                                <Alert  variant="success">
                                    Les informations d'accées au cabinet sont mis à jours avec succées
                                </Alert>
                            </div>
                        </Collapse>
                    </Row>
                    <Row className="align-items-center justify-content-around mt-4 ">
                    <SubmitButton sending={etatRequest.sending} successRequest={etatRequest.success} type="submit" color="primary"> Enregistrer </SubmitButton>
                    </Row>
                </Col>
            
            </form>
    );


}