import React, { useEffect, useState, useRef } from 'react'

import { withRouter } from 'next/router'

import Link from 'next/link'


import { Navbar, Nav, Container, Row , Col} from 'react-bootstrap';

import { makeStyles } from "@material-ui/core/styles";

import styles from "../assets/jss/MedecinPublicNavbarStyle.js";

// import { BsQuestionCircle } from 'react-icons/bs'
// import {  FaAngleRight } from 'react-icons/fa'
const useStyles = makeStyles(styles);

 function Header(props) {

    const [colapsed, setColapsed] = useState(false)
    const [navFix, setIsNavFix] = useState(false)
    const classes = useStyles();


    const isToggled = (etat) => {
        setColapsed(etat)
      }

      const navbarFixing = () => {
        if((window.pageYOffset > 200 ) ){
          setIsNavFix(true) 
        }
      else if(window.pageYOffset < 200 ){
        if(window.innerWidth > 991){
          setIsNavFix(false)
        }
      }
      }

      useEffect(() => {
        window.addEventListener("scroll", navbarFixing )
        setIsNavFix(window.innerWidth < 991  ? true : false)
          return () => {
              
          }
          
      }, [])
 
    return (
      <div >
      <Navbar fixed="top" className={classes.navWrap} collapseOnSelect={true}  expand="lg" as="nav" onToggle={isToggled}>
          <Container className={classes.navContent} > 

              <div className= "d-flex header-100-md">
              <Link href={`/`}>
                    <a  href="/" to="/" className="navbar-brand" > 
                      <img className="img-fluid logo doctolive" src ="/image/Doctolive.svg" />


                  </a>
                </Link>
                
                  <Navbar.Toggle aria-expanded={colapsed} aria-controls="basic-navbar-nav" className="" >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </Navbar.Toggle>
              </div>
              <Row className="w-100 px-5">
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav as="ul" className={classes.navbarNav} >
                        {/* <Nav.Item className={classes.dropDown} as="li" >
                          <Nav.Link className="" > 
                                <span >  Votre spécialité </span>
                                <FaAngleRight className="arrow"/>
                            </Nav.Link> 
                            <div className="dropdown"> 
                                <Container>
                                  <Row className="cat-wrapper">
                                      <Col md="8" >
                                        <div className="cat-title">Pour les praticiens en cabinet médical</div>
                                        <ul className="cols-3">
                                          <Nav.Item as="li"><Nav.Link href='/medecin/medecin-generaliste' to="/medecin/medecin-generaliste"> <BsQuestionCircle /> <label> Médecin généraliste </label>  </Nav.Link></Nav.Item>
                                          <Nav.Item as="li"><Nav.Link href='/medecin/chirugien-dentiste' to="/medecin/chirugien-dentiste"> <BsQuestionCircle /> <label> Chirurgien-dentiste </label>  </Nav.Link></Nav.Item>
                                          <Nav.Item as="li"><Nav.Link href='/medecin/masseur-kinesitherapie' to="/medecin/masseur-kinesitherapie"> <BsQuestionCircle /> <label> Masseur-kinésithérapeute </label> </Nav.Link></Nav.Item>
                                          <Nav.Item as="li"><Nav.Link href='/medecin/ostheopathe' to="/medecin/ostheopathe"> <BsQuestionCircle /> <label> Ostéopathe </label></Nav.Link></Nav.Item>
                                          <Nav.Item as="li"><Nav.Link href='/medecin/psychologue' to="/medecin/psychologue"> <BsQuestionCircle /> <label> Psychologue </label></Nav.Link></Nav.Item>
                                          <Nav.Item as="li"><Nav.Link href='/medecin/pediatre-podologue' to="/medecin/pediatre-podologue"> <BsQuestionCircle /> <label> Pédicure-Podologue </label> </Nav.Link></Nav.Item>
                                          <Nav.Item as="li"><Nav.Link href='/medecin/sage-femme' to="/medecin/sage-femme"> <BsQuestionCircle /> <label> Sage-femme </label> </Nav.Link></Nav.Item>
                                          <Nav.Item as="li"><Nav.Link href='/medecin/autre-specialite' to="/medecin/autre-specialite"> <BsQuestionCircle /> <label> Autre spécialité </label> </Nav.Link></Nav.Item>
                                        </ul>
                                      </Col>
                                      <Col md="4" >
                                        <div className="cat-title">Pour les établissements de santé</div>
                                        <ul className="cols-2">
                                          <Nav.Item as="li"> <Nav.Link href='/' to="/"> <BsQuestionCircle /> <label> Hôpital </label>  </Nav.Link> </Nav.Item>
                                          <Nav.Item as="li"><Nav.Link href='/' to="/"> <BsQuestionCircle /> <label> Centre de santé </label> </Nav.Link></Nav.Item>
                                          <Nav.Item as="li"><Nav.Link href='/' to="/"> <BsQuestionCircle /> <label> Centre d’imagerie </label> </Nav.Link></Nav.Item>
                                          <Nav.Item as="li"><Nav.Link href='/' to="/"> <BsQuestionCircle /> <label> Centre de vaccination </label> </Nav.Link></Nav.Item>
                                        </ul>
                                      </Col>
                                  </Row>
                                  
                                  
                                </Container>
                            </div>
                          </Nav.Item>   */}
                          {/* <Nav.Item className={classes.dropDown2} as="li">
                          <Nav.Link className="" > 
                                <span >  Solutions </span>
                                <FaAngleRight />
                            </Nav.Link> 
                            <div className="dropdown-2"> 
                                <Container>
                                  <Row className="cat-wrapper">
                                      <Col md="4" >
                                      <Nav.Link href='/medecin/agenda-en-ligne' to="/medecin/agenda-en-ligne">
                                        <div className=" cat-container">
                                            <img src="https://info.doctolib.fr/wp-content/uploads/2020/07/calendar-star.svg?1611339911" />
                                              <div className="cat-title">Agenda en ligne</div>
                                              <div className="cat-desc"> Profitez du logiciel de gestion des consultations le plus intelligent et complet </div>
                                          </div>
                                      </Nav.Link>
                                      </Col>
                                  </Row>
                                </Container>
                            </div>
                          </Nav.Item>  */}
                          {/* <Nav.Item as="li"><Nav.Link href='/tarifs' to="/tarifs"> Tarifs   </Nav.Link></Nav.Item> */}
                          {/* <Nav.Item as="li"><Nav.Link href='/about' to="/about">  Qui somme nous   </Nav.Link></Nav.Item> */}
                      </Nav>
                      <Nav as="ul" style={{marginLeft: "auto"}} className={classes.navbarNav}>
                        {/* <Nav.Item as="li"><Nav.Link href='/' to="/"> Je suis un patient   </Nav.Link></Nav.Item> */}
                        {/* <Nav.Item className="login" as="li"><Nav.Link href='/signin' to="/signin"> login   </Nav.Link></Nav.Item> */}
                        {/* <li className="nav-item"> <a href="https://doctolive.ma/" className="nav-link"> Je suis un patient </a> </li> */}
                        <li className="nav-item"> <a href="https://doctolive.thesporteasy.com/" className="nav-link"> Je suis un patient </a> </li>
                        {/* <li className="nav-item login"> <a href="https://pro.doctolive.ma/" className="nav-link"> login </a> </li> */}
                        <li className="nav-item login"> <a href="https://doctolivepro.thesporteasy.com/signin" className="nav-link"> login </a> </li>
                      </Nav>
                  </Navbar.Collapse>
              </Row>
          </Container>
      </Navbar>
  </div>
)
}

export default withRouter(Header)

