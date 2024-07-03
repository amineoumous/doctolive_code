import React, {useState} from 'react';

import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container} from '@material-ui/core';

import { Row, Col, Card, Collapse, Alert } from 'react-bootstrap'

import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
// import logoImg from "../img/logo.jpg";
// import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";
import { useAuth } from "../context/Auth";

import { makeStyles } from '@material-ui/core/styles';

import {signinMedecin} from 'services/medecin/MedecinService'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  notchedOutline: { borderColor: '#38869C !important',borderWidth:"2px !important" },
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
    borderRadius:12,
    fontSize:15,
    fontWeight:'bold',
    borderWidth:2,
    borderColor:"#C6E8EE",
    lineHeight:3,
    backgroundColor:'#1AB9B9'  
    
  },
  textField: {
    borderRadius:13,
    borderColor:"#38869C",
    height:40,
    color:"#61788E"
 },
}));

export default function SignIn(props) {
  const { setUserData, UserData } = useAuth();

  const [isLoggedIn, setLoggedIn] = useState(UserData === null ? false : true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  
  const postLogin = (e, data) => {
    e.preventDefault()

    let {email, password} = data;
    signinMedecin({email, password})
    // axios.post(`${Config.BACKEND_URL}/signin`, {
    //   email,
    //   password
    // })
    .then(result => {

      if (!result.data.error) {
       
        setUserData(result.data);

        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      if(e.response){

        if(e.response.data){
          setErrorMessage(e.response.data.message)
        }
        setIsError(true);
      }
      else{

      }
      
    });
  }
    if (UserData.token) {
    return <Redirect to="/" />;
  }


  return (
    <Row
    className="header-filter"
    style={{
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'column',
      backgroundColor: "#B6DBD736",
      paddingBottom: "2rem",
      paddingTop: "3rem",
      
    }}>
        <Col md={6} lg={4} sm={8}>
          <Card body>
            <AuthForm
              submiting={postLogin}
              errorMessage={errorMessage}
              isError={isError}
            />
          </Card>
          <div>
            <div className=" mt-4" >
            <Card className="mr-2" body>
              <div className="d-flex justify-content-center flex-column align-items-center">
              <div className="mb-6">
                    {/* <svg width="38" height="42" viewBox="0 0 38 42"><g stroke="#2594D2" stroke-width="2.049" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M12.338 13.338c9.744-1.808 10.709-7.083 10.709-7.083s.512 5.618 3.436 7.245"></path><path d="M23.047 6.255s-.965 5.275-10.71 7.083v3.125c0 3.89 3.184 7.072 7.073 7.072 3.89 0 7.072-3.182 7.072-7.072V13.5c-2.923-1.627-3.435-7.245-3.435-7.245z"></path><path d="M22.71 22.71v5.54s7.544 1.886 14.145 8.487m-21.688-8.604s-7.545 1.885-14.145 8.486m22.661.676h5.77m-2.886-2.885v5.77"></path><path d="M26.483 22.928h5.422C32.425 9.381 27.736.523 19.4 1.044 7.96 1.759 6.894 11.987 6.373 22.928h6.252"></path></g></svg> */}
                </div>
                  <span className="desc-lgn-pro">
                    Vous n'êtes pas encore un praticien DOCTOLIVE ?
                  </span>
                  <a href="https://doctor.doctolive.ma" className={"rejoignez"} >Rejoignez-nous</a>
                </div>
          </Card>
          <Card body className="ml-2">
            <div className="d-flex justify-content-center flex-column align-items-center" >
              <div className="mb-6">
                {/* <svg width="33" height="42" viewBox="0 0 33 42"><g stroke="#2594D2" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M27.329 11.612h4.082M29.37 9.571v4.082M21.615 3.449h3.265m-1.633-1.633v3.266m-1.979 21.224l1.357 11.033c.11.89-.53 1.71-1.42 1.82L6.62 40.952A1.638 1.638 0 014.8 39.53L1.011 8.743a1.64 1.64 0 011.422-1.82L17.017 5.13c.892-.11 1.71.53 1.82 1.421l.928 7.545M3.642 10.064L16.606 8.47M6.533 33.56l12.964-1.594"></path><path d="M15.084 36.21a1.225 1.225 0 11-2.432.3 1.225 1.225 0 012.432-.3zm2.664-21.55a6.122 6.122 0 018.764 5.525 6.122 6.122 0 11-12.245-.001c0-.913.2-1.78.559-2.558m2.707 2.558h5.714m-2.857-2.857v5.714"></path></g></svg> */}
              </div>
              <span >
                <span className="desc-lgn-pro">Vous êtes patient et vous souhaitez prendre rendez-vous en ligne ?</span>
              </span>
              <a className="" href="https://doctolive.ma"  className={"rejoignez"}>Prendre RDV en ligne</a>
              </div>
          </Card>
              </div>
          </div>
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
       
        <h1>
          Se connecter
        </h1>
        <form className={classes.form} onSubmit={(e) => props.submiting(e, {email, password})}>
          <TextField
            value= {email}
            className={classes.textField}
            InputProps={{
              classes: {
                  notchedOutline: classes.notchedOutline
              },
              style: {
                borderRadius: "10px"
              }
            }}
            InputLabelProps={{
              style: { color: '#61788E' },
            }}
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
           className={classes.textField}
            margin="normal"
            value={password}
            InputProps={{
              classes: {
                  notchedOutline: classes.notchedOutline
              },
              style: {
                borderRadius: "10px"
              }
            }}
            InputLabelProps={{
              style: { color: '#61788E' },
            }}
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
           <Row className="justify-content-center m-t-15">
              <Collapse in={props.isError}>
                  <div>
                      <Alert  variant="danger">
                          {props.errorMessage}
                      </Alert>
                  </div>
              </Collapse>
          </Row>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Connectez-vous
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link to="/reset-password">
                Forgot password?
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={8}>
        { props.isError &&<div>The username or password provided were incorrect!</div> }
      </Box>
    </Container>
  )
}
