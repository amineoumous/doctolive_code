import React, {useState, useEffect} from 'react'

import {  TextField } from '@material-ui/core';

import {useAuth} from '../../context/AuthContext.js'
  
import { useRouter } from 'next/router'
import Config from '../../EndPoint.js'

import contentFR from '../../contentFR.js'
import contentEN from '../../contentEN.js'
import contentAR from '../../contentAR.js'


import FormControl from '@material-ui/core/FormControl';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import {MdVisibility, MdVisibilityOff} from 'react-icons/md'

import InputLabel from '@material-ui/core/InputLabel';

import {Row, Col, Collapse, Alert} from 'react-bootstrap'
import SubmitButton  from '../../components/CustomButtons/SubmitButton.js';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
 

  textField: {
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#61788E', // Change border color here
        borderRadius:10
      },
      '&:hover fieldset': {
        borderColor: '#61788E', // Change border color on hover
        borderRadius:10

      },
      '&.Mui-focused fieldset': {
        borderColor: '#61788E', // Change border color when focused
        borderRadius:10

      },
    },
    '& .MuiInputLabel-root': {
      color: '#61788E',
      borderRadius:10

    },
  },
}));
export default function Profile_edit() {

    const {userData} = useAuth()

    const router = useRouter()

    const {locale} = router;
    const content = locale === "ar" ? contentAR.profile : locale === "en" ? contentEN.profile : contentFR.profile;



    const[state, setState] = useState({
        nom: "" ,
        prenom: "" ,
        email: "",
        phone: "",
        adresse: "",
        date_naissance:"",
        lieu_naissance:"",
        gender:"",
        image:null

    })
    const[mdp, setMdp] = useState({
        old_password: "" ,
        new_password: "" ,
        confirm_password: "",
        showPassword: false,


    })

    const [profileUpdated, setProfileUpdated] = useState(false)
    const [passwordChanged, setPasswordChanged] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`${Config.BACKEND_URL}/patient/verify`, {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': Config.CURRENT_URL,
                'Authorization': `token ${userData.token}`,
              },
            });
            const data = await res.json();
    
            if (data.patient) {
              setState(data.patient);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [userData.token]); // Dependency array to rerun the effect if userData.token changes
    


    const handleConfirmation = () => {
        let testPass = state.password.trimStart();
  
        if(testPass.length > 6) {
          let data = {password: mdp.new_password, password_confirmation: mdp.confirm_password, old_password: mdp.old_password, email: userData.user.email }
          fetch(`${Config.BACKEND_URL}/patient/new-password`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Accept': 'application/json', 
              'Content-Type': 'application/json',
              'Authorization': `token ${userData.token}`,
            },
        } )
          .then((res) =>{
            console.log(res);
            setPasswordChanged(ture)
            setMdp({
                old_password: "" ,
                new_password: "" ,
                confirm_password: "",
                showPassword: false,
        
            })
            setTimeout(() => {
                setPasswordChanged(false)
            }, 8000);
          })
          .catch((err) => {
            console.log(err.response)
  
          })
        }
        
      }

    const handleSubmit = () => {
        let testPass = state.password.trimStart();
  
        if(testPass.length > 6) {
        //   let data = {password: mdp.password, password_confirmation: mdp.password_confirmation, old_password: mdp.old_password, email: userData.user.email }
          fetch(`${Config.BACKEND_URL}/patient`, {
            method: 'PUT',
            body: JSON.stringify(state),
            headers: {
              'Accept': 'application/json', 
              'Content-Type': 'application/json',
              'Authorization': `token ${userData.token}`,
            },
        } )
          .then((res) =>{
            console.log(res);
            setProfileUpdated(true)

            setTimeout(() => {
                setProfileUpdated(false)
            }, 8000);
          })
          .catch((err) => {
            console.log(err.response)
  
          })
        }
        
      }


    const handleChange = (event) => {
        let target= event.target;
        setState((old) => {return { ...old, [target.name]: target.value }});
    }
    const handleChangeMdp = (event) => {
        let target= event.target;
        setMdp((old) => {return { ...old, [target.name]: target.value }});
    }

    const classes = useStyles();
    return (
        <div className="profile-body pt-5 pb-5">

        
        <div className="container rounded  pt-5 pb-5">
    <div className="row">

        <div className="col-md-12">
            <div className="p-3 py-5 ">
                <div className='card text-center card-update mb-4 p-20'>
                <div className="">
                    <h4 className="title-card">{content.heading}</h4>
                </div>
                <Row className=" mt-2">

                <div className="col-md-12 mb-2">
              <div className=" gender-group">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check form-check-inline mr-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
              </div>
            </div>
            </Row>
            <Row className="mt-4">
                   <Col lg="6"> 
                        <TextField
                            fullWidth
                            required
                            label= {content.nomLabel}
                            variant="outlined"
                            value={state.nom}
                            name="nom"
                            onChange={handleChange}
                            placeholder= {content.placeholder1}
                            className={classes.textField}
                          />
                   </Col>
                   <Col lg="6"> 
                        <TextField
                            fullWidth
                            required
                            label= {content.prenomLabel}
                            variant="outlined"
                            value={state.prenom}
                            name="prenom"
                            onChange={handleChange}
                            placeholder= {content.placeholder2}
                            className={classes.textField}
                          />
                   </Col>
                </Row>
                <Row className="mt-4">
                <Col lg="12"> 
                        <TextField
                            fullWidth
                            required
                            label= {content.emailLabel}
                            variant="outlined"
                            value={state.email}
                            name="email"
                            onChange={handleChange}
                            placeholder= {content.placeholder3}
                            className={classes.textField}
                          />
                   </Col>
                </Row>
                <Row className="mt-4">
                <Col lg="12"> 
                        <TextField
                            fullWidth
                            required
                            label= {content.phoneLabel}
                            variant="outlined"
                            value={state.phone}
                            name="phone"
                            onChange={handleChange}
                            placeholder= {content.placeholder2}
                            className={classes.textField}
                          />
                   </Col>
                </Row>


                <Row className="mt-4">
                <Col lg="12"> 
                        <TextField
                            fullWidth
                            
                            label= {content.dateLabel}
                            variant="outlined"
                            value={state.date_naissance}
                            name="date_naissance"
                            onChange={handleChange}
                            placeholder= {"Date de naissance"}
                            className={classes.textField}
                          />
                   </Col>
                </Row>

                <Row className="mt-4">
                <Col lg="12"> 
                        <TextField
                            fullWidth
                            
                            label= {content.lieuLabel}
                            variant="outlined"
                            value={state.lieu_naissance}
                            name="lieu_naissance"
                            onChange={handleChange}
                            placeholder= {"Lieu de naissance"}
                            className={classes.textField}
                          />
                   </Col>
                </Row>

            

                <Row className="justify-content-center mt-3">
                    <Collapse in={profileUpdated} >
                        <div id="example-collapse-text">
                            <Alert variant="success"> Success </Alert>
                        </div>
                    </Collapse>
                </Row>

                <Row className="mt-5 justify-content-center">
                    <SubmitButton onClick={handleSubmit} color="primary" className={"btn-update-pro"}> Enregistrer le profile </SubmitButton>
                </Row>
                </div>
                <div className='card text-center card-update mb-5 p-20'>
                <Row className="mt-4 p-0">
                    <Col lg="12" className="p-0">
                        <Row>
                            <h4 className='text-center'> Changement de mot de passe </h4>
                        </Row>
                        <FormControl className="mt-3" fullWidth variant="outlined">
                            <InputLabel htmlFor="standard-adornment-password"> {content.old_password} </InputLabel>
                            <OutlinedInput
                                id="standard-adornment-password"
                                type={mdp.showPassword ? 'text' : 'password'}
                                value={mdp.old_password}
                                onChange={handleChangeMdp}
                                required={true}
                                label={content.old_password}
                                name="old_password"
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={ () => setMdp(old =>{return  {...old, showPassword: !state.showPassword}})} 
                                    >
                                    {mdp.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            </FormControl>
                            <FormControl className="mt-3" fullWidth variant="outlined">
                            <InputLabel htmlFor="standard-adornment-password"> {content.new_password} </InputLabel>
                            <OutlinedInput
                                id="standard-adornment-password"
                                type={mdp.showPassword ? 'text' : 'password'}
                                value={mdp.password}
                                onChange={handleChangeMdp}
                                required={true}
                                label={content.new_password}
                                name="new_password"
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={ () => setMdp(old =>{return  {...old, showPassword: !mdp.showPassword}})} 
                                    >
                                    {mdp.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            </FormControl>
                            <FormControl className="mt-3" fullWidth variant="outlined">
                            <InputLabel htmlFor="standard-adornment-password"> {content.confirm_password} </InputLabel>
                            <OutlinedInput
                                id="standard-adornment-password"
                                type={mdp.showPassword ? 'text' : 'password'}
                                value={mdp.confirm_password}
                                onChange={handleChangeMdp}
                                required={true}
                                label={content.confirm_password}
                                name="confirm_password"
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={ () => setMdp(old =>{return  {...old, showPassword: !mdp.showPassword}})} 
                                    >
                                    {state.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            </FormControl>
                    </Col>
                </Row>
          

                <Row className="justify-content-center mt-3">
                    <Collapse in={passwordChanged} >
                        <div id="example-collapse-text">
                            <Alert variant="success"> Success </Alert>
                        </div>
                    </Collapse>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <SubmitButton onClick={handleConfirmation} color="primary "  className={"btn-update-pro"}> Changer le mot de passe </SubmitButton>

                </Row>

                </div>
                {/* <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value="" /></div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value="" placeholder="state" /></div>
                </div> */}
                {/* <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div> */}
            </div>
        </div>
        <div className="col-md-4">
            <div className="p-3 py-5">
                {/* <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br>
                <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" value=""></div> <br>
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" value=""></div> */}
            </div>
        </div>
    </div>
    <div className='row'>
        <div className='col-md-12 text-center'>
            
        <img className=" mt-5"  src={"/image/person-with-a-cold-animate2.svg"} />
        </div>

    </div>
</div>
</div>
    )
}
