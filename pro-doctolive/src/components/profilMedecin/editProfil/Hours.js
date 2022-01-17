import React, {useState, useEffect} from 'react'

import {Row, Col, Collapse, Alert} from 'react-bootstrap'

import  SubmitButton  from 'components/CustomButtons/SubmitButton.js';
import  Button  from 'components/CustomButtons/Button.js';

import moment from 'moment'
import MomentUtils from "@date-io/moment";

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';


import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import Divider from '@material-ui/core/Divider';

import {BsTrashFill, BsPencilSquare} from 'react-icons/bs'
import CheckboxInput from 'components/Inputs/checkbox'

import {
    TimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import { StoreHoraire} from 'services/medecin/MedecinService'
import { useAuth } from "context/Auth";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import OutlinedInput from '@material-ui/core/OutlinedInput';


import NumberFormat from 'react-number-format';

import Axios from 'axios'
import Config from 'Config'

export default function About (props)  {
    const {UserData} = useAuth();
    const [etatRequest, setEtatRequest] = useState({success: false, sending:false, donneIncorrect: false});
    const [horaires, setHoraires] = useState(props.horaire);
    const [newHoraire, setNewHoraires] = useState([]);

    useEffect(() => {
        setHoraires(props.horaire)
        return () => {
            
        }
    }, [props.horaire])

    const handleSubmit = (e) =>{
        e.preventDefault();

        setEtatRequest({sending: true,success: false, donneIncorrect: false});

        StoreHoraire(newHoraire, UserData.token)
        .then(res => {
            if(!res.data.error){
                setEtatRequest({sending: false,success: true});
                setNewHoraires([])
                setHoraires(old =>[...old, ...res.data.horairePerssistence])
            }else {
                setEtatRequest({sending: false,success: false, donneIncorrect: true});
            }
            
        })

        .catch(error =>{ 
            setEtatRequest({sending: false,success: false, donneIncorrect: true});

            if(error.response){
                if(error.response.data.error){
                    
                }
            }
        })
    }
    const setHoraire = (dayHoraire, index) => {
        setHoraires((exp) => {
            let cloneExp = [...exp];
            cloneExp[index] = dayHoraire;
            return cloneExp
        })
    }
    const setNewHoraire = (dayHoraire, index) => {
        setNewHoraires((exp) => {
            let cloneExp = [...exp];
            cloneExp[index] = dayHoraire;
            return cloneExp
        })
    }


    const addHour = () => {
        setNewHoraires((exp) =>  [...exp, {jour: "", debut_matin: "08:00" , fin_matin: "12:00", debut_soir: "14:00", fin_soir: "18:00", is_matin: true, is_soir: true}])
    }
    const deleteHour = (index) => {
        let cloneHours = [...horaires];
        cloneHours.splice(index, 1);
        setHoraires(cloneHours);
    }
    return (
            <div>

                {( horaires !== null && horaires !== undefined) ?
                    (horaires.length > 0)?
                    horaires.map((hour, index) => {
                        return  (
                            <OneDay type="old" deleteHour={deleteHour} key={index} index={index} dayHoraire={hour} horaires={horaires} newHoraire={newHoraire} setHoraire={setHoraire} {...props} /> 
                        )
                    })
                    : <div> Vous n'avez aucun temps de disponibilité </div>
                    : null
                }
              
                <form onSubmit={handleSubmit} className="w-100" autoComplete="off">   
                    {( newHoraire !== null && newHoraire !== undefined) ?
                        (newHoraire.length > 0)?
                        newHoraire.map((hour, index) => {
                            return  (
                                <OneDay type="new" key={index} index={index} dayHoraire={hour} horaires={horaires} newHoraire={newHoraire} setHoraire={setNewHoraire} {...props} /> 
                            )
                        })
                        : null
                        : null
                    }
                    <Row className="justify-content-center">
                        <Collapse in={ etatRequest.donneIncorecte}>
                            <div className="mt-3">
                                <Alert  variant="danger">
                                    les information sont incorrecte
                                </Alert>
                            </div>
                        </Collapse>
                    </Row>
                    <Row className="justify-content-center">
                        <Collapse in={etatRequest.success}>
                            <div className="mt-3">
                                <Alert  variant="success">
                                    Votre disponibilité est mis à jours avec succées
                                </Alert>
                            </div>
                        </Collapse>
                    </Row>
                    {( horaires !== null && horaires !== undefined) ?
                        horaires.length < 7 ?
                            <Row className="align-items-center justify-content-around mt-4 ">
                            <Tooltip onClick={addHour} title="Add" aria-label="add">
                                <Fab color="primary" >
                                    <AddIcon />
                                </Fab>
                            </Tooltip>
                        </Row>
                        :null
                        :null
                    }
                    <Row className="align-items-center justify-content-around mt-4 ">
                        <SubmitButton disabled={newHoraire.length === 0} sending={etatRequest.sending} successRequest={etatRequest.success} type="submit" color="primary"> Ajouter les nouveau horaires </SubmitButton>
                    </Row>
                </form>
            </div>
    );
}
const dayToSelect = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

function OneDay(props){

    
    const [etatRequest, setEtatRequest] = useState({success: false, sending:false, donneIncorrect: false});
    const [confirmDelete, setConfirmDelete] = useState(false);
    const {UserData} = useAuth();

    const [values, setValues] = React.useState({
        textmask: '(100) 000-0000',
        numberformat: '15',
      });

    const handleChange = (value, name) => {
        props.setHoraire({...props.dayHoraire, [name] : value}, props.index) 
    }

    const handlecheck =(event) => {
        props.setHoraire({...props.dayHoraire, [event.target.name] : event.target.checked}, props.index) 
    }
    const deleteHour = () => {
        Axios.delete(`${Config.BACKEND_URL}/medecin/hour/${props.dayHoraire.id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${UserData.token}`,
            }
        })
        .then(response =>{
            if(response){
            if (!response.data.error) { 
                setConfirmDelete(false)
                props.deleteHour(props.index)
                
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
    const updateHour = () => {
        setEtatRequest({sending: true,success: false, donneIncorrect: false});

        Axios.put(`${Config.BACKEND_URL}/medecin/hour/${props.dayHoraire.id}`, props.dayHoraire,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${UserData.token}`,
            }
        })
        .then(response =>{
            if(response){

            if (!response.data.error) { 
                setEtatRequest({sending: false,success: true, donneIncorrect: false});
            }else{
                // setErrors( (errors) => {return {events: true}})
            }
            }
        })
        .catch(err=> {
            setEtatRequest({sending: false,success: false, donneIncorrect: true});

            if(err.response){
            if(err.response.status === 500){
    
            }
            }
        });
        
    }

    return(
        <div>
            <Row className="working-time lundi mt-4"> 
                <label className="working-time-label">  {props.dayHoraire.jour} </label>
                <div className="hour-actions"> 
                    <Row>
                        <Button
                            justIcon={true}
                            simple={true}
                            color="transparent"
                            onClick={()=> setConfirmDelete(true)}
                        >
                            <BsTrashFill color="red" />
                        </Button>
                    </Row>

                </div>
                <Col>
                    <Row>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <Col xs="12" md="12" lg="12">
                                <Row className="mb-5">
                                        <FormControl variant="outlined" className="w-50" >
                                            <InputLabel id="demo-simple-select-label">Le jours de la semaine</InputLabel>
                                            <Select
                                                name="jour"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Le jours de la semaine"
                                                value={props.dayHoraire.jour}
                                                onChange={ (e) => handleChange( e.target.value, 'jour')}
                                            >
                                                {dayToSelect.map((day, index) => {
                                                    let existingDay = props.horaires.findIndex(h => h.jour === day);
                                                    let existingNewDay = props.newHoraire.findIndex(h => h.jour === day);
                                                    if((existingDay === -1 && existingNewDay === -1) || day === props.dayHoraire.jour ){
                                                        return(<MenuItem key={index} value={day}> {day} </MenuItem>)
                                                    }
                                                    return null
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Row>
                            </Col>
                            <Col>
                                
                                <Row className="">
                                    <label>Les heures de présence sur la plateforme matin</label>
                                </Row>
                                <Row>
                                    <CheckboxInput name="is_matin" etatChecked={props.dayHoraire.is_matin? true: false} changed={handlecheck} labelCheckbox="Je travaille le matin" />
                                </Row>
                                
                                <Row className="justify-content-around">
                                    <TimePicker
                                        maxDate={moment.utc("2100-01-01 21:30:00")}
                                        value={moment(props.dayHoraire.debut_matin, 'HH:mm')}
                                        label="Heure de début"
                                        ampm={false}
                                        inputVariant="outlined"
                                        onChange={ (time) => handleChange(time.format('HH:mm'), "debut_matin")}
                                        autoOk
                                    />
                                    <TimePicker
                                        value={moment(props.dayHoraire.fin_matin, 'HH:mm')}
                                        label="Heure de fin"
                                        ampm={false}
                                        inputVariant="outlined"
                                        onChange={(time) => { handleChange(time.format('HH:mm') , "fin_matin")} }
                                        autoOk
                                    />
                                </Row>
                            </Col>
                            <Divider orientation="vertical" flexItem />
                            <Col>
                                
                                <Row className="pl-3">
                                    <label>Les heures de présence dans la plateforme à l'après-midi</label>
                                </Row>
                                <Row>
                                    <CheckboxInput name="is_soir" etatChecked={props.dayHoraire.is_soir ? true: false} changed={handlecheck} labelCheckbox="Je travaille l'après-midi" />
                                </Row>
                                <Row className="justify-content-around">
                                    <TimePicker
                                        value={moment(props.dayHoraire.debut_soir, 'HH:mm')}
                                        label="Heure de début"
                                        ampm={false}
                                        inputVariant="outlined"
                                        onChange={(time) => handleChange(time.format('HH:mm'), "debut_soir" )}
                                        autoOk
                                    />
                                    <TimePicker
                                        value={moment(props.dayHoraire.fin_soir, 'HH:mm')}
                                        label="Heure de fin"
                                        ampm={false}
                                        inputVariant="outlined"
                                        onChange={(time) => handleChange(time.format('HH:mm'), "fin_soir")}
                                        autoOk
                                    />
                                </Row>
                            </Col>
                        </MuiPickersUtilsProvider>
                    </Row>
                   
                    <Row className="mt-5">
                        <Col>
                            
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="formatted-text-mask-input"> Durrée moyenne d'une consultation </InputLabel>
                            <OutlinedInput
                                label="Durrée moyenne d'une consultation"
                                value={props.dayHoraire.duree}
                                onChange={handleChange}
                                name="duree"
                                id="formatted-numberformat-input"
                                inputComponent={NumberFormatCustom}
                            />
                        </FormControl>

                     
                        </Col>
                    </Row>
                    {
                        props.type === "old" ?
                        <Row className="align-items-center justify-content-around mt-4 ">
                            <Collapse in={etatRequest.success}>
                                <div className="mt-3">
                                    <Alert  variant="success">
                                        Votre disponibilité est mis à jours avec succées
                                    </Alert>
                                </div>
                            </Collapse>
                        </Row>
                        : null
                    }
                    {
                        props.type === "old" ?
                        <Row className="align-items-center justify-content-around mt-4 ">
                            <SubmitButton type="button" onClick={updateHour} color="primary"> Enregistrer les modification de {props.dayHoraire.jour} </SubmitButton>
                        </Row>
                        : null
                    }
                </Col>
            </Row>
            <Dialog open={confirmDelete} onClose={() => setConfirmDelete(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> Confirmation de supression </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Vous êtes sur de vouloir supprimer les hpraires lié au {props.dayHoraire.jour}
          </DialogContentText>
         
        
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDelete(false)} color="success">
            Annuler
          </Button>
          <Button onClick={deleteHour} color="danger">
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}



function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange(values.value, "duree");
        }}
        thousandSeparator
        isNumericString
        suffix=" min "
      />
    );
  }