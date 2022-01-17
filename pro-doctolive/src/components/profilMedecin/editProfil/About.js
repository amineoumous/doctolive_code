import React, {useState, useEffect} from 'react'

import {Row, Col, Collapse, Alert} from 'react-bootstrap'

import  SubmitButton  from 'components/CustomButtons/SubmitButton.js';

import TextFieldM from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


import {getSpecialities, StoreSpeciality} from 'services/medecin/MedecinService'
import { useAuth } from "context/Auth";

export default function About (props)  {
    const {UserData} = useAuth();

    const [specialitiesChoiced, setSpecialitiesChoiced] = useState([])
    const [Specialities, setSpecialities] = useState([])  
    const [etatRequest, setEtatRequest] = useState({success: false, sending:false, donneIncorrect: false});
    useEffect(() => {
        getSpecialities()
        .then(result => {
           
            setSpecialities(result.data.specialities)
        })
        .catch(err => {

        })
        return () => {
            
        }
    }, [])

    useEffect(() => {
        if(props.specialites){
            setSpecialitiesChoiced(props.specialites);
            let cloneS = Specialities.filter((element) => props.specialites.findIndex(e => e.id === element.id) < 0)
            setSpecialities(cloneS)
        }
       
        return () => {
            
        }
    }, [props.specialites])


    const handleSubmit = (e) => {
        e.preventDefault();
        setEtatRequest({sending: true,success: false, donneIncorrect: false})
        let data = {specialities: specialitiesChoiced };

        StoreSpeciality(data, UserData.token)
        .then(res => {
            setEtatRequest({sending: false,success: true, donneIncorrect: false});
        })
        .catch(error =>{ 

            if(error.response){
                if(error.response.data.error){
                    if(error.response.data.message === "token invalid or expired"){
                        // handling disconect
                    }
                }
            }
            setEtatRequest({sending: false,success: false, donneIncorrect: true})
        })
    }

    return (
            <form onSubmit={handleSubmit} className="w-100" autoComplete="off">      
                <Row className="w-100 mb-5">
                    
                    <Col xs="12" md="12" className="mt-5"> 
                    {
                        (specialitiesChoiced !== null && specialitiesChoiced !== undefined) ?
                            <Autocomplete
                                multiple
                                options={Specialities}
                                limitTags={2}
                                getOptionLabel={(option) => option.name}
                                onChange={ (event, newValue) => {
                                    setSpecialitiesChoiced(newValue);          
                                }}
                                value={specialitiesChoiced}
                                filterSelectedOptions
                                renderInput={(params) => (
                                <TextFieldM
                                    {...params}
                                    variant="outlined"
                                    label="Spécialités"
                                    placeholder="Tapez pour filtrer"
                                />
                                )}
                            />
                            :null
                    }
                        
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
                                Vos spécialité est mis à jours avec succées
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
