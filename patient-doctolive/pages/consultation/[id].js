import React, {useEffect, useState} from 'react'

// import Config from 'Config'
import Config from './../../EndPoint';

import Card from './../../components/Card/Card'
import CardBody from './../../components/Card/CardBody'

import { Col,Row, Alert, Collapse } from 'react-bootstrap';

import DocumentC from './../../components/Documents/DocumentsC'

import Messages from './../../components/Chat/messages';
import InfoBar from './../../components/Chat/infoBar';
import VideoCall from './../../components/Chat/videoChat'
import SendMessageForm from './../../components/Chat/sendingMessage';
import CountDown from './../../components/Chat/CountDown/CountDown'

import Button from './../../components/CustomButtons/Button'

import Checkbox from './../../components/Checkbox/Checkbox'
import TextField from '@material-ui/core/TextField';

import { useRouter } from 'next/router'
import {useAuth} from './../../context/AuthContext'


import contentFR from './../../contentFR'
import contentEN from './../../contentEN'
import contentAR from './../../contentAR'

// export async function getServerSideProps(context) {
//     const res = await fetch(`${Config.BACKEND_URL}/consultation/${context.params.id}`)
//     const data = await res.json();
//     console.log(data)
//     if(!data){
//         return {
//             props: {teleconsultation: {}},
//           }
//     }
//     return {
//       props: {teleconsultation: data.consultation},
//     }
// }

export async function getServerSideProps(context) {
    const { req } = context;
   
    const cookies = getAppCookies(req);

    if(!cookies.token){
        return {
            props: {
                isAuth: false
            },
          }
    }else {
        const res = await fetch(`${Config.BACKEND_URL}/consultation/${context.params.id}`, {
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization': `token ${cookies.token}`,
              },
        })
        const data = await res.json()

        return {
            props: {
              isAuth: true,
              teleconsultation: data.consultation
            },
        }
    }
   
    
}

function getAppCookies(req) {
    const parsedItems = {};
    if (req.headers.cookie) {
      const cookiesItems = req.headers.cookie.split('; ');
      cookiesItems.forEach(cookies => {
        const parsedItem = cookies.split('=');
        parsedItems[parsedItem[0]] = decodeURI(parsedItem[1]);
      });
    }
    return parsedItems;
  }
  
