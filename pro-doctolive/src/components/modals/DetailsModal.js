

import React, {useState} from 'react'

import {Modal,  Row, Col, Badge} from 'react-bootstrap';

import moment from 'moment'
import Button from 'components/CustomButtons/Button'

import {Link} from 'react-router-dom'

export default function DetailsModal(props) {

  return (
      <div>
    <Modal
       show={props.DetailsEvent.show}
       onHide={() => {}}
        size="xl"
        centered
        className="add-event-modal"
      >
        <Modal.Header onHide={() => props.setModalShow({show: false, slot:{}})} closeButton>
          <div className="d-flex w-100 pl-5 justify-content-between align-items-center">
          <h4 className="modal-title" >
            Détails du rendez-vous
          </h4>
          <Badge variant="primary"> {props.DetailsEvent.slot.tarif ? props.DetailsEvent.slot.tarif.name : "Aucune catégorie"} </Badge>   
          </div>

        </Modal.Header>
        <Modal.Body>
          <div >
            {
            
             props.DetailsEvent.slot ?
                <div  className="px-4" >
                  <h4> Information du rendez-vous </h4>
                  <Row>
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                      <Row className="align-items-center">
                          <label className="m-0"> Titre: </label>
                          <p className="ml-4"> { props.DetailsEvent.slot.title ?  props.DetailsEvent.slot.title : "Aucun titre mentionnée"} </p>
                      </Row>
                    </Col>
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                      <Row className="align-items-center">
                        <label className="m-0"> Description: </label>
                        <p className="ml-4"> { props.DetailsEvent.slot.description ?  props.DetailsEvent.slot.description : "Aucune déscription mentionnée"} </p>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                    <Row className="align-items-center">
                        <label className="m-0"> Date de début: </label>
                        <p className="ml-4"> { props.DetailsEvent.slot.date !== undefined &&  moment( props.DetailsEvent.slot.date +  props.DetailsEvent.slot.time, "YYYY/MM/DDHH:mm").calendar()}</p>
                    </Row>
                    </Col>
                    <Col className="mt-3" md="6" lg="6" sm="12">
                      <Row className="align-items-center">
                          <label className="m-0"> Date fin: </label>
                          <p className="ml-4"> { props.DetailsEvent.slot.date !== undefined &&  moment( props.DetailsEvent.slot.date +  props.DetailsEvent.slot.time, "YYYY/MM/DDHH:mm").add(15, 'minutes').calendar()}</p>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <h4> Information du patient </h4>
                  </Row>
                  <Row className="mt-4">
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                    <Row className="align-items-center">
                        <label className="m-0"> Nom: </label>
                        <p className="ml-4"> { props.DetailsEvent.slot.patient ?  props.DetailsEvent.slot.patient.nom : " "}</p>
                    </Row>
                    </Col>
                    <Col className="mt-3" md="6" lg="6" sm="12">
                      <Row className="align-items-center">
                          <label className="m-0"> Prenom: </label>
                          <p className="ml-4"> { props.DetailsEvent.slot.patient ?  props.DetailsEvent.slot.patient.prenom : " "}</p>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col className="mt-3"  md="6" lg="6" sm="12">
                    <Row className="align-items-center">
                        <label className="m-0"> Téléphone: </label>
                        <p className="ml-4"> { props.DetailsEvent.slot.patient ?  props.DetailsEvent.slot.patient.phone : " "}</p>
                    </Row>
                    </Col>
                    <Col className="mt-3" md="6" lg="6" sm="12">
                      <Row className="align-items-center">
                          <label className="m-0"> Email: </label>
                          <p className="ml-4"> { props.DetailsEvent.slot.patient ?  props.DetailsEvent.slot.patient.email : " "}</p>
                      </Row>
                    </Col>
                  </Row>
                </div> 
                : 
                <div>
                  <p >  on a pas pus récupérer les informations du spot </p>
                  
                </div>
            }
          </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button color="transparent" onClick={() => props.setModalShow({show: false, slot:{}})}>Retour</Button>
          <Link to={`/agenda/rendez-vous/${props.DetailsEvent.slot.id}`} >Plus de détails</Link>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
  