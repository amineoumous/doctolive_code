import React, { useEffect, useState,useRef } from 'react'


import Config from './../../../EndPoint';



import {useAppContext} from './../../../context/AppointementContext'

import {MdVideocam,MdOutlineFormatAlignLeft } from 'react-icons/md'


import ReactFancyBox from './../../../components/fancyBox/fancybox/ReactFancyBox'


import Button from './../../../components/CustomButtons/Button'

import CalendarAvailability from './../../../components/MedecinWidget/CalendarAvailability'
import Review from './../../../components/review/Review'


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { BiMap } from "react-icons/bi";
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { FaGraduationCap,FaUsers,FaDollarSign,FaRegClock,FaRegUser,FaRegCalendarPlus      } from "react-icons/fa";

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
    const [activeLink, setActiveLink] = useState('');
    const presentationRef = useRef(null);
    const essentialRef = useRef(null);
    const scheduleRef = useRef(null);
  
    const scrollToDiv = (ref) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    const handleLinkClick = (section) => {
      setActiveLink(section);
      switch (section) {
        case 'presentation':
          scrollToDiv(presentationRef);
          break;
        case 'essential':
          scrollToDiv(essentialRef);
          break;
        case 'schedule':
          scrollToDiv(scheduleRef);
          break;
        default:
          break;
      }
    };
    return (
        <div>
        <Row className="header-profile">
        <Container>
        <Col xs="12" md="12" lg="12" xl="12" className='display-flex-i' >
                      <figure>
                          <img src={ !medecinInfos.image ?  "/image/medecin/homme.jpg" : `${Config.BACKEND_URL}/${medecinInfos.image}` } alt="" className="img-fluid img-medecin" />
                      </figure>
                      <div className='name-medecin'>
                       <h4>{"DR. " + medecinInfos.nom + ' ' + medecinInfos.prenom} </h4>
                     
                       {
    medecinInfos?.specialites?.map((spec, index) => (
        <span className='specialite-i' key={index}>
            {spec.name}
            {index < medecinInfos.specialites.length - 1 ? ", " : ""}
        </span>
    ))
}
                      
<Review medium rating={5} />
                      </div>
                      <img src="/image/medecin/world-health-day.svg"  alt="" className="img-grp-medecin show-only-desktop " />
                      

        </Col>       
        </Container>

        </Row>
        <Row>
            <Container className='for-navigate-doctor'>
                <Col xs="12" md="6" lg="6" xl="12">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <a
          href="#"
          className={`link-medecin ${activeLink === 'presentation' ? 'active-header' : ''}`}
          onClick={() => handleLinkClick('presentation')}
          style={{ flex: 1 }}
        >
          Présentation
        </a>
        <a
          href="#"
          className={`link-medecin ${activeLink === 'essential' ? 'active-header' : ''}`}
          onClick={() => handleLinkClick('essential')}
          style={{ flex: 1 }}
        >
          L’essentiel
        </a>
        <a
          href="javascript:void(0)"
          className={`link-medecin ${activeLink === 'schedule' ? 'active-header' : ''}`}
          onClick={() => handleLinkClick('schedule')}
          style={{ flex: 1 }}
        >
          Horaire
        </a>
        <a
          href="#"
          className='link-medecin'
          style={{ flex: 1 }}
        >
          Carte
        </a>
      </div>
                </Col>
            </Container>
        </Row>
        <Row className='bg-md'>
            <Container>
            
            <Row className="pt-5 ">
                <Col xs="12" md="12" lg="12" xl="3" className='hide'  >
                    <div className="aside">
                        <div className="sidebar-profil">
                            <div className="profil-content">
                                <figure>
                                    <img src={ !medecinInfos.image ?  "/image/medecin/homme.jpg" : `${Config.BACKEND_URL}/${medecinInfos.image}` } alt="" className="img-fluid" />
                                </figure>
                                <div className="medecin-details">
                                    {/* <small>Primary care - Internist</small> */}
                                    <h3>{"DR. " + medecinInfos.nom + ' ' + medecinInfos.prenom} </h3>


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

                <Col xs="12" md="12" lg="12" xl="12" className="">
                 <p className='text-center title-medecin-p'>DOCTOLIVE.... CABINET DE DEMAIN....</p>
                </Col>

                <Col xs="12" md="12" lg="12" xl="8" className=""  ref={presentationRef}>
                    <div className="box_general">

                    <div className="card">
        {/* <div className="card-body">
            <div className="">
                <Row className="justify-content-around m-0">
        
                    { medecinInfos?.pictures?.map((picture, index) => {
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
        </div> */}
        {
            showDisponibilite ? 
            <ShowDisponibilite showDisponibilite={showDisponibilite} medecin={medecinInfos} handleClose={() => setShowDisponibilite()} content={content} />
            : null
        }   
        
    </div>
                        <div className="indent_title_in">
                            {/* <Persson /> */}
                            {/* <h3> {content.about} </h3> */}
                            <MdOutlineFormatAlignLeft color='#61788E' size={20} />
                            <h3> {content.general} </h3>
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
                            <FaGraduationCap color='#61788E' size={20} />
                            <h3>{content.formation}</h3>
              
                        </div>
                        <div className="wrapper_indent">
                          
                            <TimeLine items={medecinInfos.diplomes.filter((dip) => dip.type === "education")} />
                          
                        </div>  
                        <hr />

                        <div className="indent_title_in2">
                       
                            <img src="/image/microscope.svg" width={20} height={20} />
                            <h3>{content.experience}</h3>
                            {/* <p> {content.descriptionPArc} </p> */}
                        </div>
                        <div className="wrapper_indent">
                          
                            <TimeLine items={medecinInfos.diplomes.filter((dip) => dip.type === "experience")} />
                         
                        </div>  
                        <hr />


                        <div className="indent_title_in">
                            <FaUsers  color='#61788E' size={20} />
                            <h3>{content.award}</h3>
                            {/* <p> {content.descriptionPArc} </p> */}
                        </div>
                        <div className="wrapper_indent">
                     
                            <TimeLine items={medecinInfos.diplomes.filter((dip) => dip.type === "award")} />
                        </div>  
                        <hr />

                       
                    </div>



                    <div className="box_general" ref={essentialRef}>
                    <div className="indent_title_in2">
                    <img src="/image/map.svg" width={20} height={20} />
                    <h3>{"Adresse"}</h3>
                            {/* <p> {content.details} </p> */}
                        </div>
                    <div className="wrapper_indent">
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

                    <div className="indent_title_in">
                            <FaDollarSign  color='#61788E' size={20} />
                            <h3> {content.tarif} </h3>
                            {/* <p> {content.details} </p> */}
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

                        </div>

                 <div className="box_general"   ref={scheduleRef} >
                 <div className="indent_title_in">
                 <FaRegClock  color='#61788E' size={20} />
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

                <Col  xs="12" md="12" lg="12" xl="4" >
                <div className="bg-white">
                <h2 className='title-md-witb'>En résumé</h2>
                <hr />
                <Row>
                <div className="info-item-md">
                            <FaRegUser  User color='#61788E' size={17} />
                            <h4> {"Accepte les nouveaux patients sur Doctolive"} </h4>
                            {/* <p> {content.details} </p> */}
                        </div>

                <div className="info-item-md">
                            <BiMap  User color='#61788E' size={17} />
                            <h4> {"Accepte les nouveaux patients sur Doctolive"} </h4>
                            {/* <p> {content.details} </p> */}
                </div>
                <div className="info-item-md">
                {!medecinInfos.teleconsultationIsDisponible ? null : (
                <>
                    <MdVideocam color='#61788E' size={17}/>
                    <h4>{content.availableVideo}</h4>
                </>
                )}
                    
                </div>
                </Row>
                <Row className="justify-content-around m-0 ">
                        <Button className={"btn-see-rdv"} onClick={() => setShowDisponibilite(medecinInfos)} color="primary"><img src="/image/icon-user.svg" /> {' '+content.seeDispo2} </Button>
                        {/* <Button onClick={() => setShowMap(true)} color="primary"> {content.seeMap} </Button> */}
                </Row>
                </div>
                
                </Col>
            </Row>
         </Container>
         </Row>
         </div>
        )
    
}

export async function getServerSideProps(context) {
    try {
        const res = await fetch(`${Config.BACKEND_URL}/medecin/${context.params.id}`, {
            headers: {
                'Origin': Config.CURRENT_URL, // Use environment variable
            }
        });

        if (!res.ok) {
            console.error("Failed to fetch data:", res.statusText);
            return {
                notFound: true,
            };
        }

        const data = await res.json();

        console.log("Fetched data:", data);

        const medecinInfo = data?.medecin || { specialites: [], tarifs: [], diplomes: [], info: {}, horaires: [] };

        return {
            props: { medecinInfo },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            notFound: true,
        };
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