export default function ConsultationContainer({teleconsultation, socket}) {

    const [addRapport, setAddRapport] = useState(false)
    const [fieldValidationErrors, setFieldValidationErrors] = useState({})
    const [state, setState] = useState({isCompleted: false})
    const [response, setResponse] = useState({
        sending:false,
        success:false,   
        donneIncorecte: false                 
    })
    const router = useRouter();
    const {locale} = router;
    const content = locale === "ar" ? contentAR : locale === "en" ? contentEN : contentFR;
    const { userData } = useAuth();



    const handleSubmit = (e) => {
        e.preventDefault();
        setResponse(old =>  { return {...old, sending: true}});

        let data = state;

        fetch(`${Config.BACKEND_URL}/feedback`,{
            method:"post",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${userData.token}`,
            },
            body:JSON.stringify({...data, consultationId: teleconsultation.id })
        })
        .then(
            (r) => r.json()
            .then(res => {

                if(!res.error){
                    // props.setUserData(res);
                    setResponse({sending: false, success:true, donneIncorecte: false});
                    
                    
                }else {
                    setResponse({sending: false, success:false, donneIncorecte:true})
                    if(res.validator){

                    }else{

                    }
                }
           
            })
            ).catch(error =>{ 
                console.log(error)
                setResponse({sending: false, success:false, donneIncorecte:true})
            })
    }

    

    const validateField = () => {

    }

    const handleChange = ({target : {value, name}}) => {

        if(name==="isCompleted"){
            setState(old => {return { ...old, isCompleted: !state.isCompleted}}) ;
        }else {
            setState(old => {return { ...old, [name]: value}}) ;
        }

    }
       
    return (
        <div className="teleconsultation">
            <Row className="m-0">
               <Col lg="6" md={12} sm={12} xs={12}>
                    <ChatContainer teleconsultation = {teleconsultation} socket={socket}  />
               </Col>
               <Col lg="6" md={12} sm={12} xs={12}>
                    <Card>
                        <CardBody>
                        
                            <div>  
                                <strong> Document à partager dans cette consultation </strong>
                                <DocumentC documents={teleconsultation? teleconsultation.documents:[]} socket={socket} consultation={teleconsultation} />
                            </div>
                               
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                        
                            <div>  
                            <strong> Ajouter un rapport  </strong>
                            {
                                addRapport ? 
                                <div> 
                                    <form onSubmit={handleSubmit} autoComplete="off">
            
                                        <Row>
                                                <Col xs="12" md="6" className="mt-3"> 
                                                    <TextField
                                                        error={fieldValidationErrors.nomError}
                                                        placeholder=""
                                                        label={content.report.labelNom}
                                                        required={false}
                                                        variant="outlined"
                                                        name="type"
                                                        onBlur={validateField} 
                                                        value={state.nom}
                                                        onChange={handleChange} 
                                                    />
                                                </Col>
                                                <Col xs="12" md="12" className="mt-3" > 
                                                    <TextField
                                                        placeholder=""
                                                        variant="outlined"
                                                        required={false}
                                                        error={fieldValidationErrors.prenomError}
                                                        label={content.report.labelPrenom}
                                                        onBlur={validateField} 
                                                        name="description"
                                                        fullWidth
                                                        value={state.description}
                                                        onChange={handleChange} 
                                                    />
                                                
                                                </Col>
                                                <Col xs="12" md="6" className="mt-3" > 
                                                    <Checkbox
                                                        placeholder=""
                                                        variant="outlined"
                                                        required={false}
                                                        error={fieldValidationErrors.prenomError}
                                                        label={content.report.labelEnd}
                                                        name="isCompleted"
                                                        checked={state.isCompleted}
                                                        rtl={locale === "ar"?  true : false}
                                                        onChange={handleChange} 
                                                    />
                                                </Col>
                                        </Row>
                                        <Row className="justify-content-center">
                                            <Collapse in={response.donneIncorecte}>
                                                <div className="mt-5">
                                                    <Alert  variant="danger">
                                                        {content.report.errorSignup}
                                                    </Alert>
                                                </div>
                                            </Collapse>
                                        </Row>
                                        <Row className="justify-content-center">
                                            <Collapse in={response.success}>
                                                <div className="mt-5">
                                                    <Alert  variant="success">
                                                        {content.report.successSignup}
                                                    </Alert>
                                                </div>
                                            </Collapse>
                                        </Row>
                                        <Row className="align-items-center justify-content-around mt-4 ">
                                            <Button type="submit" color="primary"> {content.report.signup} </Button>
                                        </Row>
                                    </form>
                                </div>
                                : 
                                <div>
                                    <Button color="primary" onClick={() => setAddRapport(true)}> Ajouter rapport </Button>
                                </div>
                            }
                            </div>
                               
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

function ChatContainer(props) {
    const [onConsuting, setonConsuting] = useState(false);
    const [onCalling, setonCalling] = useState(false);
    const [difference, setdifference] = useState(0);
    const [now, setnow] = useState(0);

    
    useEffect(()=>{
    if(props.socket){
        props.socket.on("call-entring", () => {
            setonCalling(true);
        });

        props.socket.emit('check-time', {consultationId: props.teleconsultation.id}, (response)=> { 
            setdifference(response.diff);
            setnow(response.now)
            setonConsuting(response.isTime);
        });  
    }
      
    }, [props.socket])

    return (
        <div>
            {
                props.teleconsultation?
                <Row className="justify-content-around m-0">
                    <Col lg="12" className = "bg-white p-0 discussion-container">
                        <Row className="m-0">
                            <InfoBar
                                onConsuting={onConsuting} 
                                medecin={props.teleconsultation.medecin} 
                                teleconsultation={props.teleconsultation}
                            />
                        </Row>
                    
                        <Row className="discussion m-0">
                            <ProcessZone 
                            onConsuting={onConsuting} 
                            medecin={props.teleconsultation.medecin}
                            difference={difference}
                            now={now}
                            setonCalling={setonCalling}
                            onCalling={onCalling}
                            {...props}
                             />
                        </Row>
                    </Col>
                </Row> 
                : null
            }
            
        </div>
    )
}
function ProcessZone(props){
    
    useEffect(() => {
        if(navigator){
            if(navigator.permissions){
                navigator.permissions.query({name: "camera"})
                .then((res) => console.log(res),
                    e => console.log(e.name +": "+ e.message))
                .catch(err => {
                    console.log(e.name +": "+ e.message)
                })
        
              navigator.permissions.query({name: "microphone"})
              .then(({state}) => console.log(state),
            e => console.log(e.name +": "+ e.message));
          
                // navigator.mediaDevices.enumerateDevices()
                // .then(devices => {
                //     const filtered = devices.filter(device => device.kind === 'videoinput');
                //     // console.log('Cameras found', filtered)
                //     // callback(filtered);
                // })
                // .catch(err=> {
                //     console.log(`Unable to fetsh stream ${err}`)
                // })
            }
          
        }
       
        return () => {
            
        }
    }, [])
    if(props.onCalling) {
        return(
            <VideoCall {...props} />
        )
    }

    if(props.onConsuting) {
        return(
            <Chat {...props} />
        )
    }
    switch (true) {
        case props.difference > 0:
            return (
                <FutureConsultation difference={props.difference}now={props.now} />
            )
        case props.difference < 0:
            return (
                <OldConsultation />
            )
        default:
            return(
                <div>
                    <p> Nous avons pas pus déduire le créneau de cette consultation. Veillez rafréchir la page pour réssayer </p>
                </div>
            )
    }
   
}


  

function Chat(props) {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    
    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
          setMessage('')
          let data = {message: message, type:"text", sentBy:"patient", sentTo: "medecin", selectedUser: "m" + props.medecin.id, consultationId: props.teleconsultation.id };
          setMessages(messages => [ ...messages, {isSentByCurrentUser: true,  data} ]);
           props.socket.emit('sendMessage', data, ()=> { });    
        }
    }

    useEffect(()=>{
        if(props.socket){
            props.socket.on('message', (message) => {
                setMessages(messages => [ ...messages, message ]);
            });
        

        }
        return () => {
            if(props.socket){
                props.socket.removeAllListeners('message')
            }
            
        }
    }, [props.socket])

    return(
        <Col lg="12" md="12" sm="12" xs="12" className="chat-messages p-0">
            <Messages messages={messages} user={props.medecin} storedMessages={props.teleconsultation.messages} />
            <SendMessageForm message={message} setMessage={setMessage} sendMessage={sendMessage} active={props.teleconsultation.active} />
        </Col>
    )
}

function FutureConsultation({difference,now}) {

    return(
        <Col lg="12" md="12" sm="12" xs="12" className="chat-messages p-5">
            <Row className="justify-content-center align-items-center h-100">
                <CountDown 
                    difference={difference} 
                    now={now}
                />
            </Row>
        </Col>
    )
}

function OldConsultation(props) {
   

    return(
        <Col lg="12" md="12" sm="12" xs="12" className="chat-messages p-0">
            <Row className="justify-content-center align-items-center h-100">
                <div>
                <h2> consultation passer </h2>
                </div>
            </Row>
        </Col>
    )
}
