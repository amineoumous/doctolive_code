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
export default function Etudiant() {

    const {userData} = useAuth()

    const router = useRouter()

    const {locale} = router;
    const content = locale === "ar" ? contentAR.profile : locale === "en" ? contentEN.profile : contentFR.profile;
    const [mesProches, setMesProches] = useState([]);



    const[state, setState] = useState({
        nom: "" ,
        prenom: "" ,
        email: "",
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

    useEffect( async () => {
      if(!userData.token) return router.push('account/new')

      const res = await fetch(`${Config.BACKEND_URL}/patient/proches`, {
          headers: {
              'Accept': 'application/json', 
              'Content-Type': 'application/json',
              'Authorization': `token ${userData.token}`,
            },
      })
      const data = await res.json()
      setMesProches(data.proches)
      return () => {
          
      }
  }, []) // Dependency array to rerun the effect if userData.token changes
    


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

    return (
        <div className="profile-body pt-5 pb-5">

        
        <div className="container rounded  pt-5 pb-5">
    <div className="row">
    <div className="col-md-6 mt-5">

       <p>
       Vous êtes des étudiants en médecin et à la recherche d’une formation pour dévlopper vos compétences et d’acquérir plus d’expertises ?
     
     
       </p>
     


 <p className='etudiant-text mt-5'>
     <span className='class-d'>D</span><span className='class-o'>OCTOLIVE</span> EST LA MEILLEUR SOLUTION pour VOs PROBLéME 
     </p>
    <div className='text-center'>
              <a href='/recherche/all/maroc' className='btn btn-primary btn-update-search'>
              CHERCHER UN CABINET
              </a>
             </div>
 </div>
     <div className='col-md-6'>
        <img src='/image/Thesis-rafiki.svg' style={{width:"100%"}} />
    </div>
    </div>
   
</div>
</div>
    )
}
