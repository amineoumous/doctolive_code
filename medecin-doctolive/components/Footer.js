import React from "react";

import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
// import {Link } from "react-router-dom";
import Link from 'next/link'

import {FaTwitter, FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import { IoLocationOutline} from 'react-icons/io5'
import {IoIosPhonePortrait} from 'react-icons/io'
import {AiOutlineInstagram} from 'react-icons/ai'
export default function DivFooter(){
    const [screenWidth, setScreenWidth] = React.useState(1);
    const content={footer:{
        partner: "Devenir Médecin partenaire",
        signin: "S'inscrire en tant que patient",
        faq: "Des questions ?",
        contact: "Nous Contacter ",
        adress: "Maroc - Casablanca",
        politique: "Politique de confidentialité",
        condition: "Conditions d'utilisation",
        condition2: "Conditions d'utilisation du site Doctolive",
        regle_de_r:"Règles de référencement",
        mentions_leg:"Mentions légales",
        mentions_leg:"Mentions légales",
        Cookies:"Cookies",
        protect_donnes_perso:"protection des données personnelles",
        gestion_de_cookies:"Gestion de cookies et consentement",

    }};
    React.useEffect(() => {
        function updateSize() {
              setScreenWidth(window.innerWidth)
          }
    
          window.addEventListener('resize', updateSize);
          updateSize();
    
          return () => {
              window.removeEventListener('resize', updateSize)
          }
      }, [])
    return(
        <div className="div-footer">
            <div className=" pt-5 pb-1">
                <div className="container">
                <Row className="justify-content-around footer-element copyright-parent">
                        <Col xs="12" md="12" lg="12" className="copyright text-left">
                           <img className="img-fluid logo" src={"/image/Doctolive.svg"} />
                            <p>© 2021 Doctolive tous droits réservés.  </p>
                        </Col>
                </Row>

                    <Row className="justify-content-around footer-element">
                        <Col xs="12" md="4" lg="4" className="first-column text-left">
                            <Nav as="ul" className="d-flex flex-column" >
                               
                                <Nav.Item as="li">
                              
                                    <Link href="https://doctor.doctolive.ma/" passHref>
                                        <Nav.Link className="yb-link" >{content.footer.partner} </Nav.Link>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link href="/account/new" passHref>
                                        <Nav.Link className="yb-link" >{content.footer.signin} </Nav.Link>
                                    </Link>
                                </Nav.Item>


                                <Nav.Item as="li">
                                   <Link href="/privacy-policy" passHref>
                            <Nav.Link className="yb-link" > {content.footer.politique} </Nav.Link>
                                </Link>   
                                </Nav.Item>



                         <Nav.Item as="li">
                        <Link href="/terms-of-use" passHref>
                            <Nav.Link className="yb-link" > {content.footer.condition} </Nav.Link>
                        </Link>
                            </Nav.Item>

                            <Nav.Item as="li">
                        <Link href="/terms-of-use" passHref>
                            <Nav.Link className="yb-link" > {content.footer.condition2} </Nav.Link>
                        </Link>
                            </Nav.Item>
                                
                            
                            </Nav>
                        </Col>
                        <Col xs="12" md="4" lg="4" className="first-column text-left">
                            <Nav as="ul" className="d-flex flex-column" >
                               
                                <Nav.Item as="li">
                              
                                    <Link href="https://doctor.doctolive.ma/" passHref>
                                        <Nav.Link className="yb-link" >{content.footer.regle_de_r} </Nav.Link>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link href="/account/new" passHref>
                                        <Nav.Link className="yb-link" >{content.footer.mentions_leg} </Nav.Link>
                                    </Link>
                                </Nav.Item>


                                <Nav.Item as="li">
                                   <Link href="/privacy-policy" passHref>
                            <Nav.Link className="yb-link" > {content.footer.Cookies} </Nav.Link>
                                </Link>   
                                </Nav.Item>



                         <Nav.Item as="li">
                        <Link href="/terms-of-use" passHref>
                            <Nav.Link className="yb-link" > {content.footer.protect_donnes_perso} </Nav.Link>
                        </Link>
                            </Nav.Item>

                            <Nav.Item as="li">
                        <Link href="/terms-of-use" passHref>
                            <Nav.Link className="yb-link" > {content.footer.gestion_de_cookies} </Nav.Link>
                        </Link>
                            </Nav.Item>
                                
                            
                            </Nav>
                        </Col>
                
                       
                        <Col xs="12" md="4" lg="4" className="contact">
                            <p><IoLocationOutline size="24" color="#61788E"  /> {content.footer.adress} </p>
                            <p><IoIosPhonePortrait size="24" color="#61788E" /> +212 688739472 </p>
                           
                        </Col>
                    </Row>
                 
                    <Row className="justify-content-center text-center mt-5 mb-5 reseau-sciaux">
                    
                    <a target="_blank" href="https://facebook.com/DoctoliveApp"> 
                    <img className="img-fluid icon-logo" src={"/image/facebook-logo.svg"} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/doctolive_officiel/?hl=fr">
                
                <img className="img-fluid icon-logo" src={"/image/instagram-icon.svg"} />
                </a>

                <a target="_blank" href="https://www.instagram.com/doctolive_officiel/?hl=fr">
                
                <img className="img-fluid icon-logo" src={"/image/linkedin-logo.svg"} />
                </a>

                <a target="_blank" href="https://www.instagram.com/doctolive_officiel/?hl=fr">
                
                <img className="img-fluid icon-logo" src={"/image/email-logo.svg"} />
                </a>

                <a target="_blank" href="https://www.instagram.com/doctolive_officiel/?hl=fr">
                
                <img className="img-fluid icon-logo" src={"/image/tiktok-logo.svg"} />
                </a>
                          
                    </Row>
                </div>
            </div>
        </div>
    );
}