import React, {useEffect, useState} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/ProNavbars.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/MedecinSidebar.js";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import MedecinProfile from 'views/MedecinProfile/MedecinProfile';

import Button from 'components/CustomButtons/Button'
import routes from "routes.js";

import styles from "assets/jss/layouts/medecinProStyle.js";
import { useAuth } from "context/Auth";

import logo from "assets/img/doctoLogo.png";

// @material-ui/icons
import InputLabel from '@material-ui/core/InputLabel';

import Axios from 'axios'
import Config from 'Config';
import Cookies from 'js-cookie'



import FormControl from '@material-ui/core/FormControl';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import {MdVisibility, MdVisibilityOff} from 'react-icons/md'


import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
let ps;

const switchRoutes = (
  <Switch>
    {routes.medecinPro.map((prop, key) => {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
    })}
    <Route
      path="/profil"
      component={MedecinProfile}
      key={"profil"}
    />
    <Redirect from="/"  to="/dashboard" />
    <Redirect to="/not-found" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function MedecinPro({ ...rest }) {
 

  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [addedByAdmin, setAddedByAdmin] = useState(false);
  const {UserData, setUserData} = useAuth();

const [state, setState] = React.useState({
      password_confirmation: "",
      password:"",
      old_password:"",
});
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    if(UserData.token){
      setAddedByAdmin(UserData.user.addedByAdmin && !UserData.user.passwordChanged);

    }

      return () => {
          
      }
  }, [UserData])

  useEffect(() => {

    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
    
  }, [mainPanel]);


       
  const handleConfirmation = () => {
    let testPass = state.password.trimStart();
    if(testPass.length > 6) {
      let data = {password: state.password, password_confirmation: state.password_confirmation, old_password: state.old_password, email: UserData.user.email }
      console.log(data)

      Axios.put(`${Config.BACKEND_URL}/medecin/new-password`, data, {
        headers: {
          'Accept': 'application/json', 
          'Content-Type': 'application/json',
          'Authorization': `token ${UserData.token}`,
        },
    } )
      .then((res) =>{
        console.log(res);
        setAddedByAdmin(false);
        // setUserData( res.data.updatePatient)
        const newData= {token: UserData.token, user:{...UserData.user, passwordChanged: true}  }
        Cookies.set("userData", JSON.stringify(newData));
      })
      .catch((err) => {
        console.log(err.response)

      })
    }
    
  }

  const handleChange = ({target : {value, name}}) => {
    setState(old => {return { ...old, [name]: value}}) ;
}

  return (
    <main className={classes.wrapper}>
      <Sidebar
        routes={routes.medecinPro}
        logoText={"PELUX"}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        logo={logo}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
          <div className={classes.content}>
            <div className={classes.container + " container"}>{switchRoutes}</div>
          </div>
          <Dialog
        // open={false}
        open={addedByAdmin}
        onClose={ () => {}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"> Renouveler le mot de passe </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ce compte à tait créer avec un administrateur, alors ce mot de passe à était générer d'une maniére aléatoir. On vous recomande de saisir un nouveau mot de passe pour la scuité de vos information.
          </DialogContentText>
          <FormControl className="mt-3" fullWidth variant="outlined">
          <InputLabel htmlFor="standard-adornment-password"> Ancien mot de passe </InputLabel>
          <OutlinedInput
              id="standard-adornment-password"
              type={state.showPassword ? 'text' : 'password'}
              value={state.old_password}
              onChange={handleChange}
              required={true}
              label="ancien mot de passe"
              name="old_password"
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
          <FormControl className="mt-3" fullWidth variant="outlined">
          <InputLabel htmlFor="standard-adornment-password"> Nouveaux mot de passe </InputLabel>
          <OutlinedInput
              id="standard-adornment-password"
              type={state.showPassword ? 'text' : 'password'}
              value={state.password}
              onChange={handleChange}
              required={true}
              label="Nouveaux mot de passe"
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
          <FormControl className="mt-3" fullWidth variant="outlined">
          <InputLabel htmlFor="standard-adornment-password"> Confirmer le mot de passe </InputLabel>
          <OutlinedInput
              id="standard-adornment-password"
              type={state.showPassword ? 'text' : 'password'}
              value={state.password_confirmation}
              onChange={handleChange}
              required={true}
              label="Confirmer le mot de passe"
              name="password_confirmation"
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmation} color="danger">
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
         <Footer />
      </div>
    </main>
  );
}
