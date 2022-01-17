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

function Gestion() {
  const [categories, setCategories] = useState([]);
  const [events, setEvents] = useState([]);
  const [errors, setErrors] = useState({});
  const {UserData} = useAuth();

  useEffect(() => {

    Axios.get(`${Config.BACKEND_URL}/medecin/consultation`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${UserData.token}`,
    }})
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

 

    Axios.get(`${Config.BACKEND_URL}/medecin/tarifs`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${UserData.token}`,
      }})
    .then(response =>{

      if(response){
        if (!response.data.error) { 

          if(response.data.typeConsultation){
            setCategories(response.data.typeConsultation.reverse())
          }
          
        }else{
          // setErrors( (errors) => {return {events: true}})
        }
      }
     
    })
    .catch(err=> {
      if(err.response){

        if(err.response.data.errors){
          if(err.response.data.errors.name === "SequelizeConnectionError"){

          }
          if(err.response.status === 500){
  
          }
          if(err.response.status === 403){
  
          }
        }
        
      }
      
    });

    return () => {
      
    }
    
  }, []);
  const setNewCategory =(newCategory) => {
    setCategories( (categories) => [newCategory, ...categories]);
  }



  return (
    <div className="gestion">
      <h1> Géstion des événements </h1>
      <Row className="mt-5 mx-0">
        <Category categories={categories} setCategories={setCategories} events={events} setNewCategory={setNewCategory} />
      </Row>
      <Row className="mt-5 mx-0">
        <Calandar categories={categories}  events={events} setEvents={setEvents} errors />
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
