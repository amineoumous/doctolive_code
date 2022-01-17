import React, { useEffect, useState } from 'react'


import Config from './../../../EndPoint';



import {useAppContext} from './../../../context/AppointementContext'

import {MdVideocam} from 'react-icons/md'


import ReactFancyBox from './../../../components/fancyBox/fancybox/ReactFancyBox'


import Button from './../../../components/CustomButtons/Button'

import CalendarAvailability from './../../../components/MedecinWidget/CalendarAvailability'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


import {AiOutlineCheckCircle} from 'react-icons/ai'
import GraduateIcon from './../../../assets/icons/svgr/Experience'
import Persson from './../../../assets/icons/svgr/User'
import Cash from './../../../assets/icons/svgr/Money'
import Clock from './../../../assets/icons/svgr/Clock'

import {Row, Col, Container} from 'react-bootstrap'

import moment from 'moment'

import TimeLine from './../../../components/TimeLine'
import Link from 'next/link'

import { useRouter } from 'next/router';

import contentFR from './../../../contentFR'
import contentEN from './../../../contentEN'
import contentAR from './../../../contentAR'

export default function ProfilMedecin ({medecinInfo}) {
    const router = useRouter();
    const {locale} = router;
    const [showDisponibilite, setShowDisponibilite] = useState();
    const [showMap, setShowMap] = useState(false);
    const content = locale === "ar" ? contentAR.profilPage : locale === "en" ? contentEN.profilPage : contentFR.profilPage;
  
    const medecinInfos= medecinInfo? medecinInfo : {specialites:[], tarifs: [],  diplomes: [], info:{}, horaires: []}

    return (
            <Container>
            <Row className="pt-5 mt-5">
                <Col xs="12" md="12" lg="12" xl="3" >
                    <div className="aside">
                        <div className="sidebar-profil">
                            <div className="profil-content">
                                <figure>
                                    <img src={ !medecinInfos.image ?  "/image/medecin/homme.jpg" : `${Config.BACKEND_URL}/${medecinInfos.image}` } alt="" className="img-fluid" />
                                </figure>
                                <div className="medecin-details">
                                    {/* <small>Primary care - Internist</small> */}
                                    <h3>{"DR. " + medecinInfos.nom + ' ' + medecinInfos.prenom} </h3>
                                    {!medecinInfos.teleconsultationIsDisponible ? null : <h4> <span> <MdVideocam /> {content.availableVideo} </span> </h4>} 

                                    <ul className="contacts">
                                        <li>
                                            <h6> {content.profilPage} </h6> 
                                            {
                                                !medecinInfos.adress ? 
                                                "Vous n'avez pas encore spécidier vos information d'accés" : 
                                                (medecinInfos.adress.streetName? medecinInfos.adress.streetName : "") + " " + 
                                                (medecinInfos.adress.buildingName? medecinInfos.adress.buildingName : "") + " " + 
                                                (medecinInfos.adress.floor? "étage " + medecinInfos.adress.floor : "") + " " + 
                                                (medecinInfos.adress.sector? medecinInfos.adress.sector : "") + ", " + 
                                                (medecinInfos.adress.codePostal? medecinInfos.adress.codePostal : "") + " - " + 
                                                (medecinInfos.city ? medecinInfos.city.name  : "") 
                                            } 
                                        </li>
                                        <li><h6> {content.secretariat} </h6>{medecinInfos.phone} </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs="12" md="12" lg="12" xl="9" className="">
                    <div className="box_general">
                    <div className="card">
        <div className="card-body">
            <div className="">
                <Row className="justify-content-around m-0">
        
                    { medecinInfos.pictures.map((picture, index) => {
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
                <Row className="justify-content-around m-0">
                        <Button onClick={() => setShowDisponibilite(medecinInfos)} color="primary"> {content.seeDispo} </Button>
                        <Button onClick={() => setShowMap(true)} color="primary"> {content.seeMap} </Button>
                </Row>
            </div>
        </div>
        {
            showDisponibilite ? 
            <ShowDisponibilite showDisponibilite={showDisponibilite} medecin={medecinInfos} handleClose={() => setShowDisponibilite()} content={content} />
            : null
        }   
        
    </div>
                        <div className="indent_title_in">
                            <Persson />
                            <h3> {content.about} </h3>
                            <p> {content.general} </p>
                        </div>
                        <div className="wrapper_indent">
                            <p> {medecinInfos.presentation} </p>
                            <h6> {content.specialite} </h6>
                            <ul className="bullets">
                                { 
                                    medecinInfos.specialites.map((spec, index) => {
                                        return(
                                            <li key={index}> <span> <AiOutlineCheckCircle /> </span> {spec.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <hr />
                        <div className="indent_title_in">
                            <GraduateIcon />
                            <h3>{content.parcour}</h3>
                            <p> {content.descriptionPArc} </p>
                        </div>
                        <div className="wrapper_indent">
                            {/* <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p> */}
                            <h4> {content.formation} </h4>
                            <TimeLine items={medecinInfos.diplomes.filter((dip) => dip.type === "education")} />
                            <h4>{content.award}</h4>
                            <TimeLine items={medecinInfos.diplomes.filter((dip) => dip.type === "experience")} />
                            <h4> {content.experience} </h4>
                            <TimeLine items={medecinInfos.diplomes.filter((dip) => dip.type === "award")} />
                        </div>  
                        <hr />

                        <div className="indent_title_in">
                            <Cash />
                            <h3> {content.tarif} </h3>
                            <p> {content.details} </p>
                        </div>
                        <div className="wrapper_indent">
                        <p> {content.honore} </p>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th> {content.service} </th>
                                            <th>{content.prix}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            medecinInfos.tarifs.map((tarif, index) => {
                                                return (<tr key={index}>
                                                            <td>{tarif.name}</td>
                                                            <td>{tarif.price} MAD </td>
                                                        </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr />

                        <div className="indent_title_in">
                            <Clock />
                            <h3> {content.horaire} </h3>
                            <p> {content.detailsHeures} </p>
                        </div>
                        <div className="wrapper_indent">
                            <div className="table-responsive">
                                {
                                    medecinInfos.horaires.map((horaire, index) => {
                                        return(
                                            <time className="d-flex" key={index}>
                                                <div style={{flexBasis: 82}} className="">{horaire.jour} : </div>
                                                <div style={{flex: "1 0 0%", paddingRight:16}}>
                                                    { !horaire.is_matin ? null : <span>{moment(horaire.debut_matin, "HH:mm:ss").format('HH:mm')} - {moment(horaire.fin_matin, "HH:mm:ss").format('HH:mm')}</span>}
                                                    {!horaire.is_soir ? null : <span>, {moment(horaire.debut_soir, "HH:mm:ss").format('HH:mm')} - {moment(horaire.fin_soir, "HH:mm:ss").format('HH:mm')}</span>}
                                                </div>
                                            </time>
                                        )
                                    })
                                }
                            
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
         </Container>
        )
    
}

export async function getServerSideProps(context) {
    const res = await fetch(`${Config.BACKEND_URL}/medecin/${context.params.id}`)
    const data = await res.json();

    console.log(data)

    return {
      props: {medecinInfo: data.medecin},
    }
}


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function ShowDisponibilite (props) {

    const [selectedHour, setSelectedHour] = useState()
    const [selectedDate, setSelectedDate] = useState()

    const { content } = props;

    const { setUserTemporary } = useAppContext();

    const router = useRouter()

    const validateTime =  () => {
        setUserTemporary({ date: selectedDate, time: selectedHour, medecinId: props.medecin.id });

        return router.push({
            pathname: `/doctor/${props.showDisponibilite.id}/appointment`,
        })
    }

    const setDetails = (day, hour) => {
        setSelectedDate(day);
        setSelectedHour(hour)
    }

    return(
        <div >
           <Dialog
                open={true}
                maxWidth="lg"
                // fullWidth={true}
                style={props.locale === "ar" ? {direction: "rtl", textAlign: "right"}: {direction: "ltr"}}
                TransitionComponent={Transition}
                keepMounted
                // onClose={props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title"> {content.dispo}  </DialogTitle>
                <DialogContent>
                     <CalendarAvailability {...props}  setSelectedHour={setDetails} />
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