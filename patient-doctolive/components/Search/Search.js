

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
        backgroundColor:"#fff",
        borderRadius:5,
        
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'center',
        }
    },
    searchBarQuery:{
        "-ms-flex": "0 0 240px",
    
     
        position: "relative",
       
        width: "403px",
        marginLeft:10,

        [theme.breakpoints.down("sm")]: {
            flex: "0 0 100%",
            width: "100%",
        }
    },
 
    searchInputWrapper: {
  
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
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        width: "162px",
        height: "50px",
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

          
           <Col lg="10" md="10" className="no-padding-left" >
               <form className={classes.searchBar} onSubmit={submiting}>
                   <div className={classes.searchBarQuery+" with-vorder-right"}>
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
                        <span className={"text-btn-element"}>{locale === "ar" ? "Rechercher ":"Rechercher "}  </span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33854 12.3216C0.98099 12.3216 0.644884 12.1881 0.392043 11.9456C0.139228 11.7031 0 11.3806 0 11.0376C0 10.6947 0.139228 10.3722 0.392043 10.1297L4.52975 6.16051L0.392043 2.19136C0.139228 1.94884 0 1.62638 0 1.28341C0 0.940451 0.139228 0.617986 0.392043 0.375467C0.913974 -0.12518 1.76316 -0.125131 2.28506 0.375467L7.36924 5.25256C7.62205 5.49508 7.76128 5.81755 7.76128 6.16051C7.76128 6.50347 7.62205 6.82594 7.36924 7.06848L2.28504 11.9456C2.0322 12.1881 1.69606 12.3216 1.33854 12.3216ZM1.33854 0.490664C1.12682 0.490664 0.915099 0.56796 0.753917 0.722602C0.59775 0.872409 0.511746 1.07155 0.511746 1.28341C0.511746 1.49527 0.59775 1.69442 0.753917 1.84422L5.07253 5.98694C5.12051 6.03297 5.14748 6.09541 5.14748 6.16051C5.14748 6.22561 5.12051 6.28805 5.07253 6.33408L0.753917 10.4768C0.59775 10.6266 0.511746 10.8258 0.511746 11.0376C0.511746 11.2495 0.59775 11.4486 0.753917 11.5984C0.910084 11.7482 1.11771 11.8307 1.33854 11.8307C1.55937 11.8307 1.767 11.7482 1.92316 11.5984L7.00734 6.72134C7.1635 6.57154 7.24951 6.37239 7.24951 6.16053C7.24951 5.9487 7.1635 5.74953 7.00734 5.59972L1.92314 0.722602C1.76198 0.567985 1.55026 0.490664 1.33854 0.490664Z" fill="white"/>
</svg>

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
  