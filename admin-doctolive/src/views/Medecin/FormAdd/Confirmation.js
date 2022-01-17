import React from 'react'

import  Button  from 'components/CustomButtons/Button.js';

import { useAuth } from "context/Auth";

import {activateElement} from 'services/Medecins/MedecinsService'
export default function Confirmation(props) {
    const {UserData} = useAuth();

    const handleConfirmation = () => {
        activateElement(props.addedElement.id, UserData.token)
        .then(result =>{
            props.confirmedUser(result.data.validatedMedecin)
        })
        .catch(err => {
            // console.log(err)
            if(err.response){
                // console.log(err.response)
            }

        })
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <p> Le médecin à bien était ajouter mais pas encore confirmer. </p>
            <p> Voulez-vous le confirmer maintenant? </p>
            <div className="w-75 d-flex justify-content-around">
                
                 <Button onClick={props.closeAdd} 
                 > Quitter </Button>
                 <Button onClick={handleConfirmation} variant="contained"
                color="primary" > Confirmer </Button>
            </div>
           
        </div>
    )
}
