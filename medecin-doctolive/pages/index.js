import React, {useState, useEffect} from 'react'
import Head from 'next/head'


// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";


// import BannerHome from './../assets/img/medicaldiscussion.jpg'
// core components
import { BiCheck, BiSearch, BiCalendar} from 'react-icons/bi'


import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import {MdExpandMore, MdCheck} from 'react-icons/md'

import styles1 from "../assets/jss/MedecinHomeStyle.js";

import MedecinForm from './../components/MedecinForm'

const useStyles = makeStyles(styles1);

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(1);

  useEffect(() => {
    function updateSize() {
          setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => {
        window.removeEventListener('resize', updateSize)
    }
  }, [])

  return (
    <div >
      <Head>
        <title> Doctolive - Rendez-vous en ligne avec votre médecin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div >
          <Header screenWidth={screenWidth} />
        </div>
        <Avantages />
        <Steps />
        {/* <Keep /> */}
    </div>
  )
}


function Avantages(){
    const classes = useStyles();

  return(
    <div>
        <section className={classes.section + " repeat-icon-box"}>
            <Container >
                <Row>
                  <h3 className={classes.sectionTitlle} >Découvrez les avantages de Doctolive</h3>
                </Row>
                    
                <Row>
                  {
                    whyCards.map((whycard, index) => {

                      return(
                        <Col key={index} lg="4" md="6" xs="12">
                          <div class="wrapper-repeat d-flex h-100">
                              <div class="wrapper-ico">
                                  <span> <img src ={ `/image/${whycard.icon}`} alt="..." className="mb-3" /> </span>
                              </div>
                              <div class="wrapper-content">
                                <h4 class="title-t3">{whycard.title}</h4>
                                <p class="wrapper-desc">{whycard.description}</p>
                              </div>
                          </div>
                        </Col>
                      )
                    })
                  }
                </Row>            
            </Container>
            
        </section>
    </div>
  )
}


