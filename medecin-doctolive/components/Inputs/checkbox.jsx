import React from 'react'

export default function Checkbox(props){
    return(
        <label className="checkboxLabel"> 
        <input
            name={props.name}
            type="checkbox"
            checked={props.etatChecked}
            onChange={props.changed} />
              <span></span>
        {props.labelCheckbox}
        </label>

    )
} 