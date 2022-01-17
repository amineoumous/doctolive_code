import React, {useEffect, useState} from 'react'

import Axios from 'axios'
import Config from 'Config'
import { useAuth } from 'context/Auth';

import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import moment from 'moment'
import {Row, Col} from 'react-bootstrap'
import {Link } from 'react-router-dom'
export default function Chat(props) {

    const [teleconsultations, setTeleconsultation] = useState([]);
    const [errors, setErrors] = useState({});
    const {UserData} = useAuth();       

        useEffect(() => {
            Axios.get(`${Config.BACKEND_URL}/medecin/teleconsultation/venir`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `token ${UserData.token}`,
              }})
              .then(response =>{

                if(response){
                  if (!response.data.error) { 
                    if(response.data.consultations){
                        setTeleconsultation(response.data.consultations)
                    }
                    
                  }else{
                    setErrors( (errors) => {return {...errors, events: true}})
                  }
                }
               
              })
              .catch(err=> {

                if(err.response){
          
                  if(err.response.status === 500){
          
                  }
                }
                
              });
          
        return () => {
            
        }
    }, [])
    return (
        <div>
            <h3> Consultation à distance à venir </h3>
            <Row>
                {
                 teleconsultations ?
                 teleconsultations.length > 0 ?
                 teleconsultations.map((teleconsultation, index) => {
                    return(
                        <Col key={index} lg="4" md={12} sm={12} xs={12} >
                            <TeleconsultationCard teleconsultation={teleconsultation} />
                        </Col>
                    )
                 }) 
                 : <h3> Aucune tééléconsultation à venir </h3>  
                 : <h3> Aucune tééléconsultation à venir </h3>  
                }
            </Row>
            
        </div>
    )
}

function TeleconsultationCard ({teleconsultation}){
    return(
        <Card>
            <CardBody>
                <h4> {teleconsultation.title}  </h4>
                <h5> {moment(teleconsultation.date +  teleconsultation.time, "YYYY/MM/DDHH:mm").calendar()}  </h5>
                <p> avec {teleconsultation.patient.nom} {teleconsultation.patient.prenom}   </p>
                <Link to={`/chat-video/${teleconsultation.id}`}> Rejoindre la consultation </Link>
            </CardBody>
        </Card>
    )
}