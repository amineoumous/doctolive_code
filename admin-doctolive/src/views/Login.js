import React, {useState} from 'react';

import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container} from '@material-ui/core';

import { Row, Col, Card, Collapse, Alert } from 'react-bootstrap'

import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
// import logoImg from "../img/logo.jpg";
// import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";
import { useAuth } from "../context/Auth";
import background from 'assets/img/stars.jpeg'

// import backgroundImage from './../assets/img/banner1.jpg'
import { makeStyles } from '@material-ui/core/styles';

import Config from './../Config';
import StarfieldAnimation from 'react-starfield-animation'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const { setUserData, UserData } = useAuth();

  const [isLoggedIn, setLoggedIn] = useState(UserData === null ? false : true);
  const [isError, setIsError] = useState(false);

  const [messageError, setErrorMessage] = useState("")
  const postLogin = (e, data) => {
    e.preventDefault()

    let {email, password} = data;
    
    axios.post(`${Config.BACKEND_URL}admin/signin`, {
      email,
      password
    }).then(result => {
      if (!result.data.error) {
        setUserData(result.data);

        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      if(e.response){

        setIsError(true);
        if(e.response.data.error){
          setErrorMessage(e.response.data.message)
        }else {
          setErrorMessage("Une éreur inconue est survenue")
        }
        
      }
      else{
        setErrorMessage("Une éreur inconue est survenue")
      }
      
    });
  }
  if (UserData.token) {
    return <Redirect to="/admin/dashboard" />;
  }


  return (
    <Row
    className="header-filter"
    style={{
      background: `url(${background})`,
      backgroundSize: 'stretch',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
        <Col md={6} lg={4} sm={8}>
          <Card body>
            <AuthForm
              submiting={postLogin}
            />
            <Row className="justify-content-center">
              <Collapse in={isError} >
                    <div id="example-collapse-text">
                      <Alert variant="danger"> {messageError} </Alert>
                    </div>
                </Collapse>
            </Row>

          </Card>
        </Col>

  </Row>
    
  );
}


function AuthForm(props){
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError]= useState(false)
  const [passwordError, setPasswordError]= useState(false)

  const validateField = (e) => {
    if(e.target.name === "email"){
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let emailErr = ! re.test(String(email).toLowerCase());
      
      setEmailError(emailErr);
    }
    else  if(e.target.name === "password"){
      let passwordLeng = password.length ;
      setPasswordError(passwordLeng < 8);
      
    }

  }
  return(
    <Container component="main" maxWidth="xs">

      {/* <CssBaseline /> */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={(e) => props.submiting(e, {email, password})}>
          <TextField
            value= {email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            margin="normal"
            required
            fullWidth
            id="email"
            onBlur={validateField} 
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
            error={passwordError}
            required
            fullWidth
            onBlur={validateField} 
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Se connecter
          </Button>
         
        </form>
      </div>
    </Container>
  )
}
