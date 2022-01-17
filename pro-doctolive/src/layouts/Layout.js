import React,{useEffect, useState} from 'react'

import MedecinPro from './MedecinPro'
import Consultation from './Consultation'

import { Switch, Route } from "react-router-dom";

import BaseUrl from 'Config.js'

import io from "socket.io-client";

import 'assets/css/pro.css'
import { useAuth } from 'context/Auth';


export default function Layout(props) {
    const [socket, setSocket] = useState();
    const [socketError, setSocketError] = useState({})

    const {UserData} = useAuth();   

    useEffect(() => {
       
        const options = {
            path:"/socket.io",
            reconnection: true,
            reconnectionAttempts: Infinity,
            transports: ['websocket']
        }
        
        let connection = io.connect(BaseUrl.BACKEND_URL, options);
        connection.on('connect', () => {
          console.log('connect');

          connection.emit('join-medecin',  {...UserData.user, id: 'm' + UserData.user.id } , ({error, message }) => {
            console.log(error, message);
            if(error) {
                setSocketError(error, message)
            }
            else{
            
            }
        });
        });
    
        connection.on('connect_error', (error) => {
            console.log('connect_error', error)
        }); 

        connection.on('disconnect', (reason) => {
            console.log('disconnect', reason)

        });
      

        connection.on('reconnect_attempt', () => {
            console.log('reconnect_attempt')

        });

        connection.on('reconnecting', () => {
            console.log('reconnecting')

        });
        connection.on('reconnect', () => {
            console.log('reconnect')

           
        });

      

        setSocket(connection)
    }, [] );

    return (
        <div>
            <Switch>
                <Route
                    path="/chat-video"
                    render= {(pr) => <Consultation {...pr} socket={socket} /> }
                />
                <Route
                path="/"
                render= {(pr) => <MedecinPro {...pr} socket={socket} /> }
                />
            </Switch> 
        </div>
    )
}
