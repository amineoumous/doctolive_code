import React, {useState} from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from 'components/Checkbox/Checkbox';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  select: {
      width: 300,
  }
  
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelect(props) {
    const [isAllChecked, setAllCheckek] = useState(true)
    const classes = useStyles();

    const handleChange = (event) => {
        if(event.target.value.indexOf("all") > -1){
            props.setCategoriesToShow(props.categories);
        }else {
            props.setCategoriesToShow(event.target.value);
        }
        setAllCheckek( props.categoriesToShow.length === props.categories.length )
        
    };

    return (
     
      <FormControl className={classes.formControl}>
        <InputLabel style={{width: "100%", textAlign: "left"}} >Choisir les catégorie à afficher</InputLabel>
        <Select
            multiple
            className={classes.select}
            value={props.categoriesToShow}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => { let string = ""; selected.map((slct, index) =>  {string += slct.name +" "}); return string }}
            MenuProps={MenuProps}
        >
          {props.categories && props.categories.map((category) => {
            const isChecked = props.categoriesToShow.findIndex( cat => cat.id === category.id) > -1;

            return (
              <MenuItem key={category.id} value={category}>
                <Checkbox name="active" onChange={() => {}} checked={isChecked} />
                <ListItemText primary={category.name} />
              </MenuItem>
            )
          })}
            <MenuItem key="all" value="all">
              <Checkbox name="active" onChange={() => {}} checked={isAllChecked} />
              <ListItemText primary="all" />
            </MenuItem>
        </Select>
      </FormControl>
    );
}
