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

export default function Add_proche() {

    const {userData} = useAuth()

    const router = useRouter()

    const {locale} = router;
    const content = locale === "ar" ? contentAR.profile : locale === "en" ? contentEN.profile : contentFR.profile;



    const[state, setState] = useState({
        nom: "" ,
        prenom: "" ,
        phone: "",
        adresse: "",
        date_naissance:"",
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
          fetch(`${Config.BACKEND_URL}/patient/proche`, {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
              'Accept': 'application/json', 
              'Content-Type': 'application/json',
              'Authorization': `token ${userData.token}`,
            },
        } )
          .then((res) =>{
            console.log(res);
            router.push('/account/mes_proches');
            // setProfileUpdated(true)

            // setTimeout(() => {
            //     setProfileUpdated(false)
            // }, 8000);

          })
          .catch((err) => {
            console.log(err.response)
  
          })
        }
        
      }


    const [formData, setFormData] = useState({
      gender: '',
      prenom: '',
      nom: '',
      dateNaissance: '',
      lieuNaissance: '',
      address: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
  
    return (
        <div className="profile-body pt-5 pb-5">

<div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">AJOUTER UN PROCHE</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <div className="col-md-12 gender-group">
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

            <div className="form-group row">
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Prénom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-12">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date de Naissance"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lieu de Naissance"
                  name="lieuNaissance"
                  value={formData.lieuNaissance}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-12 text-center">
              <SubmitButton onClick={handleSubmit} color="primary" className={"btn-update-pro"}>AJOUTER </SubmitButton>

              </div>

            
            </div>
          </form>
        </div>
      </div>
    </div>
     
</div>
    )
}
