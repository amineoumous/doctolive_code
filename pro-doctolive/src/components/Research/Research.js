

import React, {useState, useEffect} from "react";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from 'react-bootstrap';
// @material-ui/icons

import {Link} from 'react-router-dom'
import {BsSearch} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"
import {BiCurrentLocation} from "react-icons/bi"

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import {getSpecialitiesSearched, getCity} from 'services/medecin/MedecinService'

import Config from 'Config'
const style = {
    searchContainer: {
        paddingTop: "120px",
    },
    searchContent:{
        maxWidth: "768px",
        zIndex: 5,
    },
    h1: {
        margin:" 0 0 32px",
        fontSize: 32,
        lineHeight: "40px",
        fontFamily: "Montserrat, arial,sans-serif",
        fontWeight: 700,
        color: "#fff",
    },
    searchBar:{
        height: 60,
        width: "100%",
        minWidth: 600,
        display: "flex",
        boxShadow: "0 0 20px 0 rgba(67,95,113,0.2)",
        borderRadius: 8,
    
    },
    searchBarQuery:{
        flex:"11 0 0",
        position: "relative",
    
    },
    searchBarInputWrapper:{
        flex:"11 0 0",
        position: "relative",
    
    },
    searchInputWrapper: {
        borderRadius: "8px 0 0 8px",
        background: "#fff",
        position: "relative",
        display: "flex",
        width: "100%",
        height:60,

        '& .searchbar-input-icon' : {
            position: "absolute",
            top: 18,
            left: 16,
            width: 24,
            height: 24,
            pointerEvents: "none",
            fill: "#7791a2",
        }
    },
    searchInput: {
        borderRadius: "8px 0 0 8px",
        height: 60,
      
        flex: "1 0 0",
        lineHeight: 16,
        padding: "0 46px",
        // font-family: "Roboto",arial,sans-serif;
        border: "none",
        backgroundColor: "#fff",
        color: "#435f71",
        boxSizing: "border-box",
        outline: "none",
        width: "100%",
        fontSize: 14,
        
    },
    searchBarSubmit: {
        flex: "13 0 0",
        display: "flex",
    position: "relative",
    },
    searchbarPlace: {
        flex: "1 0 0",
        display: "flex",
        borderLeft: "1px solid #d2dbde",
        position: "relative",
    },
    searchbarPlaceInputWrapper :{
        flex: "1 0 0",
    },
    searchButton: {
        "-webkit-tap-highlight-color":" rgba(0, 0, 0, 0)",
        userSelect: "none",
        cursor: "pointer",
        position: "absolute",
        width: "100%",
        left: 0,
        transform: "translateX(100%) translateX(-51px)",
        color: "#435f71",
        transition: "-webkit-transform 400ms",
        transition:" transform 400ms",
        transition: "transform 400ms, -webkit-transform 400ms",
        transitionSelay: "100ms",
        height: "100%",
        textAlign: "left",
        backgroundColor: "white",
        border: 0,
        outline: "none",
        boxShadow: "none",
        appearance: "none !important",
        textDecoration: "none !important",
        margin: 0,
        display: "inline-block",
        padding: "0 16px",
       
    },
    searchSubmitButton: {
        "-webkit-tap-highlight-color":" rgba(0, 0, 0, 0)",
        userSelect: "none",
        cursor: "pointer",
        height: 60,
        color: "#fff",
        background: "linear-gradient(180deg, #ffc164 0%, #f59300 46.12%, #f59300 97.02%)",
        borderRadius: "0 8px 8px 0",
        padding: 16,
        zIndex: 1,



        transition: "opacity 500ms, color 100ms, background-color 100ms",
        border: 0,
        outline: "none",
        boxShadow: "none",
        appearance: "none !important",
        textDecoration: "none !important",
        margin: 0,
        display: "inline-block",
        padding: "0 16px",
       
    },
   
}
const useStyles = makeStyles(style);

export default function SearchInput(props) {
  const classes = useStyles();
  const { className, placeholder, onChange , ...rest } = props;
  const [medecin, setMedecin] = useState({});
  const [ville, setVille] = useState({});
  const [loadingMedecin, setLoadingMedecin] = useState(false);
  const [isSearched, setIsSerached] = useState(false);
  const [LoadingCities, setLoadingCities] = useState(false);


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
  const submiting = (e) => {
      e.preventDefault();
      
    let Medecin_rechercher = medecin? medecin.name ? medecin.name : medecin.nom : medecin;
    let ville_rechercher = ville ? ville.name : ville;
    if(!Medecin_rechercher){
        Medecin_rechercher = "generaliste"
    }else {  
        if(Medecin_rechercher.trim() === ""){
            //   setMedecin({name: "medecin-generaliste"});
            Medecin_rechercher = "medecin-generaliste"
        }
    }if(!ville_rechercher){
        ville_rechercher="maroc";
    }else {
        if(ville_rechercher.trim() === ""){
            setVille({name: "maroc"})
            ville_rechercher="maroc";
        }
    }
      
      
      return props.history.push({
        pathname: `/recherche/${Medecin_rechercher}/${ville_rechercher}`,
    })
  }

  const selectPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords.latitude, position.coords.longitude, position);
    }, 

    
    );
  }

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
    <Container className={classes.searchContainer}>
        <div className={classes.searchContent}>
           <h1 className={classes.h1}> Réservez une consultation physique ou vidéo chez un professionnel de santé </h1>
           <div >
               <form className={classes.searchBar} onSubmit={submiting}>
                   <div className={classes.searchBarQuery}>
                       <div className="search">
                           <div className={classes.searchInputWrapper}>
                                <BsSearch className="searchbar-input-icon" />
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
                            </div>
                        </div>
                    </div>
                    <div className={classes.searchBarSubmit +" search"} >
                        <div className={classes.searchbarPlace}>
                            <div className={classes.searchbarPlaceInputWrapper}>
                                <div className={classes.searchInputWrapper} style= {{overflow: "hidden", borderRadius: 0,}}> 
                                    <MdLocationOn className="searchbar-input-icon" />
                                    <Autocomplete
                                    id="suggestion villes"
                                    options={cities}
                                    loading={LoadingCities}
                                    loadingText="Chargement des ville similaire"
                                    getOptionLabel={(option) => option.name ?  option.name  :  ""}
                                    onChange={(e, newInputValue) => setVille(newInputValue)} 
                                    value={ville}
                                    style={{ width: "100%", height:"60px" }}
                                    renderInput={(params) => <TextField {...params} placeholder="Où ?" />}
                                    />
                                    <button onClick={selectPosition} className={classes.searchButton} type="button">
                                      <span >  
                                          <BiCurrentLocation className="searchbar-input-icon" /> 
                                      </span>  
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button className={classes.searchSubmitButton} role="button" type="submit" >
                            <span className="dl-button-label">
                                <span className="searchbar-submit-button-label dl-text-transform-none">Rechercher</span>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>  
        
    </Container>
  );
}

SearchInput.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node
};

