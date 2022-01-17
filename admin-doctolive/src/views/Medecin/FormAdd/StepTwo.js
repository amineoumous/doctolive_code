import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Select, InputLabel, FormControl, MenuItem} from '@material-ui/core';

import { TextField, Collapse } from '@material-ui/core';


// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import FileUploader from "components/FileUploader/FileUploader.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

// import { getAllCategory } from 'services/Category/CategoryService'
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

    const [categoryId, setCategory] = useState(props.data.categoryId);
    const [categorySelected, setCategorySeleted] = useState({sousCategory:[]});
    const [categories, setCategories] = useState([]);
    const [sousCategoryId, setSousCategory] = useState(props.data.sousCategoryId);

    const [tag, setTag] = useState(props.data.tag);
    const [tag2, setTag2] = useState(props.data.tag2);
    const [description, setDescription] = useState(props.data.description);

    const [categoryError, setCategoryError] = useState(false);

    const [uploadedFile, setUploadedFile] = useState(props.uploadFile ? props.uploadFile : {});
    const [uploadedLogo, setUploadedLogo] = useState(props.uploadLogo? props.uploadLogo : {});

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
  
    const fileHandling = (data) => {
        setUploadedFile(data);
        props.setUploadedFile(data);
    }
    const removeBgImage = () =>{
        setUploadedFile({});
    }

    const selectLogo = (data) => {

        setUploadedLogo(data);
        props.setUploadedLogo(data);
        props.setShowConfirmation(true);
    }
    const removeLogo = () =>{
        setUploadedLogo({});
    }

    const validateField = (field) => {
        switch (field) {
            case "tag":
                props.setData(data => { return {...data, tag}});
                break;
            case "tag2":
                props.setData(data => { return {...data, tag2}});
                break;
                case "description":
                    props.setData(data => { return {...data, description}});
                    break;
            case "sousCategory":
                props.setData(data => { return {...data, sousCategoryId}});
                break;
            case "categorie":
                let index = categories.findIndex(ct => ct.id === categoryId);
                props.setData(data => { return {...data, categoryId}});
                if(index === -1){
                    setCategoryError(true)
                }
                else {
                    setCategoryError(false)
                }
                break;
            default:
                break;
        }
    }
  

    return(
        <GridContainer >
            <GridItem xs={12} sm={12} md={6} lg={6}>
                <TextField
                    value= {tag}
                    onBlur={(e) => validateField(e.target.name)}
                    onChange={(e) => setTag(e.target.value)}
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
                    value= {tag2}
                    onBlur={(e) => validateField(e.target.name)}
                    onChange={(e) => setTag2(e.target.value)}
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
                    value= {description}
                    onBlur={(e) => validateField(e.target.name)}
                    onChange= {(e) => setDescription(e.target.value)}
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
                            value={categoryId}
                            onChange={ (e) => {setCategory(e.target.value); setCategorySeleted(categories.find(cat => cat.id === e.target.value) )}}
                            onBlur={(e) => validateField('categorie')}
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
                                value={sousCategoryId}
                                onChange={ (e)=> setSousCategory(e.target.value)}
                                onBlur={(e) => validateField('sousCategory')}
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
                    uploadedFile={uploadedFile}
                    onDelete={removeBgImage}
                    setUploadedFile={fileHandling}
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
                    uploadedFile={uploadedLogo}
                    onDelete={removeLogo}
                    setUploadedFile={selectLogo}
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
