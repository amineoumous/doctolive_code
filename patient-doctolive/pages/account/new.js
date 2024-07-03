
import {useState, useEffect} from 'react'
import Button from "../../components/CustomButtons/Button";
import Card from "../../components/Card/Card.js";

import CardBody from "../../components/Card/CardBody.js";
import {Row, Col, Container, Collapse} from 'react-bootstrap'
import AuthForm from './../../components/Login'
import InscriptionForm from './../../components/InscriptionForm'

import {useAuth} from './../../context/AuthContext'
import { useRouter } from 'next/router'


import contentFR from './../../contentFR'
import contentEN from './../../contentEN'
import contentAR from './../../contentAR'


export default function Auth() {
    const [signinWay, setSigninWay]  = useState("auth"); 
    const { userData, setUser } = useAuth();
    const router = useRouter()


    const {locale} = router;
    const content = locale === "ar" ? contentAR : locale === "en" ? contentEN : contentFR;

    const postLogin = ( data) => {
        setUser({isAuth: true, user: data.user, token: data.token});

        return router.push({
            pathname: `/`,
        })
    }

    const setUserData = (data) => {
        setUser({isAuth: true, user: data.addedUser, token: data.token})
    }

    useEffect(() => {
        if(userData.isAuth){
            return router.push({
                pathname: `/`,
            })
        }
       
        return () => {

        }
    }, [userData])

    return (
        <div className=" page-connexion">

            <Container>

                <Row className="justify-content-center">
            
                    <Col md="6">
                    <Card>
                            <CardBody className="justify-content-center card-connexion d-flex flex-column aligh-items-center">
                            <h4 className="text-center">{content.new.alreadyHave} </h4>
                                <Row className="justify-content-center">
                                    <Collapse in={signinWay === "auth"}>
                                        <div>
                                            <AuthForm submiting={postLogin} />
                                        </div>
                                    </Collapse>
                                </Row>
                                
                                {signinWay === "auth" ? null : <Button onClick= {() => {setSigninWay("auth")}} color="transparent"> {content.new.signin}  </Button>}
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody className="justify-content-center card-register d-flex flex-column aligh-items-center">
                            <h4 className="text-center">{content.new.newIn} </h4>
                                <Row className="justify-content-center">
                                    <Collapse in={signinWay === "inscription"}>
                                        <div className="">
                                            <InscriptionForm setUserData={setUserData} />
                                        </div>
                                        
                                    </Collapse>
                                </Row>

                                {signinWay === "inscription" ? null : <Button onClick= {() => {setSigninWay("inscription")}} color="transparent">{content.new.signup} </Button>}
                            </CardBody>
                        </Card>
                    </Col>

                  <Row className="img-login-cnx">
                                <img src='/image/image-cnx-principal.png' />
                            </Row>
                  </Row>
           
                            
                  

                
            </Container>
        </div>
    )
}
