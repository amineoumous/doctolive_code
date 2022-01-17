import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import {Stepper, Step, StepLabel, StepConnector, Collapse} from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {MdCheck} from 'react-icons/md'

import  Button  from 'components/CustomButtons/Button.js';

// core components
import GridItem from "components/Grid/GridItem.js";

import { useAuth } from "context/Auth";

import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import StepOne from './../FormAdd/StepOne'

import stepperStyle from 'assets/jss/components/stepperStyle';

import { updateElement } from 'services/Medecins/MedecinsService'


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
  return ['Informations general', 'Information du magasin'];
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
    default:
      return 'Unknown step';
  }
}


export default function FormUpdate(props) {
    const {UserData} = useAuth();

    const [activeStep, setActiveStep] = useState(0);
    const [nextStepError, setNextStepError] = useState(false);
    const [saveStepError, setSaveStepError] = useState(false);
    const [data, setData] = useState( !props.data ? {phone: "", city:{}, prenom:"",  nom:"", sexe:"", email: ""}: props.data);
    const [errors, setErrors] = useState({});

    const [responseErrors, setResponseErrors] = useState({});

    const steps = getSteps();
    
    const handleNext = async () => {
        if(activeStep === 0){
            let isFirstStepValid = CheckFirstStepData();
            if(isFirstStepValid){
              updateElement(data, UserData.token)
                
              .then(result => {
                console.log(result.data)
                  if (!result.data.error) {
                      setSaveStepError(false);
                      props.setUpdatedElement(result.data.updatedMedecin)
                      // setActiveStep(activeStep => activeStep + 1);
                      // setAddedElement(result.data.addedShop);
                      // props.setNewShop(result.data.addedShop);
                  }else{
                      setSaveStepError(true)
                  }
              })
              .catch(e => {
                console.log(e.response)
                if(e.response){
                  if(e.response.data){
                    if(e.response.data.validator){
                      let errors = e.response.data.message;
                      let messageError= {};
                      console.log(errors);
                      errors.map(error => {
                        messageError[error.param] = error.msg
                      });
                      setResponseErrors( oldResErr => {return {...oldResErr, ...messageError}})
                      if(messageError.phone || messageError.city || messageError.email || messageError.name){
                        setActiveStep(activeStep => activeStep - 1);
                      }
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
            let isSecondStepValid = checkSecondStep(data);

            if(isSecondStepValid){
              

            }else{
                setSaveStepError(true)
            }
        }
        else {
         
        }

    };

  const CheckFirstStepData = () => {
    if(!data.nom || !data.email || !data.city || !data.phone){
        return false
    }else{
        if(errors.emailError || errors.phoneError || errors.nameError || errors.villeError){
            return false
        }
        return true;
    }
  }

  const checkSecondStep = (data) => {

    if( data.category === undefined || data.category === null || data.category === '' ){
        return false
    }else{ 
        // if( errors.allDayError || errors.allWeekError || errors.vehiculeError ){
        //     return false
        // }
        return true;
    }
  }
  const handleBack = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const confirmedUser = (data) => {
  //   setAccount(data);
  //   setActiveStep(activeStep => activeStep + 1);
  // }



  return (
    <div >
     
          <div>
            <form autoComplete="block">
                <GetStepContent 
                  setErrors={setErrors} 
                  activeStep={activeStep} 
                  setData={setData} 
                
                  
                  data={data} 
                
                  // confirmedUser={confirmedUser}
                  responseErrors={responseErrors}
                  nextStepError={nextStepError}
                  saveStepError={saveStepError}

                  closeAdd={ () => props.setAddElements(false)}

                  
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
                    Annuler
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
