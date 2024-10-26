import React, {useState, useEffect} from 'react'

import Card from "../../../../components/Card/Card.js";

import CardBody from "../../../../components/Card/CardBody.js";

import {Row, Col, Collapse, Alert} from 'react-bootstrap'

import Button from './../../../../components/CustomButtons/Button'
import moment from 'moment'
import {useAppContext} from './../../../../context/AppointementContext'
import {useAuth} from './../../../../context/AuthContext'

import StepperManaging from './../../../../components/Stepper/Stepper';

import  StyledCheckbox  from './../../../../components/Checkbox/Checkbox';
import { Divider, Select, FormControl, InputLabel, MenuItem, TextField } from '@material-ui/core';

import Config from './../../../../EndPoint';

import CalendarAvailability from './../../../../components/MedecinWidget/CalendarAvailability'

import AuthForm from './../../../../components/Login'
import InscriptionForm from './../../../../components/InscriptionForm'
import Link from 'next/link'

import { useRouter } from 'next/router';

import contentFR from './../../../../contentFR'
import contentEN from './../../../../contentEN'
import contentAR from './../../../../contentAR'





export default function Appointement({medecinInfo}) {
    const router = useRouter();
    const {locale} = router;
  
    const content = locale === "ar" ? contentAR.appointment : locale === "en" ? contentEN.appointment : contentFR.appointment;
  
    const [activeStep, setActiveStep] = useState(0);
    const [isStepOneValide, setIsStepOneValide] = useState(false);
    const [appointementInfo, setAppointementInfo] = useState({medecin: medecinInfo, typeConsultation : medecinInfo.teleconsultationIsDisponible ? "" :  "consultation_cabinet"});
    const [addedConsultation, setAddedConsultation]  = useState({});

    const { temporary_appointment, setUserTemporary } = useAppContext();
    const { userData, setUser } = useAuth();

    useEffect(() => {
        let changedApp = JSON.stringify(temporary_appointment) !== JSON.stringify(appointementInfo); 
        if(changedApp) {
            setAppointementInfo( oldapp => {return {...oldapp, ...temporary_appointment, typeConsultation : medecinInfo.teleconsultationIsDisponible ? temporary_appointment.typeConsultation :  "consultation_cabinet" }} );
            if(temporary_appointment.isStepOneValide){
                handleSubmitStepOne()
            }
        }

        return () => {
            
        }
    }, [temporary_appointment])


    useEffect(() => {
        let isValideDate = appointementInfo.date ? moment(appointementInfo.date).isValid() : false;

        let isValideType = appointementInfo.typeConsultation === "teleconsultation" || appointementInfo.typeConsultation === "consultation_cabinet" ;
        let isValideMotif = appointementInfo.motif !== null && appointementInfo.motif !== undefined ;

        setIsStepOneValide(isValideDate && isValideType && isValideMotif)

        return () => {
            
        }
    }, [appointementInfo])


    const setApponitementInfo = (data) => {

        setAppointementInfo(data)
        setUserTemporary(data)
    }

    const StepTwoValid = () => {
        setActiveStep(2)
    }
    const stepTreeValide = () => {
        setActiveStep(3)
    }
    const stepFourValid = () => {
        setActiveStep(4)
    }

    const verification = () => {
        fetch(`${Config.BACKEND_URL}/patient/info`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${userData.token}`,
            }
        })
        .then(
            (r) => r.json()
            .then(res => {
                if(!res.error){
                    setUser({...userData, user: res.thisUser})
                }
                

            })
            ).catch(error =>{ 

            })
        
    }
    const getActiveStepContent = () => {

        switch (activeStep) {
            case 0:
                return (
                  <StepOne
                    apponitementInfo = {appointementInfo}
                    setApponitementInfo={setApponitementInfo}
                    medecinInfo= {medecinInfo}
                    content={content.step1}
                    locale={locale}
                    
                  />
                 
                );
            case 1:
              return (
                <StepTwo
                apponitementInfo ={appointementInfo}
                StepTwoValid={StepTwoValid}
                activeStep={activeStep}
                content={content.step2}
                />
              )
            case 2:
              return (
                <StepTree
                apponitementInfo ={appointementInfo}
                verification={verification}
                stepTreeValide={stepTreeValide}
                content={content.step3}
                />
              )
          
            case 3:
              return (
                <StepFour
                apponitementInfo ={appointementInfo}
                stepFourValid={stepFourValid}
                setAddedConsultation={setAddedConsultation}
                content={content.step4}

                />
              )
            case 4:
              return (
                <StepFive
                    apponitementInfo ={addedConsultation}
                    setAddedConsultation={setAddedConsultation}
                    content={content.step5}
                />
              )
          
            default:
              return 'Unknown step';
          }

    }

    const handleSubmitStepOne= () => {
        // setFormData({medecin: appointementInfo.medecin.id, typeConsultation: appointementInfo.typeConsultation, motif: appointementInfo.motif, date: appointementInfo.selectedDate});
        setUserTemporary({...temporary_appointment, isStepOneValide: true})
        setActiveStep(1);

    }

    return (
        <div>
            <div className="bg-white p-3">
                <h3 className="text-center"> {content.takeApp} </h3>
            </div>  
            <div className="scrollable-div">
                <StepperManaging activeStep={activeStep} steps={content.steps} />
            </div>
            <div className="container">
                {appointementInfo.medecin? getActiveStepContent(): null}
            </div>
            <div>
             {
             (isStepOneValide && activeStep === 0) ? <div className="row justify-content-center"> 
                <Button onClick={handleSubmitStepOne} color="success"> {content.takeApp} </Button>  
                </div> 
            : null }   
            </div>
        </div>
    )
}

// export async function getServerSideProps(context) {
//     const res = await fetch(`${Config.BACKEND_URL}/medecin/${context.params.id}`);

//     if(!res) {
//         return {
//             props: {medecinInfo: {}, error: true, message: "request failed"},
//           }
//     }
//     const data = await res.json();

//     if(!data || data.error) {
//         return {
//             props: {medecinInfo: {}, error: true, message: data.message},
//           }
//     }

//     return {
//       props: {medecinInfo: data.medecin},
//     }
// }
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

function StepOne (props) {
    const {content} = props;

    const handleTile = (e) => {
        let target = e.target;
        props.setApponitementInfo({ ...props.apponitementInfo, title: target.value})
    }
    const handleDescription = (e) => {
        let target = e.target;
        props.setApponitementInfo({ ...props.apponitementInfo, description: target.value})
    }
    const handleChange = (e) => {
        let target = e.target;
        props.setApponitementInfo({ ...props.apponitementInfo, typeConsultation: target.name})
    }
    const handleChangeMotif = (e) => {
        let target = e.target;
        props.setApponitementInfo({ ...props.apponitementInfo, motif: target.value})
    }
    const handleSelectHour = (day, hour) => {

        props.setApponitementInfo({ ...props.apponitementInfo, date: day, time: hour})
    }
 
    console.log(props.apponitementInfo.typeConsultation)
    return(
        <Card >
        <CardBody>
            <Col dir={ props.locale === "ar" ? "rtl" : "ltr"}>
                <Row>
                    <div className="pe-layout">
                        <label className="renez-vous-label">  {content.label1} </label>
                    </div>
                    
                    <div className="pe-layout"> 
                        <div className="titre-consultation">
                          <TextField
                            fullWidth
                            required
                            label= {content.label1}
                            variant="outlined"
                            value={props.apponitementInfo.title}
                            name="title"
                            onChange={handleTile}
                            placeholder= {content.placeholder1}
                          />
                        </div>
                        
                    </div>
                </Row>
                <Divider />
                <Row>
                    <div className="pe-layout">
                        <label className="renez-vous-label"> {content.label2} </label>
                    </div>
                    
                    <div className="pe-layout"> 
                        <div className="titre-consultation">
                          <TextField
                            fullWidth
                            required={false}
                            label={content.label2}
                            variant="outlined"
                            value={props.apponitementInfo.description}
                            name="description"
                            onChange={handleDescription}
                            placeholder={content.placeholder2}
                          />
                        </div>
                        
                    </div>
                </Row>
                <Divider />
                <Row>
                    <div className="pe-layout">
                        <label className="renez-vous-label"> {content.label3}  </label>
                    </div>
                    
                    <div className="pe-layout"> 
                        <div className={"type-consultation" +( ! props.apponitementInfo.medecin.teleconsultationIsDisponible ? " disabled" : "" )}>
                            <StyledCheckbox
                            checked={props.apponitementInfo.typeConsultation === "teleconsultation"}
                            name="teleconsultation"
                            label= {content.inp3}
                            disabled={! props.apponitementInfo.medecin.teleconsultationIsDisponible}
                            onChange={handleChange}
                            rtl={props.locale === "ar"?  true : false}
                        />
                        </div>
                        <div className={"type-consultation" +( ! props.apponitementInfo.medecin.teleconsultationIsDisponible ? " disabled" : "" )}>
                            <StyledCheckbox
                            checked={props.apponitementInfo.typeConsultation === "consultation_cabinet"}
                            name="consultation_cabinet"
                            label= {content.inp4}
                            disabled={ ! props.apponitementInfo.medecin.teleconsultationIsDisponible}

                            onChange={handleChange}
                            rtl={props.locale === "ar"?  true : false}
                        />
                        </div>
                    </div>
                </Row>
                <Divider />
                <Row>
                <div className="pe-layout">
                        <label className="renez-vous-label"> {content.label4} </label>
                    </div>
                    
                    <div className="pe-layout"> 
                        {!props.apponitementInfo.medecin ? null : <p className="renez-vous-paragraphe"> Dr. {props.apponitementInfo.medecin.nom + " " + props.apponitementInfo.medecin.prenom } </p>}
                    </div>
                </Row>
                <Divider />
                <Row>
                <div className="pe-layout">
                        <label className="renez-vous-label"> {content.label5} </label>
                    </div>
                    
                    <div className="pe-layout"> 
                        {props.apponitementInfo.typeConsultation === "teleconsultation" ? 
                            <p className="renez-vous-paragraphe"> {content.teleconsult} </p> 
                            : props.apponitementInfo.typeConsultation === "consultation_cabinet" ? 
                            <p className="renez-vous-paragraphe"> 
                            {
                                !props.apponitementInfo.medecin? null : !props.apponitementInfo.medecin.adress? null : 
                                (props.apponitementInfo.medecin.adress.streetName? props.apponitementInfo.medecin.adress.streetName : "") + " " + 
                                (props.apponitementInfo.medecin.adress.buildingName? props.apponitementInfo.medecin.adress.buildingName : "") + " " + 
                                (props.apponitementInfo.medecin.adress.floor? "étage " + props.apponitementInfo.medecin.adress.floor : "") + " " + 
                                (props.apponitementInfo.medecin.adress.sector? props.apponitementInfo.medecin.adress.sector : "") + ", " + 
                                (props.apponitementInfo.medecin.adress.codePostal? props.apponitementInfo.medecin.adress.codePostal : "") + " - " + 
                                (props.apponitementInfo.medecin.city ? props.apponitementInfo.medecin.city.name  : "")  
                            } 
                            </p>
                            : null
                        }
                    </div>
                </Row>
                <Row>
                <div className="pe-layout">
                        <label className="renez-vous-label"> {content.label6} </label>
                    </div>
                    
                    <div className="pe-layout"> 
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="demo-simple-select-label"> {content.motif}</InputLabel>
                        {
                            props.medecinInfo ?
                            props.medecinInfo.tarifs ?
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="motif"
                                label={content.motif}
                                value={props.apponitementInfo.motif? props.apponitementInfo.motif: ""}
                                onChange={handleChangeMotif}
                            >
                            {
                            props.medecinInfo.tarifs.length > 0?
                            props.medecinInfo.tarifs.map((tarif, index) => {
                                return( <MenuItem key={index} value={tarif.id}>{tarif.name}</MenuItem>)
                            })
                            :  <MenuItem value={null}> {content.noMotifs} </MenuItem>
                            
                            }
                            
                            </Select>
                            : null : null
                        }
                       
                    </FormControl>
                    </div>
                </Row>
                <Row>
                <div className="pe-layout">
                    <label className="renez-vous-label"> {content.label7} </label>
                </div>
                {props.apponitementInfo.date && props.apponitementInfo.time ? 
                    <div className="pe-layout"> 
                        <p className="renez-vous-paragraphe"> {moment(props.apponitementInfo.date+ props.apponitementInfo.time, 'YYYY/MM/DDHH:mm').calendar()} </p> 
                    </div>
                    : <div className="pe-calendar-layout"> < CalendarAvailability showDisponibilite={props.apponitementInfo.medecin} setSelectedHour={handleSelectHour} /> </div> 
                }
                </Row>
            </Col>
        </CardBody>
      </Card>
    )
}

function StepTwo (props) {
    const { userData, setUser } = useAuth();

    const {content} = props;

    const [signinWay, setSigninWay]  = useState("notSpecified"); 

    const postLogin = ( data) => {

        setUser({isAuth: true, user: data.user, token: data.token})
       
    }

    const setUserData = (data) => {
        setUser({isAuth: true, user: data.addedUser, token: data.token})
    }

    useEffect(() => {
        

        if(userData.isAuth && props.activeStep === 1){
            props.StepTwoValid()
        }
        return () => {
            
        }
    }, [userData, props])
    

    return(
        <div>
            <Row>
                <Col sm="8">
                    {
                        signinWay === "auth" ?
                            <>
                                <Card>
                                    <CardBody>
                                        <AuthForm submiting={postLogin} />
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody className="justify-content-center d-flex flex-column aligh-items-center">
                    <h4 className="text-center"> {content.new} </h4>
                                        <Button onClick= {() => {setSigninWay("inscription")}} color="transparent">  {content.signup}  </Button>
                                    </CardBody>
                                </Card>
                            </>
                        : signinWay === "inscription" ?
                            <>
                                <Card>
                                    <CardBody>
                                        <InscriptionForm setUserData={setUserData} />
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody className="justify-content-center d-flex flex-column aligh-items-center">
                                    <h4 className="text-center"> {content.old}   </h4>
                                        <Button onClick= {() => {setSigninWay("auth")}} color="transparent"> {content.signin}  </Button>
                                    </CardBody>
                                </Card>
                            </>
                        :
                        <Col>
                            <Row>
                                <Card>
                                    <CardBody className="justify-content-center d-flex flex-column aligh-items-center">
                                        <h4 className="text-center"> {content.new} </h4>
                                        <Button onClick= {() => {setSigninWay("inscription")}} color="primary">  {content.signup}  </Button>
                                    </CardBody>
                                </Card>
                            </Row>
                            <Row>
                                <Card>
                                    <CardBody className="justify-content-center d-flex flex-column aligh-items-center">
                                        <h4 className="text-center"> {content.old}  </h4>
                                        <Button onClick= {() => {setSigninWay("auth")}} color="info"> {content.signin} </Button>
                                    </CardBody>
                                </Card>
                            </Row>
                            
                        </Col>
                        
                    }
                    
                </Col>
                <Col sm="4">
                    <Card>
                        <CardBody>
                            <Col>
                                <Row>
                                    <p className="renez-vous-paragraphe"> {moment(props.apponitementInfo.date + props.apponitementInfo.time, 'YYYY/MM/DDHH:mm').calendar()} </p> 
                                </Row>
                                <Row>
                                <div className=""> 
                                        {props.apponitementInfo.typeConsultation === "teleconsultation" ? 
                                            <p className="renez-vous-paragraphe"> {content.teleconsult} </p> 
                                            : props.apponitementInfo.typeConsultation === "consultation_cabinet" ? 
                                            <p className="renez-vous-paragraphe"> 
                                            {
                                                !props.apponitementInfo.medecin? null : !props.apponitementInfo.medecin.adress? null : 
                                                (props.apponitementInfo.medecin.adress.streetName? props.apponitementInfo.medecin.adress.streetName : "") + " " + 
                                                (props.apponitementInfo.medecin.adress.buildingName? props.apponitementInfo.medecin.adress.buildingName : "") + " " + 
                                                (props.apponitementInfo.medecin.adress.floor? "étage " + props.apponitementInfo.medecin.adress.floor : "") + " " + 
                                                (props.apponitementInfo.medecin.adress.sector? props.apponitementInfo.medecin.adress.sector : "") + ", " + 
                                                (props.apponitementInfo.medecin.adress.codePostal? props.apponitementInfo.medecin.adress.codePostal : "") + " - " + 
                                                (props.apponitementInfo.medecin.city ? props.apponitementInfo.medecin.city.name  : "")  
                                            } 
                                            </p>
                                            : null
                                        }
                                    </div>
                                </Row>
                                <Divider />
                                <Row>
                                    <div className=""> 
                                        {!props.apponitementInfo.medecin ? null : <p className="renez-vous-paragraphe"> Dr. {props.apponitementInfo.medecin.nom + " " + props.apponitementInfo.medecin.prenom } </p>}
                                    </div>
                                </Row>                              
                            </Col>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

function StepTree(props) {
    const { userData } = useAuth();

    const {content} = props;
    useEffect(() => {
        if(userData.user){
            if(userData.user.active){
                props.stepTreeValide()
            }
        }
        return () => {
            
        }
    }, [userData])
    const GenererLink = () => {
        fetch(`${Config.BACKEND_URL}/patient/generer-link`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${userData.token}`,
            }
        })
        .then(
            (r) => r.json()
            .then(res => {

            })
            ).catch(error =>{ 
              
            })
    }
    return(
        <div>
            <h3> {content.title} </h3>
            {/* <p> Si vous n'avez pas reçu le mail où bien le lien est éxpirer vous pouvez générer un autre lien </p> */}
            <Button color="primary" onClick={GenererLink} > {content.generate} </Button>
            <Button color="primary" onClick={props.verification} >  {content.revirify} </Button>
        </div> 
    )
}

