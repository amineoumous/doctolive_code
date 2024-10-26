
import React, {useState, useEffect} from 'react'

import Config from './../../EndPoint';
import { useRouter } from 'next/router'

import {useAppContext} from './../../context/AppointementContext'

import {MdVideocam} from 'react-icons/md'


import {Row} from 'react-bootstrap'
import ReactFancyBox from './../fancyBox/fancybox/ReactFancyBox'


import Button from './../CustomButtons/Button'
import Link from 'next/link'

import CalendarAvailability from './CalendarAvailability'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Review from './../../components/review/Review'

import moment from 'moment'
export default function MedecinWidget(props) {
    const [showDisponibilite, setShowDisponibilite] = useState();
    const {content, locale} = props;


    const [selectedHour, setSelectedHour] = useState()
    const [selectedDate, setSelectedDate] = useState()


    const { setUserTemporary } = useAppContext();

    const router = useRouter()

    const setDetails = (day, hour) => {
        setSelectedDate(day);
        setSelectedHour(hour)
    }
    const validateTime =  () => {
        setUserTemporary({ date: selectedDate, time: selectedHour, medecinId: props.medecin.id });

        return router.push({
            pathname: `/doctor/${props.medecin?.id}/appointment`,
        })
    }
    return (
        <div className="card br-10">
        <div className="card-body">
            <div className="doctor-widget">
                <div className="doc-info-left">
                    <div className="doctor-img">
                        <a href={"/doctor/"+props.medecin.id}>
                            <img src={props.medecin.image ? `${Config.BACKEND_URL}/${props.medecin.image}` : "/image/medecin/homme.jpg" } className="img-fluid img-100" alt="User Image" />
                        </a>
                        <div className='show-only-mobile'>
                        <Review medium rating={5} className={'show-only-mobile'} size={20} color={"red"} />

                        </div>
                      
                    </div>
                    <div className="doc-info-cont">
                        <h3 className="doc-name"><a href={"/doctor/"+props.medecin.id} className='doc-name'>Dr. {`${props.medecin.nom} ${props.medecin.prenom}`}</a></h3>
                        
                        {
                            props.medecin.specialites.map((specialite, index) => {
                                return (<h4 key={index} className="doc-department-md">{!specialite.icon ? null : <img src={`${Config.BACKEND_URL}/${specialite.icon}`} className="img-fluid" alt="Speciality" />}{specialite.name}</h4>)
                            })
                        }
                        {/* <p className="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p> */}
                         {!props.medecin.teleconsultationIsDisponible ? null : <span className='mt-2'> <MdVideocam /> {content.availableVideo} </span> } 
                     
                        <div className="clinic-details">
                            <p className="doc-location"><i className="fas fa-map-marker-alt"></i> 
                            {
                                !props.medecin.adress ? 
                                content.notSpecified : 
                                (props.medecin.adress.streetName? props.medecin.adress.streetName : "") + " " + 
                                (props.medecin.adress.buildingName? props.medecin.adress.buildingName : "") + " " + 
                                (props.medecin.adress.floor? "étage " + props.medecin.adress.floor : "") + " " + 
                                (props.medecin.adress.sector? props.medecin.adress.sector : "") + ", " + 
                                (props.medecin.adress.codePostal? props.medecin.adress.codePostal : "") + " - " + 
                                (props.medecin.city ? props.medecin.city.name  : "") 
                            } 
                            </p>
                            <Row>
                                { props.medecin.pictures.map((picture, index) => {
                                    return (
                                        <div className="cabinet-img-container ml-2" key={index}>
                                        <ReactFancyBox
                                            thumbnail={`${Config.BACKEND_URL}/${picture.path}`}
                                            showCloseBtn={false}
                                            image={`${Config.BACKEND_URL}/${picture.path}`}/>
                                        </div>
                                    )
                                })
                                }
                            </Row>    
                       
                         
                        
                            <div  className={'show-only-mobile'}>
                        <Button className={'bolde-7 btn-color-primary'} onClick={() => setShowDisponibilite(props.medecin)} color="primary"> {content.seeDispo} </Button> 

                        </div>
                        <div  className={'show-only-desktop'}>
                        <Review medium rating={5} className={'show-only-desktop'} size={26} color={"red"} />
                            <Button className={'bolde-7'} disabled={!selectedHour} onClick={validateTime} color="primary">
                            {content.confirm}
                        </Button> 
                        </div>
                        </div>
                    </div>
                
                </div>
                <div className={locale === "ar" ? "doc-info-leftr show-only-desktop" : "doc-info-right show-only-desktop"}>
                <CalendarAvailability {...props} setSelectedHour={setDetails} />
                <div>
                        {!selectedHour && !selectedDate ? null : content.timeSelected + moment(selectedDate + selectedHour, 'YYYY/MM/DDHH:mm' ).calendar()}
                    </div>
                    <div className="clinic-booking">
                    {/* <Link href={"/doctor/"+props.medecin.id}>
                        <a className="view-pro-btn"> {content.seeProfile} </a>
                    </Link>

                        <Button onClick={() => setShowDisponibilite(props.medecin)} color="primary"> {content.seeDispo} </Button> */}
                    </div>


                    
                </div>
            </div>
        </div>
        {
            showDisponibilite ? 
            <ShowDisponibilite showDisponibilite={showDisponibilite} {...props} handleClose={() => setShowDisponibilite()} />
            : null
        }   
        
    </div>
    )
}


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function ShowDisponibilite (props) {
    const [selectedHour, setSelectedHour] = useState()
    const [selectedDate, setSelectedDate] = useState()

    const {content, locale} = props;

    const { setUserTemporary } = useAppContext();

    const router = useRouter()

    const setDetails = (day, hour) => {
        setSelectedDate(day);
        setSelectedHour(hour)
    }
    const validateTime =  () => {
        setUserTemporary({ date: selectedDate, time: selectedHour, medecinId: props.medecin.id });

        return router.push({
            pathname: `/doctor/${props.medecin.id}/appointment`,
        })
    }

    return(
        <div >
           <Dialog
                open={true}
                maxWidth="lg"
                // fullWidth={true}
                style={locale === "ar" ? {direction: "rtl", textAlign: "right"}: {direction: "ltr"}}
                TransitionComponent={Transition}
                keepMounted
                // onClose={props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title"> {content.dispo}  </DialogTitle>
                <DialogContent>
                     <CalendarAvailability {...props} setSelectedHour={setDetails} />
                </DialogContent>
                <DialogActions>
                    <div>
                        {!selectedHour && !selectedDate ? null : content.timeSelected + moment(selectedDate + selectedHour, 'YYYY/MM/DDHH:mm' ).calendar()}
                    </div>
                    <div>
                        <Button onClick={props.handleClose} color="transparent">
                            {content.cancel}
                        </Button>
                        <Button disabled={!selectedHour} onClick={validateTime} color="primary">
                            {content.confirm}
                        </Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    )
}

