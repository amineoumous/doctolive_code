import React, {useState, useEffect,useRef } from 'react'

import {  TextField } from '@material-ui/core';

import {useAuth} from './../../context/AuthContext'
  
import { useRouter } from 'next/router'
import Config from './../../EndPoint'

import contentFR from './../../contentFR'
import contentEN from './../../contentEN'
import contentAR from './../../contentAR'


import FormControl from '@material-ui/core/FormControl';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import {MdVisibility, MdVisibilityOff} from 'react-icons/md'

import InputLabel from '@material-ui/core/InputLabel';

import {Row, Col, Collapse, Alert} from 'react-bootstrap'
import SubmitButton  from './../../components/CustomButtons/SubmitButton.js';
export default function Profile() {

    const {userData} = useAuth()

    const router = useRouter()

    const {locale} = router;
    const content = locale === "ar" ? contentAR.profile : locale === "en" ? contentEN.profile : contentFR.profile;

    const fileInputRef = useRef(null); // Create a ref for the file input

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

      const handleFileChange = async (event) => {
        const file = event.target.files[0];
    
        if (file) {
          const data = {
            filePath: await toBase64(file), // Convert the file to Base64
            fileType: file.type,
            realName: file.name,
          };
    
          try {
            const response = await uploadImage(data);
            console.log(response)
            setState((prevState) => ({
              ...prevState,
              image: response.data?.fileLink , // Update the state with the uploaded image path
            }));
          } catch (error) {
            console.error('Failed to upload image:', error);
          }
        }
      };
    
      const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    
      const uploadImage = async (data) => {
        try {
          return new Promise(async (resolve, reject) => {
            let response = await fetch(`${Config.BACKEND_URL}/upload/patient-profil`, {
              method: 'POST',
              body: JSON.stringify({
                data: data.filePath,
                fileType: data.fileType,
                realName: data.realName,
              }),
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `token ${userData.token}`,
              },
            });
    
            response
              .json()
              .then((json) => {
                return resolve(json);
              })
              .catch((err) => {
                return reject(err);
              });
          });
        } catch (err) {
          console.error('Error uploading image:', err);
          throw err;
        }
      };
    
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
        <div className="col-md-3 img-profile-patient paper-rectangle  triangle-corner top-left top-right bottom-left bottom-right">
   
        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef} // Use the ref here
        onChange={handleFileChange}
      />
      <img
        className="mt-5"
        width="150px"
        src={state.image ? `${Config.BACKEND_URL}/`+state.image : '/image/patient.png'}
        onClick={() => fileInputRef.current.click()} // Trigger the file input click
        style={{ cursor: 'pointer' }}
      />
  <h3 className="font-weight-bold mt-5">{`${state.nom} ${state.prenom}`}</h3>
</div>
        </div>
        <div className="col-md-9 p-0">
            <div className='col-md-12 bg-white p-0'>
                <h2 className='vos-donnees text-center'>Vos données:</h2>

             <div className='detail-patient'>

             <div className="label-with-text">
                <label className="custom-label"> Date de naissance :</label>
                <span className="text"> {state.date_naissance}</span>
            </div>


            <div className="label-with-text">
                <label className="custom-label"> Lieu de naissance :</label>
                <span className="text">    {state.lieu_naissance}</span>
            </div>

            <div className="label-with-text">
                <label className="custom-label"> Féminin / masculin :</label>
                <span className="text">     {state.gender}</span>
            </div>


            <div className="label-with-text">
                <label className="custom-label"> Adresse Email :</label>
                <span className="text">{state.email}</span>
            </div>


            <div className="label-with-text">
                <label className="custom-label">Numéro de téléphone :</label>
                <span className="text">{state.phone}</span>
            </div>

      
             
             <div className='text-right'>
              <a href='/account/profile_edit' className='btn btn-primary btn-update-pro'>
              éditer votre profil
              </a>
             </div>
             </div>
               
            </div> 
        
        </div>
   
    </div>
    <div className='row'>
        <div className='col-md-12 text-center'>
            
        <img className=" mt-5 w-100"   src={"/image/person-with-a-cold-animate2.svg"} />
        </div>

    </div>
</div>
</div>
    )
}
