import React,{useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {Row, Col } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// core components
import Table from "components/Table/Table.js";
import SearchInput from "components/SearchInput/SearchInput.js";

import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import CardHeader from "components/Card/CardHeader.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import { BsPersonBoundingBox, BsClockHistory } from 'react-icons/bs'
import { BiCalendar, BiPhone, BiEnvelope, BiUserCheck, BiUserX  } from 'react-icons/bi'

import { VscFeedback } from 'react-icons/vsc'

import { useAuth } from "context/Auth";
import { getOneElement, activateElement, _blockingElement, _deblockingElement, deleteElement } from 'services/Patients/PatientsService'

import styles from "assets/jss/views/profilePageStyle.js";

import FormUpdate from 'views/Patients/FormUpdate/FormUpdate';

import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const {UserData} = useAuth();

  const [userInfo, setUserInfo] = useState({});
  const [messageError, setMessageerror] = useState("");
  const [updateItem, setUpdateItem] = useState(false);

  const [showConfirmationActivate, setShowConfirmationActivate] = useState(false);
  const [showConfirmationDelete, setShowConfirmationDelete] = useState(false);
  const [showConfirmatioBlock, setShowConfirmationBlock] = useState(false);
  const [showConfirmatioDeblock, setShowConfirmationDeblock] = useState(false);

  const classes = useStyles();


  const handleConfirmation = () => {
    activateElement(props.match.params.id, UserData.token)
    .then(result =>{

      setUserInfo(oldInfo => {return {...oldInfo, active: true}});
      setShowConfirmationActivate(false)
    })
    .catch(err => {
        if(err.response){
            // console.log(err.response)
        }

    })
    
  }


  const handleBlock = () => {
    _blockingElement(props.match.params.id, UserData.token)
    .then(result =>{
      setUserInfo(oldInfo => {return {...oldInfo, blocked: true}});
      setShowConfirmationBlock(false)
    })
    .catch(err => {
        if(err.response){

        }

    })
  }

  const handleDeblock = () => {
    _deblockingElement(props.match.params.id, UserData.token)
    .then(result =>{
      setUserInfo(oldInfo => {return {...oldInfo, blocked: false}});
      setShowConfirmationDeblock(false)
    })
    .catch(err => {
        if(err.response){

        }

    })
  }

  const handleDelete = () => {
    deleteElement(props.match.params.id, UserData.token)
    .then(result =>{
      return props.history.push({
        pathname: `/admin/patients`,
      })
    })
    .catch(err => {
        if(err.response){

        }

    })
  }



  useEffect(() => {
    getOneElement(props.match.params.id, UserData.token)
    .then(result => {
      console.log(result.data.patient)
      if(! result.data.error ){
        setUserInfo(result.data.patient);
      }
    })
    .catch(err => {
      console.log(err.response)

      if(err.response){
        if(err.response.data.error){
          setMessageerror(err.response.data.message)
        }
      }
    })
    return () => {
      
    }
  }, [])

  const setUpdatedPatient = (updatedPatient) => {
    console.log(updatedPatient)
    if(!updatedPatient){

    }else{
      setUserInfo(updatedPatient)
    }
    setUpdateItem(false)
  }

  return (
    <div>

      <Parallax small filter image={require("assets/img/patientBackground.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        {
          messageError !== "" ? 
          <div className="p-5"> <h3  className="p-5"> {messageError} </h3> </div>
          :

        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <Col>
                <Row className="justify-content-center">
                  <h3 className={classes.title}> 
                    {userInfo.nom} {userInfo.prenom} 
                      {userInfo.active ? 
                        ! userInfo.blocked ?
                        <span className="ml-5" style={{ fontSize:18}} > 
                          <BiUserCheck size="1.825rem" color= "green" /> <span className="mr-5"> Patient valider </span> <Button round onClick={() => setShowConfirmationBlock(true)} round color="danger"> Bloquer maintenant </Button>
                        </span> 
                        :
                        <span className="ml-5" style={{ fontSize:18}} > 
                          <BiUserX size="1.825rem" color= "#f44336" /> <span className="mr-5"> Patient blocker </span>  <Button round onClick={() => setShowConfirmationDeblock(true)} round color="success"> Déblocker ce patient </Button>
                        </span> 
                        : 
                        <span className="ml-5" style={{fontSize:18}} > 
                          <BiUserX color= "#ff9800" size="1.825rem" />
                          <span className="mr-5"> pas encore activé </span> 
                          <Button round onClick={() => setShowConfirmationActivate(true)} color="success"> activé maintenant </Button>
                        </span> 
                      }  
                  </h3>

                </Row>
                <Row className="justify-content-center">
                  {
                    userInfo.deleted ? 
                    <span className=" btn-secondary"> Ce compte est déja suprimer </span>
                    :
                    <Button onClick={() => setShowConfirmationDelete(true)} color="danger" round> Suprimer le patient </Button>
                  }
                </Row>
               
                
              </Col>
                  <Dialog
                      open={showConfirmationActivate}
                      onClose={ () => setShowConfirmationActivate(false)}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title"> Activer le compte patient </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Avec l'activation de ce patient un compte utilisateur vas être automatiquement créer et la personne vas recevoir les information de login sur sont boite email.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleConfirmation} color="danger">
                          Confirmer
                        </Button>
                        <Button onClick={() => setShowConfirmationActivate(false)} color="transparent" >
                          Annuler
                        </Button>
                      </DialogActions>
                    </Dialog>
                   
                    {/* confirmation de supession d'élement */}

                    <Dialog
                      open={showConfirmationDelete}
                      onClose={ () => setShowConfirmationDelete(false)}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title"> Suprimer le patient </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        Avec votre confirmation ce patient ne peut plus accéder a son compte ni créer un autre compte avec la meme adresse email ou numero telephone.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleDelete} color="danger">
                          Confirmer
                        </Button>
                        <Button onClick={() => setShowConfirmationDelete(false)} color="transparent" >
                          Annuler
                        </Button>
                      </DialogActions>
                    </Dialog>
                    {/* confirmation de blockage d'élement */}

                    <Dialog
                      open={showConfirmatioBlock}
                      onClose={ () => setShowConfirmationBlock(false)}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title"> Bloquer le patient </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Avec votre confirmation le systéme vas blocker ce patient donc il peuvent pas accéder à son profile.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleBlock} color="danger">
                          Confirmer
                        </Button>
                        <Button onClick={() => setShowConfirmationBlock(false)} color="transparent" >
                          Annuler
                        </Button>
                      </DialogActions>
                    </Dialog>

                    {/* confirmation de supession d'élement */}

                    <Dialog
                      open={showConfirmatioDeblock}
                      onClose={ () => setShowConfirmationDeblock(false)}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title"> Déblocquer ce patient </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Avec votre confirmation le systéme vas déblocker ce patient donc il peuvent désormais accéder à son profile
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleDeblock} color="danger">
                          Confirmer
                        </Button>
                        <Button onClick={() => setShowConfirmationDeblock(false)} color="transparent" >
                          Annuler
                        </Button>
                      </DialogActions>
                    </Dialog>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                {userInfo.description} 
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Information generale",
                      tabIcon: BsPersonBoundingBox,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={12}>
                            <GridContainer justify="space-between" alignItems="center">
                              <GridItem xs={12} sm={12} md={6}>
                                <h3> information general </h3>
                              </GridItem>
                              <GridItem sm={12} md={6} style={{ textAlign: 'right'}}>
                                <Button 
                                  onClick={() => (setUpdateItem( value => !value))} 
                                  round 
                                  color="primary"
                                > 
                                  {updateItem ? "Annuler la modification" : "Modifier patient"}  
                                </Button>
                              </GridItem>
                            </GridContainer>
                           { ! updateItem ? 
                            <div>
                                <Row className={classes.basicInfoContainer}>
                                  <Col md= {6} sm={12} className={classes.basicInfo}> <BiPhone /> <span> Numéro de téléphone : {userInfo.phone} </span>  </Col>
                                  <Col md= {6} sm={12} className={classes.basicInfo}> <BiEnvelope /> <span> Adresse email : {userInfo.email} </span>  </Col>
                                </Row>
                            </div>
                           :
                           <FormUpdate data={userInfo} setUpdatedPatient={setUpdatedPatient} />
                           }                           
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Consultation",
                      tabIcon: BsClockHistory,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={12}>
                              <h3> Consultation </h3>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12}>
                          <Card >
                            <CardHeader style={{display: "flex", justifyContent:"space-between", alignItems:"center"}} color="primary">
                                <div >
                                  <h4 className={classes.cardTitleWhite}>
                                    Liste des consultations
                                  </h4>
                                  <p className={classes.cardCategoryWhite}>
                                    Prise par ce patient
                                  </p>
                                </div>
                                <div >
                                  <SearchInput onChange={(researching) => {}} placeholder= "rechercher consultation..."  />
                                </div>
                            </CardHeader>

                            <CardBody>
                              <Table
                                tableHeaderColor="primary"
                                tableHead={columns}
                                tableData={userInfo.consultations}
                              />
                            </CardBody>
                          </Card>
                                {/* <Row className={classes.basicInfoContainer}>
                                    { ! userInfo ? null : ! userInfo.consultations ? null :
                                        userInfo.consultations.length ? 
                                        userInfo.consultations.map((consultation, index) => {
                                          return(
                                            <Col key={index} md="3">
                                            <ConsultationCard consultation={consultation} />
                                          </Col>
                                          )
                                        })
                                        : <h4> Ce patient n'a aucun consultation </h4>
                                       

                                    }
                                </Row> */}

                          </GridItem>

                        </GridContainer>
                      )
                    }
                   
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        }
      </div>
      {/* <Footer /> */}
    </div>
  );
}



const columns = [
  { 
    id: 'title', 
    label: 'Titre', 
    type: "text", 
  },

  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'center',
    type: "date",
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    align: 'center',
    type: "text",
  },
  {
    id: 'teleconsultation',
    label: 'Téléconsultation',
    type: "icon",
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'action',
    label: '',
    type: "link",
    path: 'patients',
    content: 'Voir details',
    // minWidth: 170,
    align: 'right',
  }
];

