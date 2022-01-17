import React from 'react';


// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";

import StyledCheckbox from 'components/Checkbox/Checkbox'


export default function ListParameters(props) {
    const [state, setState] = React.useState({
        unblocked: true,
        validate: true,
        allDay: true,
        onlyNight: true,
        allWeek: true,
        onlyWeekend: true,
        moto: true,
        bycicle : true,
    });
    const [changedState, setChangedState] = React.useState(false)

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

    return (
        <GridContainer >
        <GridItem xs={12} sm={12} md={6} xl={4}>
            <label> Afficher patients selon la validité : </label>
            <div>
                <StyledCheckbox checked={state.validate} onChange={handleChange} label="Patients validé" name="validate" />
                <StyledCheckbox checked={state.invalidate} onChange={handleChange} label="Patients non validé" name="invalidate" />
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
