import React, {useEffect, useState} from 'react'

import Axios from 'axios'
import Config from 'Config'
import { useAuth } from 'context/Auth';

import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import moment from 'moment'
import {Row, Col} from 'react-bootstrap'
import {Link } from 'react-router-dom'

import DocumentC from 'components/Documents/DocumentsC'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


import Messages from './messages/index';
import InfoBar from './infoBar/index';
import VideoCall from './VideoCall'
import SendMessageForm from './sendingMessage/index';
import CountDown from './CountDown/CountDown'
import Button from 'components/CustomButtons/Button'
export default function ConsultationContainer(props) {

    const [teleconsultation, setTeleconsultation] = useState();
    const [errors, setErrors] = useState({});
    const {UserData} = useAuth();       

        useEffect(() => {
            Axios.get(`${Config.BACKEND_URL}/consultation/${props.match.params.code}`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `token ${UserData.token}`,
              }})
              .then(response =>{
                  
                if(response){
                  if (!response.data.error) { 
                    if(response.data.consultation){
                        setTeleconsultation(response.data.consultation)
                    }
                    
                  }else{
                    setErrors( (errors) => {return {...errors, events: true}})
                  }
                }
               
              })
              .catch(err=> {
                if(err.response){
          
                  if(err.response.status === 500){
          
                  }
                }
                
              });
            return () => {
                
            }
        }, [])

        const handleCloseConsult = () => {
            Axios.patch(`${Config.BACKEND_URL}/consultation/close/${props.match.params.code}`, {} , {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `token ${UserData.token}`,
              }})
              .then(response =>{

                if(response){
                  if (!response.data.error) { 
                    if(response.data.consultation){
                        setTeleconsultation(oldData => {return {...oldData, active: false,}})
                        // setTeleconsultation(response.data.consultation)
                    }
                    
                  }else{
                    // setErrors( (errors) => {return {...errors, events: true}})
                  }
                }
               
              })
              .catch(err=> {

                if(err.response){
          
                  if(err.response.status === 500){
          
                  }
                }
                
              });
        }

    return (
        <div>
            <Row>
               <Col lg="6" md={12} sm={12} xs={12}>
                    <ChatContainer teleconsultation = {teleconsultation} UserData ={UserData} {...props} />
               </Col>
               <Col lg="6" md={12} sm={12} xs={12}>
                    <Card>
                        <CardBody>
                        <Timeline align="left" className="MuiTimeline-alignLeft">
                            <TimelineItem  >
                                <TimelineSeparator>
                                <TimelineDot variant="outlined" color="secondary"/>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div>  
                                        <strong> Document à partager avec le patient </strong>
                                        { !teleconsultation? null : <DocumentC consultation={teleconsultation} {...props} documents={teleconsultation? teleconsultation.documents : []} />}
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem  >
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary"/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className="d-flex justify-content-center">  
                                        { !teleconsultation?.active ? null : <Button color="primary" onClick={handleCloseConsult}> Terminer la consultation </Button>}
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            </Timeline>
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
        if(props.socket && props.teleconsultation){
            props.socket.emit('check-time', {consultationId: props.teleconsultation.id}, (response)=> { 
                setdifference(response.diff);
                setnow(response.now)
                setonConsuting(response.isTime);
            });  
        }
          
    }, [props.socket, props.teleconsultation])

    const startCallVideo = () => {
        setonCalling(true)
    }
    return (
        <div>
            {
                props.teleconsultation?
                <Row className="justify-content-around ">
                    <Col lg="12" className = "bg-white p-0 discussion-container">
                        <Row className="m-0">
                            <InfoBar
                                onConsuting={onConsuting} 
                                patient={props.teleconsultation.patient} 
                                teleconsultation={props.teleconsultation}
                                socket={props.socket}
                                startCallVideo={startCallVideo}
                            />
                        </Row>
                    
                        <Row className="discussion m-0">
                            <ProcessZone 
                            onConsuting={onConsuting} 
                            patient={props.teleconsultation.patient}
                            difference={difference}
                            // consultation={consultation}
                            now={now}
                            onCalling={onCalling}
                            setonCalling={setonCalling}
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
                <FutureConsultation difference={props.difference} />
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

    useEffect(()=>{
    if(props.socket){
        props.socket.on('message', (message) => {
            setMessages(messages => [ ...messages, message ]);
          });
    
          props.socket.on("call-entring", () => {
            // setInCall(true);
            props.setDeleteBanner(true);
          });
    }
      
     
      return () => {
        if(props.socket){
            props.socket.removeAllListeners('call-entring')
            props.socket.removeAllListeners('message')
        }
        
    }
    }, [props.socket])

    const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          setMessage('')
          let data = {message: message, type:"text", sentBy:"médecin", sentTo: "patient", selectedUser: "p" + props.patient.id, consultationId: props.teleconsultation.id };
          setMessages(messages => [ ...messages, {isSentByCurrentUser: true,  data} ]);
           props.socket.emit('sendMessage', data, ()=> { });    
        }
    }

    return(
        <Col lg="12" md="12" sm="12" xs="12" className="chat-messages p-0">
            <Messages messages={messages} storedMessages={props.teleconsultation.messages} user={props.patient} />
            <SendMessageForm message={message} active= {props.teleconsultation.active} setMessage={setMessage} sendMessage={sendMessage} />
        </Col>
    )
}

function FutureConsultation({difference}) {

    return(
        <Col lg="12" md="12" sm="12" xs="12" className="chat-messages p-5">
            <Row className="justify-content-center align-items-center h-100">
                <CountDown 
                    timeTillDate="05 26 2019, 6:00 am" 
                    timeFormat="MM DD YYYY, h:mm a" 
                    difference={difference} 
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
