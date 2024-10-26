import React, {useState, useEffect} from 'react'

import Axios from 'axios'


// import Calandar from 'Components/gestion/Calandar'
import Category from 'components/gestion/Category'
import { Row } from 'react-bootstrap';

import Calandar from 'components/gestion/Calandar'

import Config from 'Config'
import { useAuth } from "context/Auth";
// import { Switch } from '@material-ui/core';
import { Switch, Route } from "react-router-dom";
import RendezVous from './RendezVous';
import { FaSearch } from "react-icons/fa";

function Gestion() {
  const [events, setEvents] = useState([]);
  const [errors, setErrors] = useState({});
  const {UserData} = useAuth();
  console.log(UserData)

  useEffect(() => {

    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    Axios.get(`${Config.BACKEND_URL}/medecin/consultation`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${UserData.token}`,
        },
        params: {
            date: today, // Add today's date as a query parameter
        }
    })
    .then(response =>{

      if(response){
        if (!response.data.error) { 
          if(response.data.consultation){
            setEvents(response.data.consultation)
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
    
  }, []);



  return (
    <div className="gestion">

      <Row className="mt-5 mx-0 bg-white">
        <div className='header-calendar'>
         <div className='first-letter-name'>
             <span>{UserData?.user?.prenom?.charAt(0)}
             <span className='color-red'>.</span></span>
         </div>
         <div className='search-and-name display-flex'>
          <div className='input-search-cal'>
            <FaSearch  color='#D3D5DF' size={25}/>
            <input className='' />
          </div>
          <span className='name-user'>
            Bonjour {UserData?.user?.prenom} {UserData?.user?.nom}
          </span>

         </div>
      
        </div>
        <Calandar    events={events} setEvents={setEvents} errors />
      </Row>
    </div>
  );
}



export default function Agenda(props) {
  return(
    <Switch>
      <Route path="/agenda" exact component={Gestion} />
      <Route path="/agenda/rendez-vous/:id" exact component={RendezVous} />
    </Switch>
  )

}
