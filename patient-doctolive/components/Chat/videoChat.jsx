

import React, { Component } from 'react';
import Peer from 'simple-peer';
import autoBind from 'react-autobind';
// import Axios from 'axios'

// import baseUrl from './../../config'

import {CircularProgress} from '@material-ui/core';
import { Button, Row, Col, Collapse, Alert} from 'react-bootstrap'
import {FaPhoneSlash, FaPhone, FaCheck} from 'react-icons/fa'
// import callerTone from './../../assets/media/callertone.mp3'

// import LogoPng from './../../assets/img/pelia_logo.png'


export default class ElemenetsCall extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            stream: null,
            respondingProcess:true,
            errorMedia:{error:false}
        };
    }
    componentDidMount() {
        const constraints={
            video: {
                facingMode: "user", 
                width: 640, 
                height: 480, 
                cursor:"motion"
            }, 
            audio:true
         }

        this.initiatorCallVideo(constraints)
        .then((stream) => {
            window.streamReference = stream;           
            this.props.socket.emit('patient-ready', {selectedUser: 'm' + this.props.medecin.id}, () => { } )
            // let videoStream = new MediaStream(stream.getVideoTracks(), options);
            try {
                this.myVideo.srcObject = stream;
            } catch (e) {
                this.myVideo.src = URL.createObjectURL(stream)
            }
            this.myVideo.play();
            // try {
            //     this.callerTone.src = callerTone
            // } catch (e) {
            //     this.callerTone.srcObject =  URL.createObjectURL(callerTone) 
            // }
            // this.callerTone.play();
            this.setState({ stream : stream, respondingProcess: false})
        })
        .catch((err)=> {
            this.cameraAuthDenied()
            console.log(`Unable to fetsh stream ${err}`)
        })
        this.setupSocket()
    }
    componentWillUnmount(){
        this.props.socket.removeAllListeners('patient-signal-call')
        this.props.socket.removeAllListeners('patient-call')
        this.props.socket.removeAllListeners('reject-call-patient')

        if(this.state.peer){
            this.state.peer.destroy();
        }
    }
    setupSocket(){
        let socket = this.props.socket;
        socket.on('patient-call', (response) => {
   
        })
        socket.on('reject-call-patient', (response) => {
            this.stopStream();
            this.setState({ respondingProcess:false, passingCall: false,responding:false});
            this.props.setonCalling(false)
        })
        socket.on('patient-signal-call', ({data}) => {
            this.setState({responding: true})
            this.state.peer.signal(data);
        })
    }

    cameraAuthDenied(reason){
        this.setState({errorMedia: {error: true, reason}})
    }
    
     initiatorCallVideo(constraints){
      
        return new Promise((resolve, reject) => {
            navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                resolve(stream)
            })
            .catch(err => {
                reject(err)
            })
        });
    }
    
    stopStream() {
        if(this.callerTone !== null){
            this.callerTone.muted = true;
            this.callerTone= null;
        }
        if (!window.streamReference) return;
        window.streamReference.getAudioTracks().forEach( (track) => {
            track.stop();
        });
        window.streamReference.getVideoTracks().forEach( (track) => {
            track.stop();
        });
        window.streamReference = null;
    }


    confirmCall(){
    const peer = new Peer({
        initiator:true,
        stream: this.state.stream,
        config: { iceServers: 
            [
                {
                    urls: "stun:pelia.ma:3478",
                },
                {
                    urls: "turn:pelia.ma:3478",
                    username: "peliaturn",
                    credential: "ejfLUNE6C=fM&4P!"
                }
            ]
        },
        trickle: false
    });
    peer.on('signal', (data) => {
        this.props.socket.emit('confirm-call', {selectedUser: 'm' + this.props.medecin.id, data }, () => { })
    })

    peer.on('stream', (stream) => {
        this.callerTone.pause();
        try {
            this.userVideo.srcObject = stream;
        } catch (e) {
            this.userVideo.src = URL.createObjectURL(stream)
        }
        this.userVideo.play();
        this.setState({passingCall: true, respondingProcess:false, timeAppel: Date.now() })
    })
    peer.on('close', () =>{
        this.stopStream();
        this.setState({ respondingProcess:false, passingCall: false,responding:false });
        // this.props.setonCalling(false)
        if(this.state.peer){
            this.state.peer.destroy()
        }
    });

    peer.on('error', (err) => {
        console.log( `vous avez perdue la connextion avec votre patient ${err}`)
    });
    this.setState({ respondingProcess: true, peer});
    
    }

    rejectCall(){

            this.stopStream();
            this.setState({ respondingProcess:false, passingCall: false, responding:false});
            this.props.socket.emit('patient-reject-call', {selectedUser: 'm' + this.props.medecin.id})
            this.props.setonCalling(false)
    }
      
    render() {
        let {responding, passingCall, respondingProcess } = this.state;
        return (
            <div className="video patient">
                <audio ref={ref => this.callerTone = ref} playsInline loop />
                <div className={responding ? "repondre video-container" : "video-container"}>
                    <video id="peerVid" ref={(ref) => {this.userVideo = ref;}} playsInline autoPlay />
                <Row className="justify-content-center m-0">
                    <video id="myVid" muted={true} ref={(ref) => {this.myVideo = ref;}} playsInline autoPlay />
                </Row>    

                <Row className={!passingCall ? "responding process m-0": "responding m-0"}>   
                    <Col className="p-0">
                    <div className="layer"></div>
                        
                        <Row className="mt-5">
                            <Collapse in={this.state.errorMedia.error}>
                                <div id="example-collapse-text" style={{zIndex:999}}>
                                    <Alert  variant="danger">
                                        Vous ne autorisé pas l'accés au camera pour le site ocp.pelia.ma. Changer vos paramétre pour pouvoir communiquer avec votre médecin
                                    </Alert>
                                </div>
                            </Collapse>
                        </Row>
                        
                            { !passingCall &&                      
                                <Row className="text-center d-flex justify-content-around w-100 p-4 ml-1 mt-5">   
                                    <p className="text-center caller " style={{maxHeight: "20%"}}> Un appel entrant de la part de votre médecin</p>
                                </Row>    
                            }
                        <Row className="end-call">
                            <ButtonProcess 
                                    className="action" 
                                    onClick={this.rejectCall} 
                                    type="button"   
                                    variant="danger" 
                                    sending={respondingProcess} 
                                    IconSuccess={FaCheck} 
                                    Icon={<FaPhoneSlash size="1.5rem" />}
                                />
                                    
                            { !passingCall &&
                                <ButtonProcess 
                                    className="action" 
                                    onClick={this.confirmCall} 
                                    type="button" 
                                    variant="success" 
                                    sending={respondingProcess} 
                                    IconSuccess={FaCheck} 
                                    Icon={<FaPhone size="1.5rem" />}
                                />
                            }
                        </Row>
                    </Col>
                </Row>
                
               
                </div>
            </div>
        );
    }
}

function ButtonProcess(props) {
  return (
      <div style={{
        display:"flex",
        justifyContent:"center",
        position: 'relative',
      }}>
        <Button
        onClick={props.onClick }
        className={props.className}
          type={props.type}
          variant= {props.variant}
          disabled={props.sending}
        >
           {props.Icon}
        </Button>
        {props.sending && <CircularProgress size={24} style={ {color: "#8dc63f", position: 'absolute',top: '50%', left: '50%',marginTop: -12,marginLeft: -12}}  /> }
      </div>
  );
}


