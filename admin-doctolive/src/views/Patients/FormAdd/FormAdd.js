import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import {Stepper, Step, StepLabel, StepConnector, Collapse} from '@material-ui/core';

import {MdCheck} from 'react-icons/md'
import  Button  from 'components/CustomButtons/Button.js';

// core components
import GridItem from "components/Grid/GridItem.js";


import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import StepOne from './StepOne'

import stepperStyle from 'assets/jss/components/stepperStyle';

import { addElement } from 'services/Patients/PatientsService'
import { useAuth } from "context/Auth";

const QontoConnector = withStyles(stepperStyle.QontoConnector)(StepConnector);

const useQontoStepIconStyles = makeStyles(stepperStyle.useQontoStepIconStyles);

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <MdCheck className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};



function getSteps() {
  return ['Informations personnel', "Patient details"];
}

function GetStepContent(props) {

  switch (props.activeStep) {
    case 0:
        return (
          <StepOne
            setData= {props.setData} 
            setErrors={props.setErrors}
            data={props.data}
            responseErrors={props.responseErrors}
            nextStepError={props.nextStepError}
          />
        );
        case 1:
      return <DetailsAccount addedPatient={props.addedPatient} />;
    default:
      return 'Unknown step';
  }
}

function DetailsAccount (props){
  return(
  
        <div style={{display:"inline-block"}} >
          <h3> Le compte du patient à bien était valider.  </h3>
          <p> le patient à reçus par email les information nécessaire pour accéder à son compte </p>
          <label> mot de passe:  </label> <p>  {props.addedPatient.password} </p>
        </div>
   

  )
}


export default function FormAdd(props) {

    const [activeStep, setActiveStep] = useState(0);
    const [nextStepError, setNextStepError] = useState(false);
    const [saveStepError, setSaveStepError] = useState(false);
    const [data, setData] = useState( !props.data? {phone: "", nom:"", prenom:"", email: ""}: props.data);
    const [errors, setErrors] = useState({});
    // const [patientAccount, setAccount] = useState({});

    const [responseErrors, setResponseErrors] = useState({});

    const [addedPatient, setAddedPatient] = useState({})
  const steps = getSteps();
  const {UserData} = useAuth();


  const handleNext = () => {
        if(activeStep === 0){
            let isFirstStepValid = CheckFirstStepData();
            if(isFirstStepValid){
                setNextStepError(false)
                addElement(data, UserData.token)
                .then(result => {
                  if (!result.data.error) {
                      setSaveStepError(false)
                      setActiveStep(1);
                      setAddedPatient({...result.data.addedPatient, password: result.data.password })
                      props.setNewPatient(result.data.addedPatient);
                  }else{
                      setSaveStepError(true)
                  }
              })
              .catch(e => {
                if(e.response){
                  console.log(e.response)
                  if(e.response.data){
                    if(e.response.data.validator){
                      let errors = e.response.data.message;
                      let messageError= {};
                      errors.map(error => {
                        messageError[error.param] = error.msg
                      });
                      setResponseErrors( oldResErr => {return {...oldResErr, ...messageError}})
                      if(messageError.phone || messageError.city || messageError.email || messageError.fullName){
                        setActiveStep(activeStep => activeStep - 1);
                      }
                    }else {
                      /* *******  handle other errors  *********** */
                    }
                    
                  }
                //   setIsError(true);
                }
                else{
                  setNextStepError(true)
                }
              
              });

            }else{
                setNextStepError(true)
            }
        }else {
          
        }

  };

  const CheckFirstStepData = () => {
    if(!data.nom || !data.email || !data.phone){
        return false
    }else{ 
        if(errors.emailError || errors.phoneError ){
            return false
        }
        return true;
    }
  }

  
  const handleBack = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    props.setAddElements(false)
  };
console.log(activeStep)

  return (
    <div >

      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    
      <div>
 
          <div>
            <form >
                <GetStepContent 
                  setErrors={setErrors} 
                  activeStep={activeStep} 
                  setData={setData} 
                  addedPatient={addedPatient} 
                  data={data} 

                  responseErrors={responseErrors}
                  nextStepError={nextStepError}
                  saveStepError={saveStepError}
                  closeAdd={ () => props.setAddElements(false)}
                  // patientAccount={patientAccount}
                />
            </form>
            <div>
              <Collapse in={nextStepError || saveStepError}>
                <GridItem xs={12} sm={12} md={12}>
                <SnackbarContent
                  message={
                      'Les information ne sont pas encore complete'
                  }
                  close
                  color="danger"
                  onClose={() => {setNextStepError(false)}}
                  />
                </GridItem>
              </Collapse>
              
            </div>

            <div>
              { activeStep === 1 ?
                  <Button onClick={handleBack} >
                    Quitter
                  </Button>
                  : null
              }
              { (activeStep === 0) ? 
                
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Enregistrer
                </Button>
                : null 
              }
            </div>

          </div>
        
      </div>
    </div>
  );
}
