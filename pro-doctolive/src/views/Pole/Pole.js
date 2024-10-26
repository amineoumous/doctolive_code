import React, {useState, useEffect} from 'react'
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import {Row, Col, Container} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Config from 'Config'

// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

import Accessibility from "@material-ui/icons/Accessibility";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/views/dashboardStyle.js";
import {getSpecialitiesSearched, getCity} from 'services/medecin/MedecinService'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(styles);

export default function Pole() {
  const [categories, setCategories] = useState([]);
  const [medecin, setMedecin] = useState({});

  const [categorie, setCategorie] = useState(1);
  const [loadingMedecin, setLoadingMedecin] = useState(false);
  const [isSearched, setIsSerached] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  // Handle the change event when the user selects an option
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [inputValue, setInputValue] = useState('');

  // Handle the change event when the user types in the input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [selectedOptionradio, setSelectedOptionradio] = useState('option1'); // Initialize with a default option

  const handleOptionChange = (event) => {
    setSelectedOptionradio(event.target.value);
  };
  const handleClick = () => {
    alert('Button clicked!');
  };
  const classes = useStyles();

  const [speciality, setSepeciality] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {

    getCity()
    .then(result => {
        setCities(result.data.cities)
    })
    .catch(err => {

    });

      return () => {
          
      }
  }, [])

  const handleSearchSpecialite = (e, newInputValue) => {
    setMedecin(newInputValue)
  }
  
  const handleSearchSpecialitea = (e, newInputValue) => {
    if(newInputValue.length >0) {
        setLoadingMedecin(true)
        setIsSerached(true)
        getSpecialitiesSearched(newInputValue)
        .then(result => {    

            setSepeciality([...result.data.speciality, ...result.data.medecins])
            setLoadingMedecin(false)
        })
        .catch(err => {
            setLoadingMedecin(false)

        })
    }else {
        setIsSerached(false)
    }
       
      
  }
  return (
    <div>
      <GridContainer>
        <div className="text-center" style={{width:"100%",textAlign:"center",alignItems:"center",justifyContent:"center"}}>
        <h1 className='title_page_pole'>Trouver un médecin remplaçant</h1>
        </div> 
    
          <div className="box_general_pole">
          {/* <h3 className='title_pole'>Qualifications</h3> */}
          <Row>
        
          <Col xs={12} md={12}>
                  <FormControl fullWidth>
            
                  <Autocomplete
                               onInputChange={handleSearchSpecialitea}
                               loading={loadingMedecin}
                               noOptionsText={isSearched? "Aucun résultat ne corespond" : "Tapez pour obtenir plus de résultat"}
                               groupBy={(option) => option.name? "specialite" : "medecin"}
                                id="suggestion-medecin"
                                loadingText="Chargement des médecin ou spécialité similaire"
                                options={speciality}
                                // disableClearable={true}
                                debug
                                getOptionLabel={(option) => option.nom? option.nom + " " + option.prenom + " " + option.email + " " + option.phone : option.name ? option.name : "" }
                                renderOption={(option) => (
                                    option.nom ?
                                        <React.Fragment>
                                            <Link className="d-flex" to ={`/doctor/${option.id}`}>
                                            {option.image ? <span className="searchbar-result-profile-avatar "><img className="img-fluid" src={`${Config.BACKEND_URL}/${option.image}`} /></span> : null }
                                            <span> Dr. {option.nom} {option.prenom} </span> 
                                            </Link>
                                            
                                        </React.Fragment>
                                    :
                                        <React.Fragment>
                                            {option.name}
                                        </React.Fragment> 
                                )}
                                onChange={(e, newInputValue) => handleSearchSpecialite(e, newInputValue)} 
                                value={medecin}
                                style={{ width: "100%", height:"60px" }}
                                renderInput={(params) => <TextField {...params} placeholder="Médecin, établissement, spécialité…" />}
                                />
                    </FormControl>
                 
           
                 
            </Col>
            </Row>



          {/* <h3 className='title_pole'>Etat Civil</h3>
          <Row>
        
          <Col xs={12} md={6}>
          <input
              type="text"
              id="textInput"
              className='input_pole form-control'
              placeholder='Nom'
              value={inputValue}
              onChange={handleInputChange}
            />
                 
            </Col>
            <Col xs={12} md={6}>
             <input
              type="text"
              id="textInput"
              className='input_pole form-control'
              placeholder='Prénom'
              value={inputValue}
              onChange={handleInputChange}
            />
                 
            </Col>

            </Row> */}

          <h3 className='title_pole'>Sexe</h3>
          <Row>
        
          <Col xs={12} md={6}>
          <label className='custom-r'>
              <input
                type="radio"
                value="M"
                onChange={handleOptionChange}
                checked={selectedOptionradio === 'M'}
              />
              <span className="custom-radio-button"></span> <span className='text'>Homme</span>
            </label>
            </Col>
            <Col xs={12} md={6}>
            <label className='custom-r'>
            <input
                type="radio"
                value="F"
                onChange={handleOptionChange}
                checked={selectedOptionradio === 'F'}
              />
              <span className="custom-radio-button"></span> <span className='text'>Femme</span>
            </label>
                 
            </Col>

            </Row>

  
            <h3 className='title_pole'>Statut</h3>
          <Row>
        
          <Col xs={12} md={4}>
          <label className='custom-r'>
              <input
                type="radio"
                value="En activité"
                onChange={handleOptionChange}
                checked={selectedOptionradio === 'En activité'}
              />
              <span className="custom-radio-button"></span> <span className='text'>En activité</span>
            </label>
            </Col>
            <Col xs={12} md={4}>
            <label className='custom-r'>
            <input
                type="radio"
                value="Retraité"
                onChange={handleOptionChange}
                checked={selectedOptionradio === 'Retraité'}
              />
              <span className="custom-radio-button"></span> <span className='text'>Retraité</span>
            </label>
                 
            </Col>

            <Col xs={12} md={4}>
            <label className='custom-r'>
            <input
                type="radio"
                value="Indifférent"
                onChange={handleOptionChange}
                checked={selectedOptionradio === 'Indifférent'}
              />
              <span className="custom-radio-button"></span> <span className='text'>Indifférent</span>
            </label>
                 
            </Col>

            </Row>



            <h3 className='title_pole'>Localisation</h3>
          <Row>
        
          <Col xs={12} md={6}>
                  <FormControl fullWidth>
                  <select
                  id="selectBox"
                  className='select_pole form-control'
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option value="">Ville</option>
                  {cities.map(((ville, index) =>
                                       
                                        <option value={ville.id}>{ville.name}</option>
                                    ))
                                }
         
                </select>
                    </FormControl>
                 
            </Col>
            <Col xs={12} md={6}>
                  <FormControl fullWidth>
                 <input type='text' className='input_pole form-control' placeholder='Adresse' name='adress' />
                    </FormControl>
                 
            </Col>

            </Row>

          </div>

          <div  className="justify-content-center" style={{width:"100%",textAlign:"center",alignItems:"center",justifyContent:"center"}}>
            <Row>
              <Col xs={12} md={12} className="d-flex justify-content-center" >
            <button  className="custom-button" onClick={handleClick} text="RECHERHER" >RECHERHER</button>
           
            </Col>
             </Row>
          </div>
         
     


     
      </GridContainer>
      
    </div>
  );
}
