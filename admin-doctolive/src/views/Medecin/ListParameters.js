import React, {useEffect, useState} from 'react';


// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";

import StyledCheckbox from 'components/Checkbox/Checkbox'

import { getCity } from 'services/Ville/VilleService'
import { getAllElement } from 'services/Speciality/SpecialityService'


export default function ListParameters(props) {
    const [villes, setVilles] = useState([ ]);
    // const [categories, setCategories] = useState([]);

    const [state, setState] = useState({
        unblocked: true,
        teleactive: true,
        teleinactive: true,
        invalidate:true,
        validate: true,
        cities:{},
        categories: {}
    });
    const [changedState, setChangedState] = useState(false)

    const handleChangeCity  = (e) => {
        let field = e.target;

        if(field !== null){
            setState(state => {return {...state, cities:{ ...state.cities, [field.name] :  field.checked } }})
        }
        setChangedState(true);
    }

    // const handleChangeCategory  = (e) => {
    //     let field = e.target;

    //     if(field !== null){
    //         setState(state => {return {...state, categories:{ ...state.categories, [field.name] :  field.checked } }})
    //     }
    //     setChangedState(true);
    // }

    const handleChange = (e) => {
        let field = e.target;

        if(field !== null){
            setState(state => {return {...state, [field.name] :  field.checked  }})
        }
        setChangedState(true);
    }

    const rerenderElement = () => {
        props.changeElementToShow(state);
        setChangedState(false);
    }

    useEffect(() => {
        getCity()
        .then((response) => {
            if(!response.data.error){
                if(response.data.cities !== undefined){
                    response.data.cities.map(city => {
                        setState((state) => {
                            return {...state, cities:{ ...state.cities, [city.name] :  true } }
                        })
                    })
                    setVilles(response.data.cities)
                }
            }
        })
        .catch(err => {
            // console.log(err.response);
        });

        // getAllElement()
        // .then((response) => {
        //     if(!response.data.error){
        //         if(response.data.categories !== undefined){
        //             response.data.categories.map(element => {
        //                 setState((state) => {
        //                     return {...state, categories:{ ...state.categories, [element.name] :  true } }
        //                 })
        //             })
        //             setCategories(response.data.categories)
        //         }
        //     }
        // })
        // .catch(err => {
        //     // console.log(err.response);
        // });
        

        return () => {
            
        }
    }, [])

    return (
        <GridContainer >
        <GridItem xs={12} sm={12} md={6} xl={4}>
            <label> Afficher medecin selon la validité : </label>
            <div>
                <StyledCheckbox checked={state.validate} onChange={handleChange} label="Medecin validé" name="validate" />
                <StyledCheckbox checked={state.invalidate} onChange={handleChange} label="Medecin non validé" name="invalidate" />
            </div>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={6} xl={4} >
            <label> Afficher medecin selon la specialité : </label>
            <div>
            {categories.map((category, index) => {
                    return(
                        <StyledCheckbox key={index} checked={state.categories[category.name]} onChange={handleChangeCategory} label={category.name} name={category.name} />
                    )
                })}
            </div>
        </GridItem> */}
        <GridItem xs={12} sm={12} md={6} xl={4} >
            <label> Afficher medecin selon la disponibilité de la téléconsultation : </label>
            <div>
                <StyledCheckbox checked={state.teleactive} onChange={handleChange} label="Téléconsultation activé" name="teleactive" />
                <StyledCheckbox checked={state.teleinactive} onChange={handleChange} label="Téleconsultation non activé" name="teleinactive" />
            </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} xl={4} >
            <label> Afficher medecin selon la ville : </label>
            <div>
                {villes.map((ville, index) => {
                    return(
                        <StyledCheckbox key={index} checked={state.cities[ville.name]} onChange={handleChangeCity} label={ville.name} name={ville.name} />
                    )
                })}
            </div>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer justify="center" alignItems="center" >
            <Button disabled={!changedState} onClick={rerenderElement} round color="primary"> rafraichir l'affichage  </Button>
          </GridContainer>
        </GridItem>
      </GridContainer>
    );
}
