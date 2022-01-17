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
                    <Row className="justify-content-around footer-element">
                        <Col xs="12" md="6" lg="4">
                            
                            <Nav as="ul" className="d-flex flex-column" >
                                <Nav.Item as="li" className="doctolive">
                                    <Link href="/" passHref>
                                        <Nav.Link  > <img src={"/image/doctoLogo-white.png"} className="img-fluid logo" /> </Nav.Link>
                                    </Link>
                                </Nav.Item>
                                {/* <Nav.Item as="li">
                                    <Link href="/qui-sommes-nous" passHref>
                                        <Nav.Link className="" >À propos de nous</Nav.Link>
                                    </Link>
                                </Nav.Item> */}
                                     <Nav.Item as="li">
                                    <Link href="/#inscription" passHref>
                                        <Nav.Link  > Devenir Médecin partenaire </Nav.Link>
                                    </Link>
                                </Nav.Item>
                                  
                                <li className="nav-item"> <a href="https://doctolive.ma/account/new" className="nav-link"> Je suis un patient </a> </li>

                            </Nav>
                        </Col>
                        {
                            screenWidth > 991 ?
                            <Col xs="12" md="12" lg="4">
                            {/* <h4 style={{color:"#fff"}}> {content.footer.faq} </h4>
                            <Nav as="ul" className="d-flex flex-column" >
                                    <Nav.Item as="li">
                                        <Link href="/contact" passHref>
                                            <Nav.Link className="yb-link"> {content.footer.contact} </Nav.Link>
                                        </Link>
                                    </Nav.Item>
                                </Nav> */}
                            </Col>
                            : null
                        }
                       
                        <Col xs="12" md="6" lg="4" className="contact">
                            <p><IoLocationOutline size="24" /> Casablanca - Maroc </p>
                            <p><IoIosPhonePortrait size="24" /> +212 688739472 </p>
                            <div className="footer-social" style={{listStyle: "none", width: "100%", display: "flex", flexDirection: "row"}}>
                                <div className="mr-5">
                                    <a target="_blank" href="https://facebook.com/DoctoliveApp"> <FaFacebookF size="24" /> </a>
                                </div>
                                {/* <div className="mr-5">
                                    <a href="#"><FaLinkedinIn size="24" /></a>
                                </div> */}
                                <div className="">
                                    <a target="_blank" href="https://www.instagram.com/doctolive_officiel/?hl=fr"><AiOutlineInstagram size="24" /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="row mt-3 ms-5 flex-wrap">
                       
                        <Col md="4">
                        <Link href="/privacy-policy" passHref>
                            <Nav.Link className="" > Politique de confidentialité </Nav.Link>
                        </Link>
                            <p className=""></p>
                        </Col>
                        <Col md="4">
                        <Link href="/terms-of-use" passHref>
                            <Nav.Link className="" > Conditions d'utilisation </Nav.Link>
                        </Link>
                        </Col>
                        <Col md="4">
                        <Link href="/" passHref>
                            <Nav.Link className="" > © 2021 Doctolive </Nav.Link>
                        </Link>
                        </Col>
                    </Row>
                    <Row className="justify-content-center text-center mt-1">
                            <p className="pelux"> POWRED BY <a href="https://pelux.ma/"> pelux.ma </a> </p>
                    </Row>
                </div>
            </div>
        </div>
    );
}