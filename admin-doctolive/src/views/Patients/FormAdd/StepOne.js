import React, {useState, useEffect} from 'react';


import { TextField, Collapse } from '@material-ui/core';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import PhoneInput from 'react-phone-input-2'
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import {MdVisibility, MdVisibilityOff} from 'react-icons/md'

import 'react-phone-input-2/lib/material.css'

import fr from 'react-phone-input-2/lang/es.json'
import 'react-phone-input-2/lib/material.css'

export default function StepOne (props){

    const [email, setEmail] = useState(props.data.email);
    const [nom, setNom] = useState(props.data.nom);
    const [prenom, setPrenom] = useState(props.data.prenom);
    const [phone, setPhone] = useState(props.data.phone);
    const [mount, setMount] = useState(true);
   
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    useEffect(() => {
        if(props.responseErrors.nom){
            setNameError(true);
        }
        if(props.responseErrors.prenom){
            setNameError(true);
        }
        if(props.responseErrors.email){
            setEmailError(true);
        }
        if(props.responseErrors.phone){
            setPhoneError(true);
        }

        return () => {
            
        }
    }, [props.responseErrors]);

    useEffect(() => {
        if(!mount){
            validateField('email')
            validateField('nom')
            validateField('prenom')
            validateField('phone')
        }else{
            setMount(false)
        }
        
       

        return () => {
            
        }
    }, [ props.nextStepError ]);

    const validateField = (field) => {
        switch (field) {
            
            case "email":
                let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let emailErr = ! re.test(String(email).toLowerCase());
                props.setData(data => { return {...data, email}});
                setEmailError(emailErr);
                props.setErrors(errors =>  {return {...errors, emailError: emailErr}});

                break;
            case "nom":
                setNameError(nom.length < 3);
                props.setData(data => { return {...data, nom}});
                props.setErrors(errors =>  {return {...errors, fullNameError: nom.length < 3}});
                break;
         
            case "prenom":
                setNameError(prenom.length < 3);
                props.setData(data => { return {...data, prenom}});
                props.setErrors(errors =>  {return {...errors, fullNameError: prenom.length < 3}});
                break;
            
            case "phone":
                    props.setData(data => { return {...data, phone}});
                    setPhoneError(phone.length < 10);
                    props.setErrors(errors =>  {return {...errors, phoneError: phone.length < 10}});

                break;
            default:
                break;
        }
    }

    const handlePhone = (value, countrie,  e, formattedValue) => {
        setPhone(formattedValue );
    }

    return(
          <GridContainer justify="space-around"  alignItems="center" >   
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <TextField
                    value= {prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    onBlur={ (e) => validateField(e.target.name)} 
                    error={nameError}
                    helperText={nameError ? "le nom est obligatoire et doit contenir 3 caractére minimum" : ""}
                    margin="normal"
                    required
                    fullWidth
                    id="prenom_input"
                    label="Prenom"
                    name="prenom"
                    autoComplete="off"
                />
                <Collapse in={props.responseErrors.fullName}>
                    <GridItem xs={12} sm={12} md={12}>
                        <SnackbarContent
                            message={props.responseErrors.fullName === "Invalid value" ? "Le nom est obligatoire et doit contenir 3 caractére minimum" : "Ce nom n'est pas accepter"}
                            close
                            color="danger"
                        />
                    </GridItem>
                </Collapse>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <TextField
                    value= {nom}
                    onChange={(e) => setNom(e.target.value)}
                    onBlur={ (e) => validateField(e.target.name)} 
                    error={nameError}
                    helperText={nameError ? "le nom est obligatoire et doit contenir 3 caractére minimum" : ""}
                    margin="normal"
                    required
                    fullWidth
                    id="nom_input"
                    label="Nom"
                    name="nom"
                    autoComplete="off"
                />
                <Collapse in={props.responseErrors.fullName}>
                    <GridItem xs={12} sm={12} md={12}>
                        <SnackbarContent
                            message={props.responseErrors.fullName === "Invalid value" ? "Le nom est obligatoire et doit contenir 3 caractére minimum" : "Ce nom n'est pas accepter"}
                            close
                            color="danger"
                        />
                    </GridItem>
                </Collapse>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <TextField
                    value= {email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={ (e) => validateField(e.target.name)} 
                    error={emailError}
                    helperText={emailError ? "l'adresse email est doit être au format standard" : ""}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Adresse email"
                    name="email"
                    autoComplete="new-password"
                />
                 <Collapse in={props.responseErrors.email}>
                    <GridItem xs={12} sm={12} md={12}>
                        <SnackbarContent
                            message={props.responseErrors.email === "existe" ? "cette adresse email est déjà utiliser" : "Cette adresse email n'est pas accepter"}
                            close
                            color="danger"
                            />
                    </GridItem>
                </Collapse>
            </GridItem>
           
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <PhoneInput
                    onFocus= {(e) => e.target.parentElement.classList.add("Mui-focused")}
                    onBlur={(e) => {
                        e.target.parentElement.classList.remove("Mui-focused");
                        validateField('phone')
                    }}
                    inputStyle={{outline: "none", border: 0, boxShadow:"none"}}
                    containerClass={"MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl" + (phoneError ? " Mui-error" : "")}
                    inputClass= "MuiInputBase-input MuiInput-input"
                    placeholder="Entrer le numéro de téléphone"
                    value={phone}
                    specialLabel="Numéro de téléphone"
                    alwaysDefaultMask={true}
                    containerStyle={{zIndex: 9}}
                    autocompleteSearch={true}
                    required={true}
                    isValid={phoneError}
                    country="ma"
                    localization={fr}
                    searchNotFound	= "Aucune résultat trouvé"
                    onChange={handlePhone}
                    inputComponent={TextField}
                />
                { phoneError ?
                    <p className="MuiFormHelperText-root Mui-error MuiFormHelperText-filled Mui-required" id="phone-helper-text"> le numéro de téléphone n'est pas valide </p>
                    : null
                }
                
                <Collapse in={props.responseErrors.phone}>
                    <GridItem xs={12} sm={12} md={12}>
                        <SnackbarContent
                            message={props.responseErrors.phone === "existe" ? "Ce numéro de téléphone est déjà utiliser" : "Ce numéro de téléphon n'est pas accepter"}
                            close
                            color="danger"
                        />
                    </GridItem>
                </Collapse>
            </GridItem>
          </GridContainer>
      
    )
}
