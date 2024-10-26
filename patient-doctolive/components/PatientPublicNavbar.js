import React, { useState } from 'react'
import { Navbar, Nav, Row } from 'react-bootstrap';
// import {Link } from "react-router-dom";
import Link from 'next/link'
import { withRouter } from 'next/router'

import { makeStyles } from "@material-ui/core/styles";


import styles from "../assets/jss/PatientPublicNavbarStyle.js";

import {  BsPerson } from 'react-icons/bs'
import { useRouter } from 'next/router';

import contentFR from './../contentFR'
import contentEN from './../contentEN'
import contentAR from './../contentAR'

import LangSwitch from './LangSwitcher'

const useStyles = makeStyles(styles);

function PatientPublicNavbar(props) {
    const classes = useStyles();
    const router = useRouter();

    const {locale} = router;
    const content = locale === "ar" ? contentAR : locale === "en" ? contentEN : contentFR;

    const [colapsed, setColapsed] = useState(false)

    const isToggled = (etat) => {
        setColapsed(etat)
    }
     

 
    return (
                <div >
                    <Navbar className={classes.navWrap} collapseOnSelect={true} expand="lg" as="nav" onToggle={isToggled}>
                        <div className={classes.navContent} > 
                            <div className= "d-flex header-100-md">
                              <Link href={"/"}>
                                <a className="view-pro-btn">

                                  <div style={{display: "inline-block",
                                        marginTop:"21px",
                                      
                                       }}>  
                                       
                                       <img src='/image/Doctolive.svg' />
                                  </div> 
                                </a>
                            </Link>
                                
                                <Navbar.Toggle aria-expanded={colapsed} aria-controls="basic-navbar-nav" className="" >
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </Navbar.Toggle>
                            </div>
                     
                            <Row>
                                <Navbar.Collapse id="basic-navbar-nav">

                           
                          
                                   
                                    
                          
                                    <Nav as="ul" activeKey={props.router? props.router.pathname: null} className={classes.navbarNav} >

                                    <Nav.Item className="professionel" as="li">
                                        {/* <Link href='https://info.doctolive.ma' passHref> */}
                                          <Nav.Link href="https://doctorlive.thesporteasy.com/" className="" > 
                                              <span >  {content.navbar.medecin} </span>
                                          </Nav.Link> 

                                        
                                        
                                      </Nav.Item> 
                                     
{/*                                      
                                        <Nav.Item as="li"> 
                                          <Link href='/contact' passHref>
                                          <Nav.Link > 
                                              <span >   {content.navbar.contact} </span>
                                          </Nav.Link> 
                                        </Link>
                                        </Nav.Item> */}
                                     
                                      
                                      <Nav.Item as="li">
                                        <Link href="/account/new" passHref>
                                            <Nav.Link > 
                                              <BsPerson /> 
                                              <div>
                                                  <div> {content.navbar.conect} </div>
                                                  <div style={{opacity: 0.7, fontSize: 12}}> {content.navbar.rdv} </div>
                                              </div>
                                            </Nav.Link>
                                        </Link> 
                                       </Nav.Item>
                                      
                                     
                                    </Nav>
                                    <LangSwitch />
                                </Navbar.Collapse>
                            </Row>
                                
                        </div>
                        
                    </Navbar>
                </div>
)
}

export default withRouter(PatientPublicNavbar)