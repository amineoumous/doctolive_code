

import React, {useState, useEffect} from 'react'

import Axios from 'axios'
import {Modal, Button, Row, Col} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment'




  let backendUrl = "http://localhost:5000/";


export default function UpdateModal(props) {

    const [dateDay, setDateDay] = useState(moment());
    const [date_start, setDateStart] = useState(props.updateEvent.slot.start !== undefined ?  moment(props.updateEvent.slot.start).format("HH:mm") : "10:00");
    const [duree, setDuree] = useState("00:15");
    const [title, setTitle] = useState(" ");
    const [informations, setInformations] = useState(" ");
    const [categorie, setCategorie] = useState(1);
    const [categories, setCategories] = useState([]);
  
    const sendData = () => {
      let ellementDuree = duree.split(":");
      ellementDuree.map(elmnt => parseInt(elmnt));
  
      let end = moment(date_start, "HH:mm").add( ellementDuree[1], "minutes")
      end.add(ellementDuree[0], "hours")
      let start = dateDay.format("YYYY-MM-DD") +"T" + date_start +":00.356Z";
  
      let data = {title, content: informations, start  , end: dateDay.format("YYYY-MM-DD") +"T" + end.format("HH:mm:ss[.365Z]"), categoryId:categorie, userId: 4};

      Axios.put(`${backendUrl}event/${props.updateEvent.slot.id}`, data,{headers: {'Content-Type': 'application/json'}})
      .then(response =>{
  
        if(response){
          if (!response.data.error) { 
            props.setChanageUpdate(response.data.event)
            
          }else{
            // setErrors( (errors) => {return {events: true}})
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
    useEffect(() => {
        let start = moment(props.updateEvent.slot.start);
        let end = moment(props.updateEvent.slot.end);
        let diff = end.diff(start, "minutes");

        let hours = Math.floor(diff / 60);
        hours = (hours < 10 ) && "0" + hours;
        let minutes = diff% 60;
        let duree = hours + ":" + minutes;

        if(props.updateEvent.slot){
            setTitle( props.updateEvent.slot.content ? props.updateEvent.slot.title: " ");
            setInformations(props.updateEvent.slot.content ? props.updateEvent.slot.content : " ");
            setCategorie(props.updateEvent.slot.categoryId ? props.updateEvent.slot.categoryId : 1);
        }
        setDuree(duree);
       
      setDateStart(props.updateEvent.slot.start !== undefined ?  moment(props.updateEvent.slot.start).format("HH:mm") : "10:00");
      setDateDay(props.updateEvent.slot.start !== undefined ?  moment(props.updateEvent.slot.start) : moment());
      
    //   setDateEnd(props.updateEvent.slot.start !== undefined ?  moment(props.updateEvent.slot.start) : moment());
  
      return () => {
        
      }
    }, [props.updateEvent])
  
    useEffect(() => {
      setCategories(props.categories)
      
    }, [props.categories])
  
    return (
      <div>
    <Modal
       show={props.updateEvent.show}
       onHide={() => props.setModalShow({show: false, slot:{}})}
        size="lg"
        centered
        className="add-event-modal"
      >
        <Modal.Header  closeButton>
          <div >
          <h4 className="modal-title" >
          Modification des donnée  
          </h4>
          </div>
        
        </Modal.Header>
        <Modal.Body>
          <div >
            {
              props.updateEvent.slot ?
                <div  className="px-4">
                  <Row>
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                      <TextField 
                      required 
                      fullWidth={true}
                      type="text"
                      label="le titre l'événement" 
                      value={title}
                      InputLabelProps={{
                        style:{ width: "130%" },
                        shrink: true,
                      }}
                      onChange={(event) => {setTitle(event.target.value)}}
                    />
  
                    </Col>
                    <Col className="mt-3" md="6" lg="6" sm="12">
                      <TextField 
                      required 
                      fullWidth={true}
                      type="text"
                      label="plus d'information" 
                      value={informations}
                      InputLabelProps={{
                        style:{ width: "130%" },
                        shrink: true,
                      }}
                      onChange={(event) => {setInformations(event.target.value)}}
                    />
  
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                      <TextField
                        label="Heure du début"
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
                    </Col>
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                      <TextField
                        label="durré de lévénement"
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
                    </Col>
                  </Row>
                  <Row className="mt-4">
                  <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">choisir une catégorie</InputLabel>
                      <Select
                    style={{width: "50%"}}
                    value={categorie}
                    onChange={(event)=> setCategorie(event.target.value)}
                  >
                    {
                      categories.map(categorie => <MenuItem key={categorie.id} value={categorie.id}> {categorie.name} </MenuItem>)
                    }
                  </Select>
                    </FormControl>
                 
                  </Row>
                    {/* <p > { props.updateEvent.slot.start !== undefined &&  moment(props.updateEvent.slot.start).calendar()} </p> */}
                     
  
                </div> 
                : 
                <div>
                  <p >  on a pas pus récupérer les informations du spot </p>
                </div>
  
            }
          </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => props.setModalShow({show: false, slot:{}})}>fermer</Button>
          <Button variant="success" onClick={sendData}>Enregistrer les information</Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }

