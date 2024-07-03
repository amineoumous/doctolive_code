import React, {useState} from 'react';

import { Button, TextField, FormControlLabel, Checkbox, Box, Typography, Container} from '@material-ui/core';
import Config from './../EndPoint'

import { makeStyles } from '@material-ui/core/styles';

import { useRouter } from 'next/router'


import contentFR from './../contentFR'
import contentEN from './../contentEN'
import contentAR from './../contentAR'

import {Row, Collapse, Alert} from 'react-bootstrap'


const useOutlinedInputStyles = makeStyles(theme => ({
  root: {
    "& $notchedOutline": {
      borderColor: "#38869C",borderWidth:"2px !important"
    },
    "&:hover $notchedOutline": {
      borderColor: "#38869C",borderWidth:"2px !important"
    },
    "&$focused $notchedOutline": {
      borderColor: "#38869C",borderWidth:"2px !important"
    }
  },
  focused: {},
  notchedOutline: {}
}));
const useStyles = makeStyles((theme) => ({
  paper: {
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

  textField: {
    borderRadius:13,
    borderColor:"#38869C",
    color:"#61788E"
 },
 text_info:{
     color:"#61788E",
     fontSize:14,fontWeight:500
 },
 notchedOutline: { borderColor: '#38869C !important',borderWidth:"2px !important" }
}));


export default function AuthForm(props){
  const classes = useStyles();
  const router = useRouter();


    const {locale} = router;
    const content = locale === "ar" ? contentAR : locale === "en" ? contentEN : contentFR;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError]= useState(false)
  const [passwordError, setPasswordError]= useState(false)
  const [messageError, setErrorMessage] = useState("Information incorrect")

  const [response, setResponse] = useState({
    sending:false,
    success:false,   
    donneIncorecte: false                 
  })

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

  const submiting = (e) => {
    e.preventDefault();
        setResponse(old =>  { return {...old, sending: true}});

        if(!emailError && !passwordError){
          let data = {email, password};

          fetch(`${Config.BACKEND_URL}/patient/auth`,{
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
                      props.submiting(res);
                      setResponse({sending: false, success:true, donneIncorecte: false});
                  }else {
                      setResponse({sending: false, success:false, donneIncorecte:true})
                      if(res.validator){
  
                      }else{
                        setErrorMessage(res.message)
                      }
                  }
             
              })
              .catch(e =>{ 
                console.log(e.response)
                  setResponse({sending: false, success:false, donneIncorecte:true})
                  if(e.response.data.error){
                    setErrorMessage(e.response.data.message)
                  }else {
                    setErrorMessage("Une éreur inconue est survenue")
                  }
              })
              )
              .catch(e =>{ 
                console.log(e.response)
                  setResponse({sending: false, success:false, donneIncorecte:true})
                  if(e.response.data.error){
                    setErrorMessage(e.response.data.message)
                  }else {
                    setErrorMessage("Une éreur inconue est survenue")
                  }
              })
        }
        
  }
  return(
    <Container component="main" maxWidth="xs">

      <div className={classes.paper}>
        {/* <Typography component="h1" variant="h5"> {content.new.auth} </Typography> */}
        <form className={classes.form} onSubmit={(e) => submiting(e, {email, password})}>
          <TextField
            value= {email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            margin="normal"
            required
            fullWidth
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
            id="email"
            variant="outlined"
            onBlur={validateField} 
            label={content.new.emailLabel}
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            value={password}
            variant="outlined"
            onChange={ (e) => setPassword(e.target.value)}
            error={passwordError}
            required
            fullWidth
            onBlur={validateField} 
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
            name="password"
            label={content.new.passLabel}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           {content.new.signin}
          </Button>
        </form>
      </div>
      <Box mt={8}>
      <Row className="justify-content-center">
              <Collapse in={response.donneIncorecte} >
                    <div id="example-collapse-text">
                      <Alert variant="danger"> {messageError} </Alert>
                    </div>
                </Collapse>
            </Row>
      </Box>
    </Container>
  )
}
