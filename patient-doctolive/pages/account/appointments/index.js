import React, {useState, useEffect} from 'react'

import {Col, Row} from 'react-bootstrap'
import  Link  from 'next/link';
import Config from './../../../EndPoint'
import moment from 'moment'
import Button from './../../../components/CustomButtons/Button'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


import {BsX, BsFillCameraVideoFill} from 'react-icons/bs'
import {MdUpdate} from 'react-icons/md'
import { useAuth } from './../../../context/AuthContext';
import { useRouter } from 'next/router'

import MapAccess from './../../../components/MedecinWidget/MapAccess'
import CalendarAvailability from './../../../components/MedecinWidget/CalendarAvailability'


import contentFR from './../../../contentFR'
import contentEN from './../../../contentEN'
import contentAR from './../../../contentAR'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function CardAppointment({consultation, app_id, content}){

    return (
        <>
            <div className={app_id == consultation.id ? "card selected" : "card"}>
                <div className="card-header">
                    <h2 > {moment(consultation.date + consultation.time, 'YYYY/MM/DDHH:mm').calendar()}</h2>
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
                <Link href={`/account/appointments?app_id=${consultation.id}`}>
                    <a className="link btn btn-primary"> {content.appointments.cardApps.link} </a>
                </Link>
                </div>
                {/* <div className="card-action">
                    <Button onClick={() => setConfirmUpdate(true)} color="transparent"> <MdUpdate /> Déplacer </Button>
                    <Button color="transparent"onClick={() => setConfirmCancel(true)} style={{color:"#f1000f"}}> <BsX size= "32px" />  Annuler le rendez-vous </Button>
                </div> */}
            </div>
           
            
        </>
    )
}
export default function Appointments() {
    const [consultations, setConsultations ] = useState([]);
    const [consultation, setConsultation ] = useState();

    const router = useRouter();
    const {locale} = router;
    const content = locale === "ar" ? contentAR : locale === "en" ? contentEN : contentFR;

    const { app_id } = router.query
    const {userData} = useAuth();
    console.log(userData)
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

        const res = await fetch(`${Config.BACKEND_URL}/patient/appointments/venir`, {
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
    const handleCanceledApp = (id) => {
        let index = consultations.findIndex(cns => cns.id === id);
        if(index > -1){
            setConsultations(old => {
                let cloneOld = [...old];
                cloneOld.splice(index, 1);
                return cloneOld
            })
        }
    }
    const handleUpdatedApp = (id, consultation) => {
        let index = consultations.findIndex(cns => cns.id === id);
        if(index > -1){
            setConsultations(old => {
                let cloneOld = [...old];
                cloneOld[index] = consultation;
                return cloneOld
            })
        }
    }
    if( !consultations) return (
        <div className="container section-content">
            <h1 className="text-center">  </h1>
            <div className="text-center">
               
            </div>
        </div>
    )
    if(consultations.length === 0){
        return (
            <div className="container section-content">
                <h1 className="text-center"> {content.appointments.myapp} </h1>
                <p className="text-center"> {content.appointments.noApp} </p>
                <Row className="m-0 justify-content-center">
                    <Link href={`/account/appointments/historique`}>
                        <a className="link black"> {content.appointments.history}  </a>
                    </Link> 
                </Row>
                <div className="text-center">
                    <Link href="/">
                        <a className="link btn btn-primary"> {content.appointments.takeapp}  </a>
                    </Link>
                </div>
            
                
                
            </div>
        )
    }

    return (
        <div className="section-content-app">
            <Row className="m-0 justify-content-center">
                <h1 > {content.appointments.myapp} </h1>
            </Row>
            <Row className="m-0 justify-content-center">
                <Link href={`/account/appointments/historique`}>
                    <a className="link black"> {content.appointments.history} </a>
                </Link> 
            </Row>
            
            <Row className="m-0">
                <Col lg="3" className="apointements-left">
                    
                    <div className="patient-appointments">
                        {
                            consultations.map((consultation, index)=> {
                                return(
                                    <Row className="justify-content-center patient-appointment m-0" key={index}>
                                        <CardAppointment content={content} consultation={consultation} handleUpdatedApp= {handleUpdatedApp} handleCanceledApp={handleCanceledApp} app_id={app_id} />
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
                            <CardDetailsAppointment content={content} consultation={consultation} handleUpdatedApp= {handleUpdatedApp} handleCanceledApp={handleCanceledApp} />
                        </Row>
                    }
                
                </Col>
            </Row>
            
            
        </div>
    )
    
}


function CardDetailsAppointment({consultation, handleCanceledApp, content, handleUpdatedApp}){
    const {userData} = useAuth();
    const [ShowonfirmCancel, setConfirmCancel] = useState(false);
    const [ShowonfirmUpdate, setConfirmUpdate] = useState(false);
    const [selectedHour, setSelectedHour] = useState()
    const [selectedDate, setSelectedDate] = useState()


    const setDetails = (day, hour) => {
        setSelectedDate(day);
        setSelectedHour(hour)
    }

    const cancelAppointement = () => {
        fetch(`${Config.BACKEND_URL}/consultation/cancel/${consultation.id}`,{
            method:"PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${userData.token}`,
            },
            body:JSON.stringify({})
        })
        .then(
            (r) => r.json()
            .then(res => {

                if(!res.error){
                    setConfirmCancel(false);
                    handleCanceledApp(consultation.id)
                }else {
                    if(res.validator){

                    }else{

                    }
                }
           
            })
            ).catch(error =>{ 
                console.log(error)
            })
    }
    const validateTime =() => {
        fetch(`${Config.BACKEND_URL}/consultation/deplacer/${consultation.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${userData.token}`,
            },
            body:JSON.stringify({date: selectedDate, time: selectedHour })
        })
        .then(
            (r) => r.json()
            .then(res => {
                if(!res.error){
                    setConfirmUpdate(false);
                    handleUpdatedApp(consultation.id, res.consultation)
                }else {
                    if(res.validator){

                    }else{

                    }
                }
           
            })
        ).catch(error =>{ 
            console.log(error)
                // setResponse({sending: false, success:false, donneIncorecte:true})
        })
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h2 > {moment(consultation.date + consultation.time, 'YYYY/MM/DDHH:mm').calendar()}</h2>
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
                                                <h6> {content.appointments.cardApp.accessInfos}   </h6> 
                                                {
                                                    !consultation.medecin.adress ? 
                                                    "Vous n'avez pas encore spécifier vos information d'accés" : 
                                                    (consultation.medecin.adress.streetName? consultation.medecin.adress.streetName : "") + " " + 
                                                    (consultation.medecin.adress.buildingName? consultation.medecin.adress.buildingName : "") + " " + 
                                                    (consultation.medecin.adress.floor? "étage " + consultation.medecin.adress.floor : "") + " " + 
                                                    (consultation.medecin.adress.sector? consultation.medecin.adress.sector : "") + ", " + 
                                                    (consultation.medecin.adress.codePostal? consultation.medecin.adress.codePostal : "") + " - " + 
                                                    (consultation.medecin.city ? consultation.medecin.city.name  : "") 
                                                } 
                                            </li>
                                            <li><h6> {content.appointments.cardApp.secretariat} </h6>{consultation.medecin.phone} </li>
                                        </ul>
                                </div>

                            </Row>
                            
                        </Col>
                            
                        <Col lg="5" md="12" xs="12" className="order-sm-last">
                            <MapAccess apiKey={Config.apiKey} locations={[{latitude: consultation.medecin.adress.latitude, longitude: consultation.medecin.adress.longitude}]} />
                        </Col>
                        </Row>  
                        
                        {! consultation.teleconsultation?  null:
                            <Row className="mt-5">
                                <Col md="6">
                                    <p>  {content.appointments.cardApp.click} </p>
                                </Col>
                                <Col  md="6">
                                <Link href={`/consultation/${consultation.id}`}>
                                    <a className="link btn btn-primary"> {content.appointments.cardApp.rejoindre} </a>
                                </Link> 
                                </Col>
                            </Row>
                        }                    
                </div>
                <div className="card-action">
                    <Button onClick={() => setConfirmUpdate(true)} color="transparent"> <MdUpdate /> {content.appointments.cardApp.deplacer} </Button>
                    <Button color="transparent"onClick={() => setConfirmCancel(true)} style={{color:"#f1000f"}}> <BsX size= "32px" /> {content.appointments.cardApp.annuler} </Button>
                </div>
            </div>
            <Dialog
                open={ShowonfirmCancel}
                maxWidth="lg"
                // fullWidth={true}
                TransitionComponent={Transition}
                keepMounted={false}
                onClose={() => setConfirmCancel(false)}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title"> {content.appointments.cardApp.confirmCancel}  </DialogTitle>
                <DialogContent>
                {content.appointments.cardApp.wantYou}  {moment(consultation.date + consultation.time, 'YYYY/MM/DDHH:mm').calendar()} {content.appointments.cardApp.with} Dr. {`${consultation.medecin.nom} ${consultation.medecin.prenom}`}
                </DialogContent>
                <DialogActions>                        
                        <Button onClick={() => setConfirmCancel(false)} color="transparent">
                            {content.appointments.cardApp.retour}
                        </Button>
                        <Button onClick={cancelAppointement} color="danger">
                            {content.appointments.cardApp.annuler}
                        </Button>
                </DialogActions>
            </Dialog>
            {
                !ShowonfirmUpdate? null :
                <Dialog
                    open={ShowonfirmUpdate}
                    maxWidth="lg"
                    TransitionComponent={Transition}
                    keepMounted
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title"> {content.appointments.cardApp.docAvai} </DialogTitle>
                    <DialogContent>
                        <CalendarAvailability showDisponibilite={consultation.medecin}  setSelectedHour={setDetails} />
                    </DialogContent>
                    <DialogActions>
                        <div>

                            {!selectedHour && !selectedDate ? null : content.appointments.cardApp.selecTtime + " : " + moment(selectedDate + selectedHour, 'YYYY/MM/DDHH:mm' ).calendar()}
                        </div>
                        <div>
                            <Button onClick={() => {setConfirmUpdate(false)}} color="transparent">
                                {content.appointments.cardApp.retour}
                            </Button>
                            <Button disabled={!selectedHour} onClick={validateTime} color="primary">
                                {content.appointments.cardApp.confirm}
                            </Button>
                        </div>
                    </DialogActions>
                </Dialog>
            }
            
        </>
    )
}