function Steps (){
  const classes = useStyles();

  return(
      <section className={classes.section + " section-home-how-works padding_top"}>
          <h3 className="heading text-center"> Démarrez en 3 étapes simples</h3>
          <div className="hw-area">
              <div className="container">
                  <div className="row">
                      <div className="columns col-sm-4">
                          <div className="hw-box hw-box--mt">
                              <div className="hw-box__icon"><span className="icon-search"> <BiSearch color='white' /> </span></div>
                              <h4 className="hw-box__title"> Rejoignez-nous </h4>
                              <p className="hw-box__text"> S'inscrire avec vos coordonnées sur la plateforme </p>
                          </div>
                      </div>
                      <div className="columns col-sm-4">
                          <div className="hw-box">
                              <div className="hw-box__icon"> <span className="icon-svg va-middle-inline"> <BiCalendar color='white' /> </span> </div>
                              <h4 className="hw-box__title"> Vérification d'identité </h4>
                              <p className="hw-box__text"> Completez le processus de vérification avec nos consultant </p>
                          </div>
                      </div>
                      <div className="columns col-sm-4">
                          <div className="hw-box">
                              <div className="hw-box__icon"><span className="icon-fat-check"><BiCheck color='white' /></span></div>
                              <h4 className="hw-box__title"> Consultez vos patient </h4>
                              <p className="hw-box__text">  Commencer à consulter en vidéo et gérez vos rendez-vous </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
function Keep() {
  const classes = useStyles();

  return(
    <section className={classes.section + " padding_top"}>
        <Container>
          <Row>
            <Col md="6" xs="12">
                <div>
                    <h3> Gardez les patients de votre clinique engagés </h3>
                    <h4> Impressionnez vos patients en leur permettant de suivre avec vous en ligne </h4>
                </div> 
                <div>
                  <h5> Augmenter la rétention des patients </h5>
                  <p> Interagissez avec les patients après leurs rendez-vous. </p>
                </div>
                <div>
                  <h5> Contrôlez efficacement les suivis </h5>
                  <p> Discutez avec les patients sans partager votre numéro personnel. Définissez votre durée de suivi gratuit et plus encore. </p>
                </div>
                <div>
                  <h5> Monétiser les suivis </h5>
                  <p>  Monétiser les interactions de suivi répétées en assurant le suivi des patients dans le confort de leur domicile. </p>
                </div>
            </Col>
            <Col md="6" xs="12">
                <img src="/image/keep.png" alt="Doctor taking care of family" />
            </Col>
          </Row>
        </Container>
    </section>
  )
}

const whyCards = [
  {
    icon: "clock.png",
    title: "Ne perdez plus de temps à gérer la prise de rendez-vous",
    description: "Un système de réservation médicale en ligne avec de nombreuses fonctionnalités. Gérez votre cabinet avec une vue claire des rendez-vous à venir. Personnalisez tous les paramètres dont vous avez besoin.",
  },
  {
    icon: "device.png",
    title: "Accédez à votre horaire médical où vous voulez, quand vous le souhaitez",
    description: "Notre logiciel de planification médicale est accessible depuis votre ordinateur, tablette ou smartphone. Vous pouvez vérifier les informations de votre pratique à tout moment, où que vous soyez.",
  },
  {
    icon: "offre.png",
    title: "Offrir la télémédecine et élargir l'accès aux services de santé pour les patients",
    description: "La consultation en ligne permet de maintenir la continuité des soins pour vos patients. Augmenter la distance sociale et délivrer des ordonnances aux patients à domicile.",
  },
  {
    icon: "device2.png",
    title: "Facilitez la prise de rendez-vous médicaux pour vos patients",
    description: "Vos patients peuvent prendre des rendez-vous 24h / 24 et 7j / 7, votre cabinet reçoit moins d'appels entrants et vous remplissez les créneaux disponibles même à la dernière minute.",
  },
  {
    icon: "device3.png",
    title: "Personnalisez votre horaire de pratique en fonction de vos besoins",
    description: "Définissez chaque paramètre pour que votre système de réservation en ligne réponde à toutes vos attentes. Ouvrez les plages horaires disponibles et sélectionnez les raisons de la visite en fonction de votre spécialité.",
  },
  {
    icon: "device4.png",
    title: "Installez et maîtrisez votre horaire médical en ligne en un rien de temps",
    description: "Notre équipe dédiée vous aide à mettre en place votre système de réservation médicale. Devenez un expert instantanément grâce à notre documentation complète.",
  },
  {
    icon: "device5.png",
    title: "Communiquez en temps réel avec vos patients et réduisez les rendez-vous manqués",
    description: "Laissez les patients réserver, annuler ou reporter leurs rendez-vous en ligne 24h / 24 et 7j / 7. Réduisez les rendez-vous manqués grâce aux rappels automatiques par e-mail.",
  },
  {
    icon: "device6.png",
    title: "Améliorez votre visibilité en ligne et trouvez de nouveaux patients",
    description: "Votre liste Doctolive permet aux patients de trouver facilement votre cabinet. Laissez les patients réserver leurs rendez-vous en ligne sur notre plateforme.",
  },
  {
    icon: "device7.png",
    title: "Synchronisez notre logiciel de planification des patients avec votre infrastructure",
    description: "Doctolive s'intègre immédiatement dans votre infrastructure existante. S'interface de manière transparente avec les applications de gestion de cabinet les plus courantes.",
  },
]

function Header (){
    const classes = useStyles();

    return (
        <header className= {classes.header} style={{background: `rgba(182, 219, 215, 0.21)`}}>
            
            <Container > 
                <Row>
                    <Col md="7" className="d-flex flex-column justify-content-center left-content">
                        <div >
                            <h1 className="h1">Consultez en ligne et développez votre pratique</h1>
                            <h2 className="h3 presentation">Optimisez la gestion de votre cabinet médical avec un système de réservation en ligne facile à utiliser</h2>
                        </div>
                        <div>
                            <ul className="header-list">
                                <li> <span> <MdCheck color='#F27B68'  /> </span> Améliorez votre référencement en ligne.</li>
                                <li> <span> <MdCheck color='#F27B68' /> </span> Facilitez l'organisation de votre activité.</li>
                                <li> <span> <MdCheck color='#F27B68' /> </span>Consolidez la relation de confiance avec vos patients.</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="5" className="right-content" id="inscription">
                        <h3> Vous êtes praticien ?  Un de nos experts vous recontacte </h3>
                        <MedecinForm />
                    </Col>
                    <img src="/image/group-medecin.png"  className='image-header' alt="Doctor taking care of family" />

                </Row>

         
            </Container>
        </header>
    )
}


  
function MoreInfos() {

  return (
    <div >
      <div >
       
      </div>
      
    </div>
  );
}
  
function Avantage() {


  return (
    <div >
      <div >
        
      </div>
      
    </div>
  );
}




const faqs = [
  {
    title: "Pourquoi le logiciel doctolive Pro est-il adapté à mon organisation ?",
    description: <p>Nos 140 000 professionnels de santé partenaires sont issus de<strong> 88 spécialités différentes</strong> et de <strong>tous types d’organisations</strong> : ils travaillent en cabinet seul ou en groupe, dans des établissements de santé, avec un progiciel ou non etc.</p>
  }
]
function FAQ() {
  return (
    <div>
      {
        faqs.map((faq, index)=> {
          return(
            <AccordionType key={index} faq={faq} />
          )
        })
        
      }
      
    </div>
  )
}

function AccordionType(props) {
  return(
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography >{props.faq.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <Typography> */}
              {props.faq.description}
            {/* </Typography> */}
          </AccordionDetails>
        </Accordion>
  )
}