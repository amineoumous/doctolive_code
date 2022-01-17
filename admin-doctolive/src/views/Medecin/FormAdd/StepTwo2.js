
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Select, InputLabel, FormControl, MenuItem} from '@material-ui/core';

import { TextField, Collapse } from '@material-ui/core';


// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import FileUploader from "components/FileUploader/FileUploader.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import { getAllCategory } from 'services/Category/CategoryService'
import { useAuth } from "context/Auth";

import 'react-phone-input-2/lib/material.css'
import deliveryStyle from './../../../assets/jss/views/deleveryStyle';

import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group'; 
  
const useStylesStepTwo = makeStyles(deliveryStyle);

export default function StepTwo (props) {
    const {UserData} = useAuth();

    const classes = useStylesStepTwo();
    const [tag, setTag] = useState(props.data.tag);

    const [categorySelected, setCategorySeleted] = useState({sousCategory:[]});
    const [categories, setCategories] = useState([]);

    const [categoryError, setCategoryError] = useState(false);

   
    useEffect(() => {

        getAllCategory(UserData.token)
        .then((response) => {
            if(!response.data.error){
                if(response.data.categories !== undefined){
                    setCategories(response.data.categories)
                }
            }
        })
        .catch(err => {
            // console.log(err.response);
        });
        
        return () => {
            
        }
    }, []);

    useEffect(() => {
        // if(props.responseErrors.allWeek){
        //     setAllweekError(true);
        // }
        // if(props.responseErrors.vehicule){
        //     setVehiculeError(true);
        // }
       
        return () => {
            
        }
    }, [props.responseErrors]);
  


    const handleChange = (e) => {
        let target = e.target;
        props.setData(data => { return {...data, [target.name] : target.value}});
    }

    const validateField = (field) => {
        switch (field) {
            case "tag":
                // props.setData(data => { return {...data, tag}});
                break;
            case "tag2":
                // props.setData(data => { return {...data, tag2}});
                break;
                case "description":
                    // props.setData(data => { return {...data, description}});
                    break;
            case "sousCategory":
                // props.setData(data => { return {...data, sousCategoryId}});
                break;
            case "categorie":
                // let index = categories.findIndex(ct => ct.id === categoryId);
                // props.setData(data => { return {...data, categoryId}});
                // if(index === -1){
                //     setCategoryError(true)
                // }
                // else {
                //     setCategoryError(false)
                // }
                break;
            default:
                break;
        }
    }
  

    return(
        <GridContainer >
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <TextField
                    value= {props.data.tag}
                    onBlur={(e) => validateField(e.target.name)}
                    onChange={ handleChange}
                    helperText="petit mot à afficher en desus de l'image"
                    margin="normal"
                    fullWidth
                    label="Premier tag à afficher"
                    name="tag"
                    autoComplete="block"
                    autoFocus
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <TextField
                    value= {props.data.tag2}
                    onBlur={(e) => validateField(e.target.name)}
                    onChange={handleChange}
                    helperText="petit mot à afficher en desus de l'image"
                    margin="normal"
                    fullWidth
                    label="Deuxième tag à afficher"
                    name="tag2"
                    autoComplete="block"
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
                <TextField
                    value= {props.data.description}
                    onBlur={(e) => validateField(e.target.name)}
                    onChange= {handleChange}
                    helperText= "quelque mot pour mieux déscriver la méthodologie du travail du magasin"
                    margin= "normal"
                    fullWidth
                    multiline
                    label= "Description sur le magasin"
                    name= "description"
                    autoComplete= "block"
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth={true} error= {false} >
                    <InputLabel > Categorie du magasin </InputLabel>
                        <Select
                            fullWidth={true}
                            value={props.data.categoryId}
                            onChange={ (e) => {handleChange(e); setCategorySeleted(categories.find(cat => cat.id === e.target.value) )}}
                            onBlur={(e) => validateField('categorie')}
                            name="categoryId"
                        >
                            {!categories ? null : categories.map((ct, index ) => {
                                return <MenuItem key={index} value={ct.id}>{ct.name}</MenuItem>
                            })}
                        </Select>
                </FormControl>
                <Collapse in={categoryError}>
                    <GridItem xs={12} sm={12} md={12}>
                        <SnackbarContent
                            message= "Vous devez affecter le magasins à une catégorie" 
                            close
                            color="danger"
                        />
                    </GridItem>
                </Collapse>
                <TransitionGroup className="mt-4">
                { !categorySelected.sous_categories ?
                null :
                categorySelected.sous_categories.length > 0 ?
                    <CSSTransition
                        key={"sous_category"}
                        timeout={500}
                        classNames="listing"
                        
                    >
                        <FormControl fullWidth={true} error= {false} >
                            <InputLabel id="demo-simple-select-label"> Choisir une sous catégorie </InputLabel>
                            <Select
                                fullWidth={true}
                                value={props.data.sousCategoryId}
                                onChange={ handleChange}
                                onBlur={(e) => validateField('sousCategory')}
                                name="sousCategoryId"
                            >
                                {  categorySelected.sous_categories
                                    .map((sous_category) => {
                                        return  <MenuItem key={sous_category.id} value={sous_category.id}>{sous_category.name}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </CSSTransition>
                    : null 
                }
              </TransitionGroup>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <FileUploader
                    label="ajouter une image pour le background"
                    name= "bgImage"
                    id="custumFile"
                    uploadedFile={props.uploadedFile}
                    onDelete={props.removeBgImage}
                    setUploadedFile={props.fileHandling}
                />
                <Collapse in={props.responseErrors.bgImage}>
                    <GridItem xs={12} sm={12} md={12}>
                        <SnackbarContent
                            message={props.responseErrors.bgImage === "Invalid value" ? "Vous devez choisir une image pour le maasin" : "un probléme inconnue est survenue lors de l'insertion de l'image"}
                            close
                            color="danger"
                        />
                    </GridItem>
                </Collapse>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <FileUploader
                    label="ajouter un logo"
                    name= "logo"
                    id="logo-magasin"
                    uploadedFile={props.uploadedLogo}
                    onDelete={props.removeLogo}
                    setUploadedFile={props.selectLogo}
                />
                <Collapse in={props.responseErrors.bgImage}>
                    <GridItem xs={12} sm={12} md={12}>
                        <SnackbarContent
                            message={props.responseErrors.bgImage === "Invalid value" ? "Vous devez choisir une image pour le maasin" : "un probléme inconnue est survenue lors de l'insertion de l'image"}
                            close
                            color="danger"
                        />
                    </GridItem>
                </Collapse>
            </GridItem>
           
          </GridContainer>
    )
}
