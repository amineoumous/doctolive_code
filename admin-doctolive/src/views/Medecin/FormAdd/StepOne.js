import React, {useState, useEffect} from 'react';


import { TextField, Collapse } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import fr from 'react-phone-input-2/lang/fr.json'

import { getCity } from 'services/Ville/VilleService'

export default function StepOne (props){

    const [mount, setMount] = useState(true);

    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [villeError, setVilleError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [villes, setVilles] = useState([ ]);


    useEffect(() => {

        getCity()
        .then((response) => {

            if(!response.data.error){
                if(response.data.cities !== undefined){
                    setVilles(response.data.cities)
                }
            }
        })
        .catch(err => {
            // console.log(err.response);
        });
        
        return () => {
            
        }
    }, [])

    useEffect(() => {
        if(props.responseErrors.name){
            setNameError(true);
        }
        if(props.responseErrors.email){
            setEmailError(true);
        }
        if(props.responseErrors.city){
            setVilleError(true);
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
            validateField('name')
            validateField('city')
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
                let emailErr = ! re.test(String(props.data.email).toLowerCase());
                // props.setData(data => { return {...data, email}});
                setEmailError(emailErr);
                props.setErrors(errors =>  {return {...errors, emailError: emailErr}});

                break;
            case "prenom":
                if(!props.data.prenom){
                    setNameError(true);
                    // props.setData(data => { return {...data, name}});
                    props.setErrors(errors =>  {return {...errors, nameError: true}});
                }else {
                    setNameError(props.data.prenom.length < 3);
                    // props.setData(data => { return {...data, name}});
                    props.setErrors(errors =>  {return {...errors, nameError: props.data.prenom.length < 3}});
                }
                break;
            case "nom":
                if(!props.data.nom){
                    setNameError(true);
                    // props.setData(data => { return {...data, name}});
                    props.setErrors(errors =>  {return {...errors, nameError: true}});
                }else {
                    setNameError(props.data.nom.length < 3);
                    // props.setData(data => { return {...data, name}});
                    props.setErrors(errors =>  {return {...errors, nameError: props.data.nom.length < 3}});
                }
                break;
            case "city":
                // props.setData(data => { return {...data, city}});
                setVilleError(!props.data.city.id);
                props.setErrors(errors =>  {return {...errors, villeError: !props.data.city.id}});

                break;
            case "phone":
                    // props.setData(data => { return {...data, phone}});
                    setPhoneError(props.data.phone.length < 10);
                    props.setErrors(errors =>  {return {...errors, phoneError: props.data.phone.length < 10}});

                break;
            default:
                break;
        }
    }

    const handleVille =( e, v ) => {
        props.setData(data => { return {...data, city : v}});
    }

    const handlePhone = (value, countrie,  e, formattedValue) => {
        props.setData(data => { return {...data, phone : formattedValue}});
    }

    const handleChange = (e) => {
        let target = e.target;
        props.setData(data => { return {...data, [target.name] : target.value}});
    }

    return(
          <GridContainer justify="space-around"  alignItems="center" >   
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <TextField
                    value= {props.data.nom}
                    onChange={handleChange}
                    onBlur={ (e) => validateField(e.target.name)} 
                    error={nameError}
                    helperText={nameError ? "le nom est obligatoire et doit contenir 3 caractére minimum" : ""}
                    margin="normal"
                    required
                    fullWidth
                    id="nom_input"
                    label="Nom du medecin"
                    name="nom"
                    autoComplete="block"
                />
                <Collapse in={props.responseErrors.name}>
                    <GridItem xs={12} sm={12} md={12}>
                        <SnackbarContent
                            message={props.responseErrors.name === "Invalid value" ? "Le nom est obligatoire et doit contenir 3 caractére minimum" : "Ce nom n'est pas accepter"}
                            close
                            color="danger"
                        />
                    </GridItem>
                </Collapse>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <TextField
                    value= {props.data.prenom}
                    onChange={handleChange}
                    onBlur={ (e) => validateField(e.target.name)} 
                    error={nameError}
                    helperText={nameError ? "le nom est obligatoire et doit contenir 3 caractére minimum" : ""}
                    margin="normal"
                    required
                    fullWidth
                    id="prenom_input"
                    label="Prenom du medecin"
                    name="prenom"
                    autoComplete="block"
                />
                <Collapse in={props.responseErrors.name}>
                    <GridItem xs={12} sm={12} md={12}>
                        <SnackbarContent
                            message={props.responseErrors.name === "Invalid value" ? "Le prenom est obligatoire et doit contenir 3 caractére minimum" : "Ce prenom n'est pas accepter"}
                            close
                            color="danger"
                        />
                    </GridItem>
                </Collapse>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <TextField
                    value= {props.data.email}
                    onChange={handleChange}
                    onBlur={ (e) => validateField(e.target.name)} 
                    error={emailError}
                    helperText={emailError ? "L'adresse email est doit être au format standard" : ""}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Adresse mail"
                    name="email"
                    autoComplete="block"
                />
                 <Collapse in={props.responseErrors.email}>
                    <GridItem xs={12} sm={12} md={12}>
                        <SnackbarContent
                            message={props.responseErrors.email === "existe" ? "Cette adresse email est déjà utiliser" : "Cette adresse email n'est pas accepter"}
                            close
                            color="danger"
                            />
                    </GridItem>
                </Collapse>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <Autocomplete
                    onChange={handleVille}
                    id="delvery-man-city"
                    value={props.data.city}
                    // getOptionSelected={(option) => console.log(option)}
                    name="city"
                    // options={villes.sort((a, b) => -b.country.localeCompare(a.country))}
                    options={villes}
                    // groupBy={(option) => option.country}
                    getOptionLabel={(option) => (option.name === undefined)  ? "" : option.name}
                    // loading={true}
                    loadingText="Chargement..."
                    noOptionsText="Aucune ville trouvé"
                    required
                    forcePopupIcon={true}
                    fullWidth
                    renderInput={(params) => 
                        <TextField 
                            required 
                            onBlur={(e) => validateField('city')}
                            helperText={villeError ? "la ville est obligatoire" : ""}
                            {...params} 
                            error={villeError}
                            inputProps={{ ...params.inputProps, autoComplete: "block" }}  
                            label="Ville de collaboration" 
                        />
                    }
                />
                 <Collapse in={props.responseErrors.city}>
                    <GridItem xs={12} sm={12} md={12}>
                        <SnackbarContent
                            message={props.responseErrors.city === "Invalid value" ? "Un probleme avec la ville choisit" : "Cette ville  n'est pas accepter"}
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
                    value={props.data.phone}
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
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <FormControl component="div">
                    <FormLabel component="legend">Sexe</FormLabel>
                    <RadioGroup className="flex-row" aria-label="Sexe" name="sexe" value={props.data.sexe} onClick={handleChange} >
                        <FormControlLabel value={'homme'} control={<Radio />} label="Homme" />
                        <FormControlLabel value={'femme'} control={<Radio />} label="Femme" />
                    </RadioGroup>
                </FormControl>
                
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
