
import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

function InputIcone(props) {
 
      let {Icone, ...others} = props;
    return (
        <TextField
        {...others}
        width= "200"
        fullWidth
        InputProps={{
        startAdornment: (
            <InputAdornment position="start">
            <Icone color="#1ab9b9" />
            </InputAdornment>
          ),
        }}
        />
    );
  
  }
  export default InputIcone