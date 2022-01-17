import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import {Stepper, Step, StepLabel, StepConnector, Collapse} from '@material-ui/core';

import {MdCheck} from 'react-icons/md'

import  Button  from 'components/CustomButtons/Button.js';

// core components
import GridItem from "components/Grid/GridItem.js";

import { useAuth } from "context/Auth";

import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import StepOne from './StepOne'
// import StepTwo from './StepTwo2'
import Confirmation from './Confirmation'

import stepperStyle from 'assets/jss/components/stepperStyle';

import { addElement } from 'services/Medecins/MedecinsService'

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
  return ['Informations general', 'Activation du compte', "Prêt à aller"];
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
      return <Confirmation addedElement={props.addedElement} confirmedUser= {props.confirmedUser} closeAdd={props.closeAdd} />;
    case 2:
      return <DetailsAccount medecinAccount={props.medecinAccount} />;
    default:
      return 'Unknown step';
  }
}

function DetailsAccount (props){
  return(
    <div>
        <div style={{display:"inline-block"}} >
          <h3> Le compte du médecin à bien était valider.  </h3>
          <p> Ce médecin à reçus par email les information nécessaire pour accéder à son compte </p>
        </div>
     
    </div>

  )
}


export default function FormAdd(props) {
    const {UserData} = useAuth();

    const [activeStep, setActiveStep] = useState(0);
    const [nextStepError, setNextStepError] = useState(false);
    const [saveStepError, setSaveStepError] = useState(false);
    const [data, setData] = useState( !props.data? {phone: "", city:{}, prenom:"",  nom:"", sexe:"", email: ""}: props.data);
    const [errors, setErrors] = useState({});
    const [medecinAccount, setAccount] = useState({});
    const [responseErrors, setResponseErrors] = useState({});
    const [addedElement, setAddedElement] = useState({});

    const steps = getSteps();
  
    const handleNext = async () => {
        if(activeStep === 0){
            let isFirstStepValid = CheckFirstStepData(data);
            if(isFirstStepValid){
              addElement(data, UserData.token) 
              .then(result => {
                console.log(result)
                  if (!result.data.error) {
                      setSaveStepError(false);
                      setActiveStep(activeStep => activeStep + 1);
                      setAddedElement(result.data.addedMedecin);
                      props.setNewMedecin(result.data.addedMedecin);
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
                     
                    }else {
                      /* *******  handle other errors  *********** */
                    }
                    
                  }
                //   setIsError(true);
                }
                else{

                }
              
              });
            }else{
                setNextStepError(true)
            }
        }else if(activeStep === 1){
           
        }else if(activeStep === 2){
          props.setAddElements(false);
        }else {
         
        }

    };

  const CheckFirstStepData = (data) => {
    if(!data.nom || !data.prenom || !data.email || !data.city || !data.phone){
        return false
    }else{
        if(errors.emailError || errors.phoneError || errors.nameError || errors.villeError){
            return false
        }
        return true;
    }
  }

  const handleBack = () => {
    if(activeStep === steps.length - 1){
      props.setAddElements(false)
    }else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const confirmedUser = (data) => {
    setAccount(data);
    setActiveStep(activeStep => activeStep + 1);
  }


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
            <form autoComplete="block">
                <GetStepContent 
                  setErrors={setErrors} 
                  activeStep={activeStep} 
                  setData={setData} 
                  addedElement={addedElement} 
                  data={data} 
                  confirmedUser={confirmedUser}
                  responseErrors={responseErrors}
                  nextStepError={nextStepError}
                  saveStepError={saveStepError}
                  closeAdd={ () => props.setAddElements(false)}
                  medecinAccount={medecinAccount}
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
              { (activeStep === 1 || activeStep === steps.length - 1) ?
                  <Button onClick={handleBack} >
                    Quitter
                  </Button>
                  : null
              }
              { (activeStep > 1) ? 
                null : 
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Enregistrer
                </Button>
              }
            </div>

          </div>
        
    </div>
  );
}
