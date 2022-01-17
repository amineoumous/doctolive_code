import React, {useState} from "react";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import {BiUpload} from 'react-icons/bi';
import {AiOutlineDelete} from 'react-icons/ai';

import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group'; 
  
import styles from "../../styles/fileUploader.module.css";

const useStyles = makeStyles(styles);

export default function FileUploader(props) {
    const [inputKey, setInputKey] = useState(0);


    const fileHandling = (event) => {
        event.preventDefault()
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        if(file !== undefined){
            if(file.type.split('/')[0] === "image" ){
                setInputKey(inputKey => inputKey+1);
                props.setUploadedFile({filePath: reader.result, realName: file.name, type: 'file', fileType: file.type.split('/')[0]  });
            }
        }
        };
    }
    

  return (
    <div className={classes.container} >
        <input key={inputKey} type="file" id={props.id} name={props.name} className={classes.input} onChange={fileHandling} />
        <label htmlFor={props.id} className={classes.label} > <BiUpload /> {props.label} </label>
        <TransitionGroup className="w-100">
            {props.uploadedFile.fileType === "image" ?
            <CSSTransition
                key={"index"}
                timeout={500}
                classNames="listing"
            >
                <div className= {classes.imageContainer}> 
                    <img height="60px" src={props.uploadedFile.filePath} /> 
                    <p> {props.uploadedFile.realName} </p>
                    <span onClick= {props.onDelete} > <AiOutlineDelete /> </span>
                </div>   
            </CSSTransition>
            : null 
            }
        </TransitionGroup>
    </div>
  );
}

FileUploader.propTypes = {
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  name: PropTypes.string,
  label: PropTypes.string,
  onDelete: PropTypes.func,
  setUploadedFile: PropTypes.func,
  inputKey: PropTypes.number,
  uploadedFile: PropTypes.object,
};
