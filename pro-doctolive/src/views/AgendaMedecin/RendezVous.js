import React, {useEffect, useState} from 'react'

import Axios from 'axios'
import Config from 'Config'
import { useAuth } from 'context/Auth';
import { Modal, Col, Row, Alert, Collapse } from 'react-bootstrap';
import moment from 'moment'

import ReactFancyBox from 'react-fancybox'

import {TiDeleteOutline} from 'react-icons/ti'
import AcceptedFile from 'assets/img/fileaccepted.png'
import {Link} from 'react-router-dom'


import Button from 'components/CustomButtons/Button'

import Checkbox from 'components/Checkbox/Checkbox'
import TextField from '@material-ui/core/TextField';

export default function RendezVous(props) {

    const [consultation,  setConsultation] = useState({documents: []});
    const [errors, setErrors] = useState({});

    const [addRapport, setAddRapport] = useState(false)

    const [absent, setAbscent] = useState(false);
    const [blocked, setBlocked] = useState(false);

    const [success, setSuccess] = useState(false);
    const [fieldValidationErrors, setFieldValidationErrors] = useState({});
    const [state, setState] = useState({isCompleted: false}); 
    const [response, setResponse] = useState({
        sending:false,
        success:false,   
        donneIncorecte: false                 
    })
 
    const {UserData} = useAuth();
    useEffect(() => {
        Axios.get(`${Config.BACKEND_URL}/consultation/${props.match.params.id}`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `token ${UserData.token}`,
          }})
          .then(response =>{
            if(response){
              if (!response.data.error) { 
                if(response.data.consultation){
                  setConsultation(response.data.consultation);
                  setSuccess(response.data.consultation.isPatientAbscent);


                  Axios.get(`${Config.BACKEND_URL}/medecin/checkblock/${response.data.consultation.patientId}`, {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `token ${UserData.token}`,
                  }})
                  .then(response =>{
                    if(response){
                      if (!response.data.error) { 
                        console.log(response.data.nbr)
                        setBlocked(response.data.nbr > 0)
                      }else{
        
                      }
                    }
                  })
                  .catch(err=> {
                      console.log(err)
                    if(err.response){
              
                      if(err.response.status === 500){
              
                      }
                    }
                    
                  });


                }
                
              }else{
                setErrors( (errors) => {return {...errors, events: true}})
              }
            }
           
          })
          .catch(err=> {
              console.log(err)
            if(err.response){
      
              if(err.response.status === 500){
      
              }
            }
            
          });
      
         
        return () => {
            
        }
    }, [])

    const deleteImageHandle = async (file) => {

      let response = await fetch(`${Config.BACKEND_URL}/upload/document`, {
          method: 'DELETE',
          body: JSON.stringify({path: file.path, id: file.id}),
          headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
            'Authorization': `token ${UserData.token}`,
          },
      });

      response.json()
      .then(response => {
          // console.log(response)
          // let index = savedPictures.findIndex(fl => fl.id === file.id);

          // setSavedPictures(oldFiles => {
          //     let clone = [...oldFiles]
          //     clone.splice(index, 1);
          //     return (clone)
          // })
      })
      .catch(error => {

          
      })
  }

  const handleChange = ({target : {value, name}}) => {
    if(name==="isCompleted"){
        setState(old => {return { ...old, isCompleted: !state.isCompleted}}) ;
    }else {
        setState(old => {return { ...old, [name]: value}}) ;
    }

}
  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(old =>  { return {...old, sending: true}});

    let data = state;

    fetch(`${Config.BACKEND_URL}/feedback`,{
        method:"post",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${UserData.token}`,
        },
        body:JSON.stringify({...data, consultationId: consultation.id })
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

const handleAbscence = () => {

  fetch(`${Config.BACKEND_URL}/consultation/abscence/${consultation.id}`,{
    method:"post",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${UserData.token}`,
    },
    body:JSON.stringify({who : "patient"})
})
.then(
    (r) => r.json()
    .then(res => {

        if(!res.error){
          setSuccess(true)
            // props.setUserData(res);
            // setResponse({sending: false, success:true, donneIncorecte: false});
            
            
        }else {
            // setResponse({sending: false, success:false, donneIncorecte:true})
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

const handleBlock = () => {

  fetch(`${Config.BACKEND_URL}/medecin/block`,{
    method:"post",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${UserData.token}`,
    },
    body:JSON.stringify({patientId : consultation.patientId})
})
.then(
    (r) => r.json()
    .then(res => {

        if(!res.error){
          setBlocked(true)
            // props.setUserData(res);
            // setResponse({sending: false, success:true, donneIncorecte: false});
            
            
        }else {
            // setResponse({sending: false, success:false, donneIncorecte:true})
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
    return (
        <div>
            <h1> Détails du rendez vous </h1>
            <div >
            {
            
             consultation ?
                <div  className="px-4" >
                  <h4> Information du rendez-vous </h4>
                  <Row>
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                      <Row className="align-items-center">
                          <label className="m-0"> Titre: </label>
                          <p className="ml-4"> { consultation.title ?  consultation.title : "Aucun titre mentionnée"} </p>
                      </Row>
                    </Col>
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                      <Row className="align-items-center">
                        <label className="m-0"> Description: </label>
                        <p className="ml-4"> { consultation.description ?  consultation.description : "Aucune déscription mentionnée"} </p>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                    <Row className="align-items-center">
                        <label className="m-0"> Date de début: </label>
                        <p className="ml-4"> { consultation.date !== undefined &&  moment( consultation.date +  consultation.time, "YYYY/MM/DDHH:mm").calendar()}</p>
                    </Row>
                    </Col>
                    <Col className="mt-3" md="6" lg="6" sm="12">
                      <Row className="align-items-center">
                          <label className="m-0"> Date fin: </label>
                          <p className="ml-4"> { consultation.date !== undefined &&  moment( consultation.date +  consultation.time, "YYYY/MM/DDHH:mm").add(15, 'minutes').calendar()}</p>
                      </Row>
                    </Col>
                  </Row>

                  {! consultation.teleconsultation?  null:
                            <Row className="mt-5">
                                <Col md="6">
                                    <p>
                                        Merci de cliquer sur le bouton pour accéder à la téléconsultation.
                                    </p>
                                </Col>
                                <Col  md="6">
                                {/* <Link href={`/consultation/${consultation.id}`}>
                                    <a className="link btn btn-primary"> rejoindre la consultation </a>
                                </Link>  */}
                                <Link className="link btn btn-primary" to={`/chat-video/${consultation.id}`} > rejoindre la téléconsultation </Link>
                                </Col>
                            </Row>
                  }             

                        
                  <Row className="mt-4">
                    <h4> Information du patient </h4>
                  </Row>
                  <Row className="mt-4">
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                    <Row className="align-items-center">
                        <label className="m-0"> Nom: </label>
                        <p className="ml-4"> { consultation.patient ?  consultation.patient.nom : " "}</p>
                    </Row>
                    </Col>
                    <Col className="mt-3" md="6" lg="6" sm="12">
                      <Row className="align-items-center">
                          <label className="m-0"> Prenom: </label>
                          <p className="ml-4"> { consultation.patient ?  consultation.patient.prenom : " "}</p>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                    <Row className="align-items-center">
                        <label className="m-0"> Téléphone: </label>
                        <p className="ml-4"> { consultation.patient ?  consultation.patient.phone : " "}</p>
                    </Row>
                    </Col>
                    <Col className="mt-3" md="6" lg="6" sm="12">
                      <Row className="align-items-center">
                          <label className="m-0"> Email: </label>
                          <p className="ml-4"> { consultation.patient ?  consultation.patient.email : " "}</p>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <h4> Ajouter un rapport </h4>
                  </Row>
                  <Row>
                  {
                                addRapport ? 
                                <div> 
                                    <form onSubmit={handleSubmit} autoComplete="off">
            
                                        <Row>
                                                <Col xs="12" md="6" className="mt-3"> 
                                                    <TextField
                                                        placeholder=""
                                                        label="type"
                                                        required={false}
                                                        variant="outlined"
                                                        name="type"
                                                        value={state.nom}
                                                        onChange={handleChange} 
                                                    />
                                                </Col>
                                                <Col xs="12" md="12" className="mt-3" > 
                                                    <TextField
                                                        placeholder=""
                                                        variant="outlined"
                                                        required={false}
                                                        label="description"
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
                                                        label="la consultaton à était compléter"
                                                        name="isCompleted"
                                                        checked={state.isCompleted}
                                                        rtl={false}
                                                        onChange={handleChange} 
                                                    />
                                                </Col>
                                        </Row>
                                        <Row className="justify-content-center">
                                            <Collapse in={response.donneIncorecte}>
                                                <div className="mt-5">
                                                    <Alert  variant="danger">
                                                    Les information sont incorrecte
                                                    </Alert>
                                                </div>
                                            </Collapse>
                                        </Row>
                                        <Row className="justify-content-center">
                                            <Collapse in={response.success}>
                                                <div className="mt-5">
                                                    <Alert  variant="success">
                                                    Demande envoyée avec succés vérifier votre adresse pour une réponse préalable dans les prochains jours
                                                    </Alert>
                                                </div>
                                            </Collapse>
                                        </Row>
                                        <Row className="align-items-center justify-content-around mt-4 ">
                                            <Button type="submit" color="primary"> Ajouter </Button>
                                        </Row>
                                    </form>
                                </div>
                                : 
                                <div>
                                    <Button color="primary" onClick={() => setAddRapport(true)}> Ajouter rapport </Button>
                                    <Button color="primary" onClick={() => setAbscent(true)}> Déclarer l'abscence </Button>
                                </div>
                            }
                  </Row>

                  <Row className="mt-4">
                    <h4> Document </h4>

                  </Row>
                  <Row className="mt-4">
                  { consultation.documents.map((file, index) => {
                      return (
                          <Col className="mt-5" lg="2" md="4" xs="6" key={index}>
                              <div className="image-saved">
                                  {file.type === "application/pdf" ?
                                  <a href={Config.BACKEND_URL + file.path} download={file.name} target="_blank" rel="noopener noreferrer">  <img src={AcceptedFile} alt="..." className="img-fluid" /> </a>
                                  :
                                  <ReactFancyBox
                                      thumbnail={`${Config.BACKEND_URL}${file.path}`}
                                      showCloseBtn={false}
                                      image={`${Config.BACKEND_URL}${file.path}`}/>
                                  }
                                  <span onClick={() => deleteImageHandle(file)} className="delete-button"> <TiDeleteOutline /> </span>                                            
                              </div>
                          </Col>
                      )
                  })}
                  {
                    consultation.documents.length === 0 ?
                    <p> Aucun document partager sur cette consultation </p> : null
                  }
                    
                  </Row>
                </div> 
                : 
                <div>
                  <p >  on a pas pus récupérer les informations du spot </p>
                  
                </div>
            }
          </div> 

          <Modal
       show={absent}
       onHide={() => {}}
        size="lg"
        centered
        className="add-event-modal"
      >
        <Modal.Header onHide={() => setAbscent(false)} closeButton>
          <div className="d-flex w-100 pl-5 justify-content-between align-items-center">
          <h4 className="modal-title" >
            Annoncer que le patient est abscenter à ce rendez-vous
          </h4>
          </div>

        </Modal.Header>
        <Modal.Body>
          { blocked? <div> 
            <Alert  variant="danger">
                      Ce patient ne plus prendre des rendez-vous enline dans votre calendrier.
                  </Alert>
          </div> :
            success ? 
            <div>
               <div className="my-3">
                  <Alert  variant="success">
                      Le patient à bien était déclarer abscent pour ce rendez-vous.
                  </Alert>
              </div>
              <p> AVous pouvez blocker ce patient de prendre des rendez-vous auprés de votre cabinet </p>
              <Button color="primary" onClick={handleBlock}>Bloquer</Button>
            </div>:
            <p> En confirmant l'abscence du patient ce rendez-vous sera fermé. Aprés un nombre d'abscence par le même patient vous aurait la possibilité de bloqué définitevement ce patient </p>
          }
        </Modal.Body>
        <Modal.Footer>
          {success? null : <Button color="primary" onClick={handleAbscence}>Confirmer</Button>}
          <Button color="transparent" onClick={() => setAbscent(false)}>Annuler</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
