

import React, {useState, useEffect} from "react";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { Col } from 'react-bootstrap';
// @material-ui/icons

import Link from 'next/link'
import {BsSearch} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"
import {BiCurrentLocation} from "react-icons/bi"

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import fetch from 'unfetch'

import Config from './../../EndPoint'

import { useRouter } from 'next/router'


const style = theme=>( {
    endAdornment:{
        display:"none",
        "& .MuiAutocomplete-endAdornment": {
            display:"none"
        }
    },
    searchContainer: {
        paddingTop: "120px",
    },
    searchContent:{
        zIndex: 5,
    },
 
    searchBar:{
        display: "flex",
        flexWrap: "wrap",
        
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'center',
        }
    },
    searchBarQuery:{
        "-ms-flex": "0 0 240px",
        flex: "0 0 240px",
        marginRight: "12px",
        position: "relative",
        marginBottom: 12,
        width: "240px",
        [theme.breakpoints.down("sm")]: {
            flex: "0 0 100%",
            width: "100%",
        }
    },
 
    searchInputWrapper: {
        borderRadius: "8px",
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
        },
        '& .searchbar-input-icon-ar' : {
            position: "absolute",
            top: 18,
            right: 16,
            width: 24,
            height: 24,
            pointerEvents: "none",
            fill: "#7791a2",
        }
    },
    
    searchbarPlace: {
        "-ms-flex":" 0 0 490px",
        flex:" 0 0 490px",
        marginRight: "12px",
        position: "relative",
        width: "490px",
        [theme.breakpoints.down("sm")]: {
            flex: "0 0 100%",
            width: "100%",
            marginBottom: 12
        }
    },

    searchButton: {
        cursor: "pointer",
        position: "absolute",
        width: "45px",
        right: 0,
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
        borderRadius: " 8px",
        outline: "none",
        boxShadow: "none",
        marginRight: 12,
        width: "46px",
       "-ms-flex": "0 0 46px",
        flex: "0 0 46px",
        height: "60px",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            marginBottom: 12
        }
    },
   
})
const useStyles = makeStyles(style);

export default function SearchInput({content, locale}) {
  const classes = useStyles();
  const router = useRouter()

  const [medecin, setMedecin] = useState({});
  const [ville, setVille] = useState({});
  const [loadingMedecin, setLoadingMedecin] = useState(false);
  const [isSearched, setIsSerached] = useState(false);
  const [LoadingCities, setLoadingCities] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchFetched, setSearchFetched] = useState([]);
  const [cities, setCities] = useState([]);


  useEffect( async () => {
      try {
          
        const res =  await fetch(`${Config.BACKEND_URL}/medecin/search/specialite/${inputValue}`, {
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
    
            },
        })
        const data = await res.json();
        if(data.speciality){
            setSearchFetched([...data.speciality, ...data.medecins]);
        }

        
      } catch (error) {
          
      }
   
    return () => {
        
    }
  }, [inputValue])

  useEffect( async () => {
      try {
          
        const res =  await fetch(`${Config.BACKEND_URL}/city`, {
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
    
            },
        })
        const data = await res.json();
        setCities(data.cities);
        
      } catch (error) {
          
      }
  

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
            Medecin_rechercher = "medecin-generaliste"
        }
    }

    if(!ville_rechercher){
        ville_rechercher="maroc";
    }else {
        if(ville_rechercher.trim() === ""){
            // setVille({name: "maroc"})
            ville_rechercher="maroc";
        }
    }

      return router.push({
        pathname: `/recherche/${Medecin_rechercher}/${ville_rechercher}`,
    })
  }

  const selectPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
    }, 
    );
  }

  const handleSearchSpecialite = (e, newInputValue) => {
    setMedecin(newInputValue)
  }
  const handleSearchSpecialitea = (e, newInputValue) => {
    if(newInputValue.length >0) {
        setInputValue(newInputValue);
    }else {

    }
  }
 
  
  return (
        
        <div className={classes.searchContent}>

          
           <Col lg="12" md="12" >
               <form className={classes.searchBar} onSubmit={submiting}>
                   <div className={classes.searchBarQuery}>
                           <div className={classes.searchInputWrapper +" search"}>
                                <BsSearch className={locale === "ar" ? "searchbar-input-icon-ar":"searchbar-input-icon"} />
                               <Autocomplete
                               onInputChange={handleSearchSpecialitea}
                               loading={loadingMedecin}
                               noOptionsText={isSearched? content.noOption : content.noOption2}
                               groupBy={(option) => option.name? "specialite" : "medecin"}
                                id="suggestion-medecin"
                                loadingText={content.loading}
                                options={searchFetched}
                                debug={true}
                                getOptionLabel={(option) => option.nom? option.nom + " " + option.prenom + " " + option.email + " " + option.phone : option.name ? option.name : "" }
                                renderOption={(option) => (
                                    option.nom ?
                                        <React.Fragment>
                                            <Link  href={`/doctor/${option.id}`}>
                                                <a className="d-flex w-100">
                                                    {option.image ? <span className="searchbar-result-profile-avatar "><img className="img-fluid" src={`${Config.BACKEND_URL}/${option.image}`} /></span> : null }
                                                    <span> Dr. {option.nom} {option.prenom} </span> 
                                                </a>
                                                
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
                                renderInput={(params) => <TextField {...params} placeholder={content.recherchelabel} />}
                                />
                            </div>
                    </div>
                    <div className={classes.searchbarPlace}>
                            <div className={classes.searchInputWrapper +" search"} style= {{overflow: "hidden",}}> 
                                <MdLocationOn className={locale === "ar" ? "searchbar-input-icon-ar":"searchbar-input-icon"}  />
                                <Autocomplete
                                id="suggestion-villes"
                                options={cities}
                                loading={LoadingCities}

                                loadingText={content.cityLoading}
                                getOptionLabel={(option) => option.name ?  option.name  :  ""}
                                onChange={(e, newInputValue) => setVille(newInputValue)} 
                                value={ville}
                                style={{ width: "100%", height:"60px" }}
                                renderInput={(params) => <TextField {...params} placeholder={content.citylabel} />}
                                />
                                <button onClick={selectPosition} className={classes.searchButton} type="button">
                                    <span >  
                                        <BiCurrentLocation className={locale === "ar" ? "searchbar-input-icon-ar":"searchbar-input-icon"}  /> 
                                    </span>  
                                </button>
                            </div>
                    </div>                       
                    <button className={classes.searchSubmitButton + " btn btn-submit"} role="button" type="submit" >  
                        <span > <BsSearch className={locale === "ar" ? "searchbar-input-icon-ar":"searchbar-input-icon"}  /></span>
                    </button>
                </form>
            </Col>
        </div>  
        
  );
}

SearchInput.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node
};


// SearchInput.getInitialProps = async (ctx) => {
//     const res = await fetch(`${Config.BACKEND_URL}/city`);
//     console.log(res)
//     if(res.status === 404) return { villes: [] }
//     const json = await res.json()
//     return { villes:json.cities }
//   }
  