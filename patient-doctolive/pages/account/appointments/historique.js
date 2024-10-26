import React, {useState, useEffect} from 'react'

import {Col, Row} from 'react-bootstrap'
import  Link  from 'next/link';
import Config from './../../../EndPoint'
import moment from 'moment'



import { BsFillCameraVideoFill} from 'react-icons/bs'

import { useAuth } from './../../../context/AuthContext';
import { useRouter } from 'next/router'


import contentFR from './../../../contentFR'
import contentEN from './../../../contentEN'
import contentAR from './../../../contentAR'



function CardAppointment({consultation, app_id}){

    return (
        <>
            <div className={app_id == consultation.id ? "card selected" : "card"}>
                <div className="card-header">
                    <h2 > {moment.utc(consultation.date + consultation.time, 'YYYY/MM/DDHH:mm').calendar()}</h2>
                    {consultation.teleconsultation? <BsFillCameraVideoFill /> : null}
                </div>
                
                <div className="card-body d-flex">
                    <div className="doctor-img">
                        <a >
                            <img src={consultation.medecin.image ? `${Config.BACKEND_URL}/${consultation.medecin.image}` : "/image/medecin/homme.jpg" } className="img-fluid" alt="User Image" />
                        </a>
                    </div>
                    <div  className="doc-info-cont">
                        <h4>  {consultation.title} </h4>
                        <h5 className="doc-name"><a href={`/doctor/${consultation.medecin.id}`}>Dr. {`${consultation.medecin.nom} ${consultation.medecin.prenom}`}</a></h5>
                    </div>
                </div>
                <div className="card-action justify-content-center">
                <Link href={`/account/appointments/historique?app_id=${consultation.id}`}>
                    <a className="link btn btn-primary"> Voir plus de détails </a>
                </Link>
                </div>
            </div>
           
            
        </>
    )
}
export default function Appointments() {

    const router = useRouter()

    const {locale} = router;
    const content = locale === "ar" ? contentAR : locale === "en" ? contentEN : contentFR;


    const [consultations, setConsultations ] = useState([]);
    const [consultation, setConsultation ] = useState();

    const { app_id } = router.query
    const {userData} = useAuth();

    useEffect(() => {
        if(app_id){
            fetch(`${Config.BACKEND_URL}/consultation/${app_id}`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `token ${userData.token}`,
                }
            })
            .then( (r) => r.json()
                .then(res => {
                    if(!res.error){
                        setConsultation(res.consultation)
                    }
                }).catch(error =>{ 
    
                })
            ).catch(error =>{ 
    
            })
            
        }else {
            setConsultation()
        }
       
        return () => {
            
        }
    }, [app_id])

    useEffect( async () => {
        if(!userData.token) return router.push('account/new')

        const res = await fetch(`${Config.BACKEND_URL}/patient/appointments/historique`, {
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization': `token ${userData.token}`,
              },
        })
        const data = await res.json()
        setConsultations(data.consultations)
        return () => {
        
        }
    }, [])
    
    if(!consultations) return (
        <div className="container section-content">
            <h1 className="text-center"> {content.appointments.notAuth} </h1>
            <div className="text-center">
                <Link href="/login">
                    <a className="link btn btn-primary btn-update-pro"> {content.appointments.takeapp} </a>
                </Link>
            </div>
        </div>
    )
    if(consultations.length === 0){
        return (
            <div className="container section-content">
                <h1 className="text-center"> {content.appointments.myapp} </h1>
                <p className="text-center"> {content.appointments.noApp} </p>
                <div className="text-center">
                    <img src="/image/calendar-pro.svg" />
                </div>
                <div className='text-center'>
                    <Link href="/">
                        <a className="link btn btn-primary btn-update-pro"> {content.appointments.takeapp} </a>
                    </Link>
                </div>
                <Row className="m-0 justify-content-center">
                    <Link href={`/account/appointments`}>
                        <a className="link black"> {content.appointments.nextApp} </a>
                    </Link> 
                </Row>
                
                
            </div>
        )
    }

    return (
        <div className="section-content">
            <Row className="m-0 justify-content-center">
                <h1 > {content.appointments.myHistory} </h1>
            </Row>
            <Row className="m-0 justify-content-center">
                <Link href={`/account/appointments`}>
                    <a className="link black"> {content.appointments.nextApp} </a>
                </Link> 
            </Row>
            <Row className="m-0">
                <Col lg="3" className="apointements-left">
                    
                    <div className="patient-appointments">
                        {
                            consultations.map((consultation, index)=> {
                                return(
                                    <Row className="justify-content-center patient-appointment m-0" key={index}>
                                        <CardAppointment content={content} consultation={consultation} app_id={app_id} />
                                    </Row>
                                )
                            })

                        }
                    </div>
                </Col>
                <Col lg="9" >
                    {
                        ! consultation ? null :
                        <Row className="justify-content-center patient-appointment m-0" >
                            <CardDetailsAppointment content={content} consultation={consultation}  />
                        </Row>
                    }
                
                </Col>
            </Row>
            
            
        </div>
    )
    
}




function CardDetailsAppointment({consultation, content}){ 

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h2 > {moment.utc(consultation.date + consultation.time, 'YYYY/MM/DDHH:mm').calendar()}</h2>
                    {consultation.teleconsultation? <BsFillCameraVideoFill /> : null}
                </div>
                
                <div className="card-body">
                    <Row>

                    
                        <Col lg="7" md="12" xs="12">
                            <Row>   
                                <div className="doctor-img">
                                    <a >
                                        <img src={consultation.medecin.image ? `${Config.BACKEND_URL}/${consultation.medecin.image}` : "/image/medecin/homme.jpg" } className="img-fluid" alt="User Image" />
                                    </a>
                                </div>
                                <div  className="doc-info-cont">
                                    <h4>  {consultation.title} </h4>
                                    <h5 className="doc-name"><a href={`/doctor/${consultation.medecin.id}`}>Dr. {`${consultation.medecin.nom} ${consultation.medecin.prenom}`}</a></h5>
                                </div>
                                
                                <div  className="doc-info-cont ml-5">
                                    <ul className="contacts">
                                            <li>
                                                <h6> {content.appointments.accessInfos} </h6> 
                                                {
                                                    !consultation.medecin.adress ? 
                                                    content.appointments.cardApp.notSpecified : 
                                                    (consultation.medecin.adress.streetName? consultation.medecin.adress.streetName : "") + " " + 
                                                    (consultation.medecin.adress.buildingName? consultation.medecin.adress.buildingName : "") + " " + 
                                                    (consultation.medecin.adress.floor? "étage " + consultation.medecin.adress.floor : "") + " " + 
                                                    (consultation.medecin.adress.sector? consultation.medecin.adress.sector : "") + ", " + 
                                                    (consultation.medecin.adress.codePostal? consultation.medecin.adress.codePostal : "") + " - " + 
                                                    (consultation.medecin.city ? consultation.medecin.city.name  : "") 
                                                } 
                                            </li>
                                            <li><h6> {content.appointments.secretariat} </h6>{consultation.medecin.phone} </li>
                                        </ul>
                                </div>

                            </Row>
                            
                        </Col>
                            
                        </Row>  
                        
                        {! consultation.teleconsultation?  null:
                            <Row className="mt-5">
      
                                <Col  md="6">
                                <Link href={`/consultation/${consultation.id}`}>
                                    <a className="link btn btn-primary btn-update-pro"> {content.appointments.cardApp.seeInfosShared} </a>
                                </Link> 
                                </Col>
                            </Row>
                        }                    
                </div>
               
            </div>
            
            
        </>
    )
}