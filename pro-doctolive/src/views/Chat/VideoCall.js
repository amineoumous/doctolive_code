import React, { Component } from 'react';
import Peer from 'simple-peer';
import autoBind from 'react-autobind';

import { Button, Row, Col} from 'react-bootstrap'
import {FaPhoneSlash} from 'react-icons/fa'

import Axios from 'axios'
import Config from 'Config';



export default class ElemenetsCall extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            stream: null,
            passingCall:false,
            patientReady:false
        };
        this.timerCall = null;
    }
    
    componentDidMount() {
        this.setupSocket();
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
        .then((stream)=> {
            window.streamReference = stream;
            this.setState({ stream : stream});
            try {
                this.myVideo.srcObject = stream;
            } catch (e) {
                this.myVideo.src = URL.createObjectURL(stream)
            }
            // try {
            //     this.callerTone.src = callerTone
            // } catch (e) {
            //     this.callerTone.srcObject =  URL.createObjectURL(callerTone) 
            // }
            this.props.socket.emit('call-patient', { selectedUser: 'p' + this.props.patient.id}, (response) => {});
        })
        .catch((err)=>{
            console.log(`Unable to fetsh stream ${err}`)
        })
       
    }

    setupSocket(){
        let socket = this.props.socket;
        socket.on('reject-call-medecin', (response) => {
            this.stopStream();
            this.setState({ stream : null, responding:false});  
            this.props.setonCalling(false)
        });

        socket.on('signal-call', ({data}) => {
            let peer = this.setUpPeer();
            this.setState({peer})
            console.log(data)
            peer.signal(data);
        });
        
        socket.on('ready-patient', (response) => {
            socket.emit('client-call', {selectedUser: 'p' + this.props.patient.id}, () => {  });
            this.setState({patientReady: true});
            this.timerCall = setTimeout(() => {
                if(!this.state.responding){
                    (this.rejectCall())
                }
            }, 15000);
            // this.callerTone.play();          
        });
    }
    componentWillUnmount(){
        this.props.socket.removeAllListeners('reject-call-medecin')
        this.props.socket.removeAllListeners('signal-call')
        this.props.socket.removeAllListeners('ready-patient')
        if(this.timerCall !== null){
            clearTimeout(this.timerCall)
        }
        if(this.state.peer){
            this.state.peer.destroy();
        }
    }

    setUpPeer(){
        const peer = new Peer({
            initiator: false,
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
            this.props.socket.emit('medecin-confirm-call', {selectedUser: 'p' + this.props.patient.id, data})
        })
        
        peer.on('stream', (stream) => {
            try {
                this.userVideo.srcObject = stream;
            } catch (e) {
                this.userVideo.src = URL.createObjectURL(stream)
            }
            this.userVideo.play();
            // this.callerTone.pause();
            this.setState({passingCall: true, responding: true, timeAppel: Date.now() })

                // post call time start !
                Axios.post(`${Config.BACKEND_URL}/consultation/videocall/${this.props.teleconsultation.id}`,{} , { 
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `token ${this.props.UserData.token}`,
                    }
                })
                .then(result => {
                    console.log(result.data.videocall.id);
                    this.setState({callId: result.data.videocall.id})
                }).catch(e => {
                    console.log(e.response)
                });
        });

        peer.on('close', () =>{
            // post call time start !
            Axios.put(`${Config.BACKEND_URL}/consultation/videocall/${this.state.callId}`,{} , { 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `token ${this.props.UserData.token}`,
                }
            })
            .then(result => {
               
            }).catch(e => {
                console.log(e.response)
            });

            this.stopStream();
            this.setState({passingCall: false, stream : null, responding:false});  
            this.props.setonCalling(false)
            if(this.state.peer){
                this.state.peer.destroy()
            }
        });

        peer.on('error', (err) => {
            console.log( `vous avez perdue la connextion avec votre patient ${err}`)
        });
        return peer;
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
        // if(this.callerTone !== null){
        //     this.callerTone.muted = true;
        //     this.callerTone= null;
        // }
        if (!window.streamReference) return;
        window.streamReference.getAudioTracks().forEach(function(track) {
            track.stop();
        });
        window.streamReference.getVideoTracks().forEach(function(track) {
            track.stop();
        });
        window.streamReference = null;
    }

    rejectCall(){
        this.props.socket.emit('medecin-reject', {selectedUser: 'p' + this.props.patient.id , reject: true }, () => {
            
        })
        this.stopStream();
        this.setState({ passingCall: false, stream : null, responding:false});  
        this.props.setonCalling(false)
        
    }
      
    render() {
        let { responding, passingCall} = this.state;
        return (
            <div className="video medecin">
                
                <audio ref={ref => this.callerTone = ref} playsInline loop />
                <div className="">
                <Row className={responding ? "repondre video-container m-0 justify-content-center" : "video-container m-0 justify-content-center"}>
                    <video id="peerVid" ref={(ref) => {this.userVideo = ref;}} playsInline autoPlay />
                    <video id="myVid" muted={true} ref={(ref) => {this.myVideo = ref;}}  playsInline autoPlay />
                </Row>
                   
                <Row className={!passingCall ? "responding process": "responding"}>   
                    <Col style={{paddingLeft:0}}>
                    <div className="layer"></div>
                    { !passingCall &&                      
                        <Row className="text-center d-flex justify-content-around w-100 p-4 ml-1 mt-5">   
                            <p className="text-center caller " style={{maxHeight: "20%"}}> {this.state.patientReady ? "appel en cours ...": "en attente de connexion avec votre patient"} </p>
                        </Row>    
                    }
                    <Row className="end-call">
                    <Button
                        onClick={() => this.rejectCall()}
                        className="action" 
                        type="button"
                        variant= "danger"
                        >
                            <FaPhoneSlash /> 
                        </Button>
                    </Row>
                    </Col>
                </Row>
                </div>
            </div>
        );
    }
}