function StepFour(props) {
    const { userData } = useAuth();
    const {content} = props;
    const { temporary_appointment, setUserTemporary } = useAppContext();

    const [errorMessage, setErrorMessage] = useState("")
    const handleConfirm = () => {
        let data= {
            medecinId: temporary_appointment.medecin.id, 
            date: temporary_appointment.date,
            time: temporary_appointment.time, 
            type: temporary_appointment.typeConsultation, 
            tarifId: temporary_appointment.motif,
            title: temporary_appointment.title,
            description : temporary_appointment.description,
        }

        fetch(`${Config.BACKEND_URL}/patient/consultation`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${userData.token}`,
            },
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(
            (r) => r.json()
            .then(res => {
                if(!res.error){
                    setUserTemporary({})
                    props.setAddedConsultation(res.addedConsultation)
                    props.stepFourValid()
                }else {
                    if(res.validator){

                    }
                    else {
                        setErrorMessage(res.message)
                    }
                }
            }).catch((err)=> {
                if(err.response){
                    if(err.response.validator){
    
                    }
                    else {
                        setErrorMessage(err.response.message)
                    }
                }
            })
        ).catch(error =>{ 

            if(error.response){
                if(error.response.validator){

                }
                else {
                    setErrorMessage(error.response.message)
                }
            }
              
        })
    }
    return(
        <Card>
            <CardBody>
                <h3> {content.title} </h3>
                <Col>
                    <Row>
                        <p className="renez-vous-paragraphe"> {moment(temporary_appointment.date + temporary_appointment.time, 'YYYY/MM/DDHH:mm').calendar()} </p> 
                    </Row>
                    <Row>
                    <div className=""> 
                            {temporary_appointment.typeConsultation === "teleconsultation" ? 
                                <p className="renez-vous-paragraphe"> {content.teleconsult} </p> 
                                : temporary_appointment.typeConsultation === "consultation_cabinet" ? 
                                <p className="renez-vous-paragraphe"> 
                                {
                                    !temporary_appointment.medecin? null : !props.apponitementInfo.medecin.adress? null : 
                                    (temporary_appointment.medecin.adress.streetName? temporary_appointment.medecin.adress.streetName : "") + " " + 
                                    (temporary_appointment.medecin.adress.buildingName? temporary_appointment.medecin.adress.buildingName : "") + " " + 
                                    (temporary_appointment.medecin.adress.floor? "étage " + temporary_appointment.medecin.adress.floor : "") + " " + 
                                    (temporary_appointment.medecin.adress.sector? temporary_appointment.medecin.adress.sector : "") + ", " + 
                                    (temporary_appointment.medecin.adress.codePostal? temporary_appointment.medecin.adress.codePostal : "") + " - " + 
                                    (temporary_appointment.medecin.city ? temporary_appointment.medecin.city.name  : "")  
                                } 
                                </p>
                                : null
                            }
                        </div>
                    </Row>
                    <Divider />
                    <Row>
                        <div className=""> 
                            {!temporary_appointment.medecin ? null : <p className="renez-vous-paragraphe"> Dr. {temporary_appointment.medecin.nom + " " + temporary_appointment.medecin.prenom } </p>}
                        </div>
                    </Row> 
                    <Row className="justify-content-center">
                        <Collapse in={errorMessage !== ""}>
                            <div className="mt-5">
                                <Alert  variant="danger">
                                    {errorMessage}
                                </Alert>
                            </div>
                        </Collapse>
                    </Row>                             
                </Col>
                <Button color="primary" onClick={handleConfirm}> {content.confirm} </Button>
                <p> {content.rmind}  </p>
            </CardBody>
        </Card> 
    )
}

function StepFive (props) {
    return(
        <Card>
            <CardBody>
                <h3> {props.content.title} </h3>

                <Link href="/account/appointments">
                        <a className="link btn btn-primary"> {props.content.gerer} </a>
                    </Link>
            </CardBody>
        </Card>
    )
}