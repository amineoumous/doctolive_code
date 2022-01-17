import React from "react";

import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
// import {Link } from "react-router-dom";
import Link from 'next/link'

import {FaTwitter, FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import { IoLocationOutline} from 'react-icons/io5'
import {IoIosPhonePortrait} from 'react-icons/io'
import {AiOutlineInstagram} from 'react-icons/ai'


import contentFR from './../contentFR'
import contentEN from './../contentEN'
import contentAR from './../contentAR'

import { useRouter } from 'next/router';

export default function DivFooter(){

    const router = useRouter();
    const [screenWidth, setScreenWidth] = React.useState(1);

    const {locale} = router;
    const content = locale === "ar" ? contentAR : locale === "en" ? contentEN : contentFR;
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
                            <h4 style={{color:"#fff"}}> <img className="img-fluid logo" src={"/image/doctoLogo-white.png"} /> </h4>
                            <Nav as="ul" className="d-flex flex-column" >
                               
                                <Nav.Item as="li">
                                    <a className="yb-link nav-link" href="https://doctor.doctolive.ma/" > {content.footer.partner}  </a>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link href="/account/new" passHref>
                                        <Nav.Link className="yb-link" > {content.footer.signin} </Nav.Link>
                                    </Link>
                                </Nav.Item>
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
                            <p><IoLocationOutline size="24" /> {content.footer.adress} </p>
                            <p><IoIosPhonePortrait size="24" /> +212 688739472 </p>
                            <div style={{listStyle: "none", display: "flex", flexDirection: "row", justifyContent:screenWidth > 991 ? "start" :"center"}}>
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
                    <Row className="mt-3 ms-5">
                        <Col xs="4">
                            <p className="">© 2021 Doctolive</p>
                        </Col>
                        <Col xs="4">
                        <Link href="/privacy-policy" passHref>
                            <Nav.Link className="yb-link" > {content.footer.politique} </Nav.Link>
                        </Link>
                        </Col>
                        <Col xs="4">
                        <Link href="/terms-of-use" passHref>
                            <Nav.Link className="yb-link" > {content.footer.condition} </Nav.Link>
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