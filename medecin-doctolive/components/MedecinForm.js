
import React, {Component} from "react";

import { Col,Row, Alert, Collapse } from 'react-bootstrap';

// @material-ui/icons
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import RadioGroup from '@material-ui/core/RadioGroup';
// import TextField from '@material-ui/core/RadioGroup';
import {MdVisibility, MdVisibilityOff} from 'react-icons/md'

// services
// import {getCity, signupMedecin} from 'services/medecin/MedecinService'
// core components
import Config from "../config"

import PhoneField from './Inputs/PhoneNumber/index';
import TextField from './Inputs/InputIcone/index';
import Button  from './CustomButtons/Button';


import { FaMailBulk, FaPhone, FaUserMd } from 'react-icons/fa';

export default  class ElementForm extends Component  {

    constructor(props){
        super(props);

        this.state={
            nom: "",
            prenom:"",
            phone:"",
            email: "",
            password:"",
            password_confirmation: "",
            villes:[],
            cityId: "",
	        sexe:"",
            fieldValidationErrors:{
                nomError:false,
                prenomError:false,
                numeroError:false,
                emailError:false,
                
            },
            sending:false,
            success:false
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({sending: true});

        let data = this.traitementDonnee();
        console.log(Config.api_path)
        const link = Config.api_path + "/medecin/signup"
        console.log(link)
        fetch(link,{
            method:"post",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({...data})
        })
        .then(
            (r) => r.json()
            .then(res => {

                if(!res.error){
                    this.setState({sending: false, success:true, donneIncorecte: false});
                    
                    
                }else {
                    this.setState({sending: false, success:false, donneIncorecte:true})
                    if(res.validator){

                    }else{

                    }
                }
           
            })
            ).catch(error =>{ 
                this.setState({sending: false, success:false, donneIncorecte:true})
            })
    }

    traitementDonnee(){
        let formData={};
        
        formData.nom=this.state.nom
        formData.phone=this.state.phone
        formData.email=this.state.email
        formData.prenom=this.state.prenom
        formData.cityId=this.state.cityId
	    formData.sexe = this.state.sexe
	    formData.password = this.state.password
        return formData;
    }
 

    handleChange = ({target : {value, name}}) => {
        
        if(name === "phone"){
            value = value
            // Remove all non-digits, turn initial 33 into nothing
            .replace(/[^\d+]/g, '')
            .replace(/^0/, '+212')
            // Stick to first 10, ignore later digits
            .slice(0, 13)
            // Add a space after any 2-digit group followed by more digits
            .replace(/(\d{3})(?=\d)/g, '$1 ')
        }
        this.setState({[name]: value}) ;
    }

    componentDidMount(){
        fetch(`${Config.api_path}/city`, {
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
    
            },
        }).then ((res) => {
            res.json().then (response => {
                console.log(response)
                if(response.cities){
                    this.setState({villes: response.cities});
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
       
    
    }
    render(){
        let {villes, fieldValidationErrors, nom, prenom, phone, email, donneIncorecte, cityId, success,  sexe,sending} = this.state

    return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
            
                <Row>
                        <Col xs="12" md="6" className="mt-3"> 
                            <TextField
                                autoFocus={true}
                                error={fieldValidationErrors.nomError}
                                placeholder="Votre nom de famille"
                                label="Nom"
                                Icone={FaUserMd}
                                required={true}
                                variant="outlined"
                                name="nom"
                                // InputLabelProps={{style:{right: 0, left:"auto"}}}
                                onBlur={this.validateField} 
                                value={nom}
                                onChange={this.handleChange} 
                            />
                             
                        </Col>
                        <Col xs="12" md="6" className="mt-3"> 
                            <TextField
                                placeholder="Votre prenom"
                                variant="outlined"
                                required={true}
                                error={fieldValidationErrors.prenomError}
                                label="Prenom"
                                Icone={FaUserMd}
                                // InputLabelProps={{style:{right: 0, left:"auto"}}}
                                onBlur={this.validateField} 
                                name="prenom"
                                value={prenom}
                                onChange={this.handleChange} 
                            />
                          
                        </Col>

                        <Col xs="12" md="6" className="mt-3">
                            <PhoneField 
                                label="Numéro de téléphone" 
                                Icone={FaPhone}
                                name="phone"
                                required={true}
                                variant="outlined"
                                error={fieldValidationErrors.numeroError}
                                // InputLabelProps={{style:{right: 0, left:"auto"}}}
                                onBlur={this.validateField}
                                value={phone}
                                placeholder="+212 600 000 000"
                                onChange={this.handleChange} 
                            />
                            {/* <Row className="my-3">
                                <Collapse in={fieldValidationErrors.numeroError}>
                                    <div>
                                        <Alert  variant="danger">
                                             
                                        </Alert>
                                    </div>
                                </Collapse>
                            </Row> */}
                        </Col>
                        <Col xs="12" md="6" className="mt-3">
                            <TextField 
                                label="Adresse email"
                                Icone={FaMailBulk}
                                placeholder="Adresse email"
                                variant="outlined"
                                name="email"
                                error={fieldValidationErrors.emailError}
                                required={true}
                                // InputLabelProps={{style:{right: 0, left:"auto"}}}
                                onBlur={this.validateField} 
                                value={email}
                                onChange={this.handleChange} 
                            />   
                           
                        </Col> 
                        <Col xs="12" className="mt-3"> 
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="standard-adornment-password"> Mot de passe </InputLabel>
                                <OutlinedInput
                                    id="standard-adornment-password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    required={true}
                                    label="Mot de passe"
                                    name="password"
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={ () => this.setState(old =>{return  {...old, showPassword: !this.state.showPassword}})} 
                                        >
                                        {this.state.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                                </FormControl>
                        </Col>
                        <Col xs="12" md="12" className="mt-3">
                          
                             <FormControl variant="outlined" fullWidth >
                                <InputLabel >Ville</InputLabel>
                                <Select
                                    value={cityId}
                                    onChange={this.handleChange}
                                    label="Ville"
                                    name="cityId"
                                    required={true}
                                >
                                {villes.map(((ville, index) =>
                                            <MenuItem key={index} value={ville.id}>{ville.name}</MenuItem>
                                    ))
                                }
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs="12" md="12" className="my-3">
                            <FormControl component="div">
                                <FormLabel component="legend">Sexe</FormLabel>
                                <RadioGroup className="flex-row" aria-label="Sexe" name="sexe" value={sexe} onClick={(event)=>{this.setState({sexe: event.target.value})}}>
                                    <FormControlLabel value={'homme'} control={<Radio />} label="Homme" />
                                    <FormControlLabel value={'femme'} control={<Radio />} label="Femme" />
                                </RadioGroup>
                            </FormControl>
                        </Col>
                </Row>
                <Row>
                    <Collapse in={donneIncorecte}>
                        <div>
                            <Alert  variant="danger">
                                les information sont incorrecte
                            </Alert>
                        </div>
                    </Collapse>
                </Row>
                <Row>
                    <Collapse in={success}>
                        <div >
                            <Alert  variant="success">
                                Demande envoyer avec succés
                            </Alert>
                        </div>
                    </Collapse>
                </Row>
                <Row className="align-items-center justify-content-around mt-4 ">
                    <Button type="submit" color="primary"> Enregistrer </Button>
                </Row>
            </form>
    );

}
}
