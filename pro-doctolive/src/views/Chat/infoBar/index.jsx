import React from 'react';

import {BsCircleFill} from 'react-icons/bs';

import {FiVideo} from 'react-icons/fi'


import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from 'components/CustomButtons/Button';
import Divider from '@material-ui/core/Divider';

import patientAvatar from 'assets/img/patient.png'

import {Row, Col} from 'react-bootstrap'


const useStyles = makeStyles((theme) => ({
  root:{
    width : "100%"
  },
  accordion:{
   backgroundColor: "#008ea2",
   borderRadius: "4px 4px 0 0",
   boxShadow: "none"
  },
  accordionContent:{
    "& .MuiAccordionSummary-content": {
      margin: 0
    }
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(18),
    color: "#fff",
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
    display: "flex",
    alignItems: "center",
  },
  column2: {
    flexBasis: '50%',
    padding: 10
  },
  columnend:{
    justifyContent: "flex-end"
  },
  columncenter:{
    justifyContent: "center"
  },
  title:{
    fontSize: theme.typography.pxToRem(18),
    color: "#fff",
  },
  label:{
    fontSize: theme.typography.pxToRem(16),
    color: "#fff",
    margin: 0
  },
  paragraph:{
    fontSize: theme.typography.pxToRem(14),
    color: "#eee",
    marginLeft: 15
  }
}));

const InfoBar = ({ patient, onConsuting, teleconsultation, socket, startCallVideo}) => {

  const classes = useStyles();

  const handleVideoCall= (e) => {
    e.stopPropagation();
    startCallVideo();
  }

  if(!patient){
    return null
  }

  return (
    <div className={classes.root}>
      <Accordion
       className={classes.accordion} square={true}
       >
        <AccordionSummary
          className={classes.accordionContent}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            
              <div className="leftInnerContainer">
                  <BsCircleFill className="circle_online" />
                    <div className="profile">
                      <img className="profile-img" src={patient.image ? patient.image : patientAvatar}  alt="" />
                  </div>
                  <Typography className={classes.secondaryHeading}>{patient.nom ? patient.nom + " " + patient.prenom : "Aucun nom à afficher"}</Typography>
              </div>
          </div>
          <div className={clsx(classes.column, classes.columncenter)}>
            {/* <Typography className={classes.secondaryHeading}>{patient.nom ? patient.nom + " " + patient.prenom : "Aucun nom à afficher"}</Typography> */}
          </div>
          <div className={clsx(classes.column, classes.columnend)}>
            { onConsuting ?
                  <div className="video-call m-0">
                    <Button
                      onClick={handleVideoCall}
                      className="action m-0"
                      type="button"
                      color= "success"
                    >
                      <FiVideo size="1.5rem" />
                    </Button>
                    
                  </div> 
              : null
            }
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column2} >
              <Row className="m-0">
                <h4 className={classes.title}> Information du patient </h4>
              </Row>
              <Row className="align-items-center m-0">
                  <label className={classes.label}> Téléphone: </label>
                  <p className={classes.paragraph}> { teleconsultation.patient ?  teleconsultation.patient.phone : " "}</p>
              </Row>
              <Row className="align-items-center m-0">
                  <label className={classes.label}> Email: </label>
                  <p className={classes.paragraph}> { teleconsultation.patient ?  teleconsultation.patient.email : " "}</p>
              </Row>
          </div>
          <div className={classes.column2}>
              <Row className="m-0">
                <h4 className={classes.title}> Information du rendez-vous </h4>
              </Row>
              <Row className="align-items-center m-0">
                  <label className={classes.label}> Titre: </label>
                  <p className={classes.paragraph}> { teleconsultation.title ?  teleconsultation.title : "Aucun titre mentionnée"} </p>
              </Row>
              <Row className="align-items-center m-0">
                <label className={classes.label}> Description: </label>
                <p className={classes.paragraph}> { teleconsultation.description ?  teleconsultation.description : "Aucune déscription mentionnée"} </p>
              </Row>
              <Row className="align-items-center m-0">
                <label className={classes.label}> Type de consultation: </label>
                <p className={classes.paragraph}> { teleconsultation.tarif ?  teleconsultation.tarif.name : "Aucune catégorie mentionnée"} </p>
              </Row>
          </div>
          {/* <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#secondary-heading-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div> */}
        </AccordionDetails>
        {/* <Divider /> */}
        {/* <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </AccordionActions> */}
      </Accordion>
    </div>
  );
  }

export default InfoBar;

