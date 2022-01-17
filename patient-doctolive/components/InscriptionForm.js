
import React, {useState} from "react";

import { Col,Row, Alert, Collapse } from 'react-bootstrap';

import Config from './../EndPoint'
// @material-ui/icons
import InputLabel from '@material-ui/core/InputLabel';


import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import {MdVisibility, MdVisibilityOff} from 'react-icons/md'

// import TextField from 'components/Inputs/InputIcone/index';
import Button  from './CustomButtons/Button';

import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router'


import contentFR from './../contentFR'
import contentEN from './../contentEN'
import contentAR from './../contentAR'



export default function ElementForm(props){
    const router = useRouter();
    const {locale} = router;
    const content = locale === "ar" ? contentAR : locale === "en" ? contentEN : contentFR;

    const [state, setState] = useState({
                nom: "",
                prenom:"",
                phone:"",
                email: "",
                password:"",
                email_confirmation:"",
    });
    const [fieldValidationErrors, setfieldValidationErrors] = useState({
        nomError:false,
        prenomError:false,
        numeroError:false,
        emailError:false,
                    
    })
    const [response, setResponse] = useState({
        sending:false,
        success:false,   
        donneIncorecte: false                 
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setResponse(old =>  { return {...old, sending: true}});

        let data = traitementDonnee();

        fetch(`${Config.BACKEND_URL}/patient`,{
            method:"post",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({...data})
        })
        .then(
            (r) => r.json()
            .then(res => {
                console.log(res)
                if(!res.error){
                    props.setUserData(res);
                    setResponse({sending: false, success:true, donneIncorecte: false});
                    
                    
                }else {
                    if(res.validator){
                        setResponse({sending: false, success:false, donneIncorecte:false, validator: true, message: res.message})
                    }else{
                        setResponse({sending: false, success:false, donneIncorecte:true})

                    }
                }
           
            })
            ).catch(error =>{ 
                console.log(error)
                setResponse({sending: false, success:false, donneIncorecte:true})
            })
    }

    const traitementDonnee = () => {
        let formData={};
        
        formData.nom=  state.nom
        formData.phone= state.phone
        formData.email= state.email
        formData.prenom= state.prenom
        formData.password= state.password
        formData.email_confirmation= state.email_confirmation
 
        return formData;
    }
 
    const validateField = () => {

    }

    const handleChange = ({target : {value, name}}) => {
        
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
        setState(old => {return { ...old, [name]: value}}) ;
    }
        // let {password, showPassword, email_confirmation, fieldValidationErrors, nom, prenom, phone, email, donneIncorecte, success} = state
       console.log(response)
    return (
            <form onSubmit={handleSubmit} autoComplete="off">
            
                <Row>
                        <Col xs="12" md="6"> 
                            <TextField
                                error={fieldValidationErrors.nomError}
                                placeholder=""
                                label={content.new.labelNom}
                                required={false}
                                variant="outlined"
                                name="nom"
                                onBlur={validateField} 
                                value={state.nom}
                                onChange={handleChange} 
                            />
                             
                        </Col>
                        <Col xs="12" md="6" > 
                            <TextField
                                placeholder=""
                                variant="outlined"
                                required={false}
                                error={fieldValidationErrors.prenomError}
                                label={content.new.labelPrenom}
                                onBlur={validateField} 
                                name="prenom"
                                value={state.prenom}
                                onChange={handleChange} 
                            />
                          
                        </Col>

                        <Col xs={12} sm={12} className="mt-3">
                            <TextField
                                className="phone-text"
                                value={state.phone}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                type="text"
                                onBlur={validateField} 
                                error={state.phoneError}
                                helperText={state.phoneError ? content.new.phoneError : ""}
                                margin="normal"
                                required
                                fullWidth
                                id="patientPhone"
                                label={content.new.phoneLabel}
                                name="phone"
                                autoComplete="new-password"
                            />
                        </Col>

                        <Col xs="12" className="mt-3">
                            <TextField 
                                fullWidth
                                label={content.new.emailLabel}
                                placeholder="Adresse email"
                                variant="outlined"
                                name="email"
                                error={fieldValidationErrors.emailError}
                                required={true}
                                onBlur={validateField} 
                                value={state.email}
                                onChange={handleChange} 
                            />   
                           
                        </Col> 
                        <Col xs="12" className="mt-3">
                            <TextField 
                                fullWidth
                                label={content.new.labelEmailC}
                                placeholder={content.new.labelEmailCP}
                                variant="outlined"
                                name="email_confirmation"
                                error={fieldValidationErrors.emailError}
                                required={true}
                                onBlur={validateField} 
                                value={state.email_confirmation}
                                onChange={handleChange} 
                            />
                        </Col> 
                        <Col xs="12" className="mt-3"> 
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="standard-adornment-password"> {content.new.passLabel} </InputLabel>
                                <OutlinedInput
                                    id="standard-adornment-password"
                                    type={state.showPassword ? 'text' : 'password'}
                                    value={state.password}
                                    onChange={handleChange}
                                    required={true}
                                    label={content.new.passLabel}
                                    name="password"
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={ () => setState(old =>{return  {...old, showPassword: !state.showPassword}})} 
                                        >
                                        {state.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                                </FormControl>
                        </Col>
                </Row>
                <Row className="justify-content-center">
                    <Collapse in={response.donneIncorecte}>
                        <div className="mt-5">
                            <Alert  variant="danger">
                                {content.new.errorSignup}
                            </Alert>
                        </div>
                    </Collapse>
                </Row>
                <Row className="justify-content-center">
                    <Collapse in={response.validator}>
                        <div className="mt-5">
                            <Alert  variant="danger">
                                {
                                    response.message?.map((mess, index) => {
                                        return(<span key= {index}> {mess.msg},  </span>)
                                    })
                                }
                                {/* {content.new.errorSignup} */}
                            </Alert>
                        </div>
                    </Collapse>
                </Row>
                <Row className="justify-content-center">
                    <Collapse in={response.success}>
                        <div className="mt-5">
                            <Alert  variant="success">
                                {content.new.successSignup}
                            </Alert>
                        </div>
                    </Collapse>
                </Row>
                <Row className="align-items-center justify-content-around mt-4 ">
                    <Button type="submit" color="primary"> {content.new.signup} </Button>
                </Row>
            </form>
    );

}

