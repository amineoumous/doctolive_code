
import React, {useState, useEffect} from 'react'

import Axios from 'axios'
import {Modal, Button, Row, Col, Collapse, Alert} from 'react-bootstrap';

import {MenuItem, FormControl, Select, TextField, InputLabel} from '@material-ui/core';
import moment from 'moment'
import { Description } from '@material-ui/icons';
import Config from 'Config'
import { useAuth } from "context/Auth";


  let backendUrl = "http://localhost:5000/";



export default function AddModal(props) {
    const [dateDay, setDateDay] = useState(moment());
   // const [date_start, setDateStart] = useState(props.addEvent?.slot?.start !== undefined ?  moment(props.addEvent.slot.start).format("HH:mm") : "10:00");
    const [date_start, setDateStart] = useState(props.currentDate);
    const [duree, setDuree] = useState("00:15");
    const [title, setTitle] = useState("");
    const [informations, setInformations] = useState("");
    const [categorie, setCategorie] = useState(1);
    const [errors, setErrors] = useState({});
    const {UserData} = useAuth();
  
     
    const sendData = () => {
      let ellementDuree = duree.split(":");
      ellementDuree.map(elmnt => parseInt(elmnt));
  
      let end = moment(date_start, "HH:mm").add( ellementDuree[1], "minutes")
      end.add(ellementDuree[0], "hours")
      let start = dateDay.format("YYYY-MM-DD");     
      let data = {title, description: informations,date:start,time:date_start  , end: dateDay.format("YYYY-MM-DD") +"T" + end.format("HH:mm:ss[.365Z]"),tarifId:categorie};
  
      Axios.post(`${Config.BACKEND_URL}/medecin/consultation`,data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `token ${UserData.token}`,
        }}).then(response =>{
  
        if(response){
          if (!response.data.error) { 
            props.setNewEvent(response.data.event)
            
          }else{
            // setErrors( (errors) => {return {events: true}})
          }
        }
       
      })
      .catch(err=> {
        if(err.response){
          if(err.response.status === 500){
  
          }
          if(err.response.status === 403){
            let setingError= {};
            err.response.data.errors.map(error => {
              return setingError[error.param] = true
            })
            setErrors(setingError)
          }
        }
      });
    }
    useEffect(() => {
      setDateStart(props.addEvent.slot.start !== undefined ?  moment(props.addEvent.slot.start).format("HH:mm") : "10:00");
      setDateDay(props.addEvent.slot.start !== undefined ?  moment(props.addEvent.slot.start) : moment());
  
      return () => {
        
      }
    }, [props.addEvent])
  
  
    return (
      <div>
    <Modal
       show={props.addEveno}
       onHide={() => props.setAddEveno(false)}
        size="lg"
        centered
        className="add-event-modal"
      >
        <Modal.Header  closeButton>
          <div >
          <h4 className="modal-title" >
            Ajouter un événement
          </h4>
          </div>
        
        </Modal.Header>
        <Modal.Body>
          <div >
            {
              props.addEvent.slot ?
                <div  className="px-4">
                  <FormControl style={{width:"100%"}}>
                  <Row className="w-100">

                    <Col className="mt-3"  md="6" lg="6" sm="12">
                      <TextField 
                        required 
                        fullWidth={true}
                        type="text"
                        label="un titre de l'événement" 
                        value={title}
                        InputLabelProps={{
                          style:{ width: "130%" },
                          shrink: true,
                        }}
                        onChange={(event) => {setTitle(event.target.value)}}
                      />
                      <Row className="inscription-input">
                        <Collapse in={errors.title}>
                          <div id="example-collapse-text">
                              <Alert  variant="danger">
                                le titre ne doit pas etre vide
                              </Alert>
                          </div>
                        </Collapse>
                      </Row>
                    </Col>

                    <Col className="mt-3" md="6" lg="6" sm="12">
                      <TextField 
                        required 
                        fullWidth={true}
                        type="text"
                        label="Plus d'information" 
                        value={informations}
                        InputLabelProps={{
                          style:{ width: "130%",
                         },
                          shrink: true,
                        }}
                        onChange={(event) => {setInformations(event.target.value)}}
                      />
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                      <TextField
                        label="Heure du départ"
                        type="time"
                        fullWidth={true}
                        value={date_start}
                        onChange={ (event) => setDateStart(event.target.value)}
                        className=""
                        InputLabelProps={{
                          style:{ width: "130%" },
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                      />
                      <Row className="inscription-input">
                        <Collapse in={errors.start}>
                          <div id="example-collapse-text">
                              <Alert  variant="danger">
                                le format date est indisponible
                              </Alert>
                          </div>
                        </Collapse>
                      </Row>
                    </Col>
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                      <TextField
                        label="durrée de l'événement"
                        type="time"
                        fullWidth={true}
                        value={duree}
                        onChange={ (event) => setDuree(event.target.value)}
                        className=""
                        InputLabelProps={{
                          style:{ width: "130%" },
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                      />
                       <Row className="inscription-input">
                        <Collapse in={errors.duree}>
                          <div id="example-collapse-text">
                              <Alert  variant="danger">
                                le format date est indisponible
                              </Alert>
                          </div>
                        </Collapse>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                  <Col className="mt-3"  md="6" lg="6" sm="12">
                  <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">choisir une catégorie</InputLabel>
                      <Select
                    style={{width: "50%"}}
                    value={categorie}
                    onChange={(event)=> setCategorie(event.target.value)}
                  >
                    {
                      props.categories ? props.categories.map(categorie => <MenuItem className="d-flex justify-content-between text-right" disabled={!categorie.active} value={categorie.id} key={categorie.id}> {categorie.name} {categorie.active? <span className="categorie-color" style={{backgroundColor: categorie.color}} >  </span>: null} </MenuItem>) : <MenuItem value={1} key={1}> default category </MenuItem>
                    }
                  </Select>
                    </FormControl>
                  </Col>  
                  
                  </Row>
                    {/* <p > { props.addEvent.slot.start !== undefined &&  moment(props.addEvent.slot.start).calendar()} </p> */}
                    <Row className="inscription-input">
                        <Collapse in={errors.all}>
                          <div id="example-collapse-text">
                              <Alert  variant="danger">
                                le format date est indisponible
                              </Alert>
                          </div>
                        </Collapse>
                      </Row>
                    </FormControl>
                </div> 
                : 
                <div>
                  <p >  on a pas pus récupérer les informations du spot </p>
                </div>
  
            }
          </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => props.setAddEveno(false)}>Férmer</Button>
          <Button variant="success" onClick={sendData}>Enregistrer</Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }