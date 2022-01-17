import React,{useState,useMemo, useEffect, useCallback} from 'react'

import {Row, Col, Collapse, Alert} from 'react-bootstrap'

import  SubmitButton  from 'components/CustomButtons/SubmitButton.js';

// import AddIcon from '@material-ui/icons/Add';

import {useDropzone} from 'react-dropzone'

import { useAuth } from "context/Auth";
import Config from 'Config'
import {Typography} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/components/fileUpladerStyle.js";

import FileRejectedIcon from 'assets/img/file-rejected.png'

import {uploadImages, deleteImage} from 'services/uploads/uploadsImages'

import {TiDeleteOutline} from 'react-icons/ti'
const useStyles = makeStyles(styles);

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    cursor: 'pointer',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

  
export default function Images(props) {
    const {UserData} = useAuth();
    const classes = useStyles();

    const [etatRequest, setEtatRequest] = useState({success: false, sending:false, donneIncorrect: false});
    const [files, setFiles] = useState([])
    const [rejectedFiles, setRejectedFiles] = useState([]);
    const [savedPictures, setSavedPictures] = useState([]);
    const [canceledPictures, setCanceledPictures] = useState([]);

    useEffect(() => {
        if(props.images){
            setSavedPictures(props.images)  
        }
              
        return () => {
            
        }
    }, [props.images])


    const handleSubmit = async (e) =>{
        e.preventDefault();
        setEtatRequest(oldData => {return {...oldData, sending:true}});

        let uploadingFile = await uploadImages(files, UserData.token);
        
        if(!uploadingFile.error){
            setEtatRequest(oldData => {return {...oldData, sending:false, success:true}});

            if(uploadingFile.savedPictures.length> 0){
                setSavedPictures(uploadingFile.savedPictures);
                
            }
            if (uploadingFile.canceledData.length > 0) {
                uploadingFile.canceledData.map((dd) => {
                    
                    setCanceledPictures(oldData => [...oldData, files[dd.index]]);
                })                
                setFiles([])
                setRejectedFiles([])
            }else {
                setFiles([])
                setRejectedFiles([])
            }
        }else {
            setEtatRequest(oldData => {return {...oldData, sending:false, success:false, donneIncorrect: true}});
        }
       
    }

    const deleteImageHandle =  (file) => {

        deleteImage(file, UserData.token )
        .then(response => {

            let index = savedPictures.findIndex(fl => fl.id === file.id);

            setSavedPictures(oldFiles => {
                let clone = [...oldFiles]
                clone.splice(index, 1);
                return (clone)
            })
        })
        .catch(error => {

            
        })
    }
    const removeImageHandle =  (file) => {

    

        let index = files.findIndex(fl => fl.id === file.id);

        setFiles(oldFiles => {
            let clone = [...oldFiles]
            clone.splice(index, 1);
            return (clone)
        })
      
    }

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        // console.log(rejectedFiles)
        rejectedFiles.map(rejectedFile => {
            // console.log(rejectedFile.file.type)

            if(rejectedFile.file.type.split('/')[0] === "image"){
                const reader = new FileReader();
                reader.readAsDataURL(rejectedFile.file);
                reader.onloadend = () => {                    
                    let newFile =  {filePath: reader.result, realName: rejectedFile.file.name, type: 'file', fileType: rejectedFile.file.type.split('/')[0]  }
                    setRejectedFiles(existing => [...existing, {file: newFile, errors: rejectedFile.errors}])          
                }
            }else{
                let newFile =  { realName: rejectedFile.file.name, type: 'file', fileType: rejectedFile.file.type.split('/')[0]  }
                setRejectedFiles(existing => [...existing, {file: newFile, errors: rejectedFile.errors}])

            }
        })

        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {                    
                let newFile =  {filePath: reader.result, realName: file.name, type: 'file', fileType: "image"  }
                setFiles(existing => [...existing, newFile])          
            }
        })      
    }, [])
    const { getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({onDrop, accept: 'image/jpeg, image/png, image/jpg',  maxFiles: 6 - savedPictures.length})

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isDragActive,
        isDragReject,
        isDragAccept
      ]);

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            
                <Col>
                    {   savedPictures.length > 0 ?
                        <Row className="mb-3">
                            <Typography variant="h5" component="h5" > Vos images déjà enregistrer </Typography>
                        </Row>
                        : null
                    }
                    {
                        savedPictures.length > 0 ?
                        <Row className="images-saved">
                            { savedPictures.map((file, index) => {
                                    return (
                                        <Col className="mt-5" lg="2" md="4" xs="6" key={index}>
                                            <div className="image-saved">
                                                <img src={`${Config.BACKEND_URL}/${file.path}`} alt="..." className="img-fluid" />
                                                <span onClick={() => deleteImageHandle(file)} className="delete-button"> <TiDeleteOutline /> </span>
                                            </div>
                                        </Col>
                                    )
                            })
                            }
                        </Row>
                        : null
                    }
                    
                    
                    <Row className="align-items-center justify-content-around mt-4 ">
                       <div {...getRootProps({style, className:"dropzone"})}>
                            <input {...getInputProps()} />
                            <p>Cliquer ici pour sélecrtionné les image ou bien drag and drop.</p>
                            <p> NB: Vous pouvez ajouter 6 images maximum, {savedPictures.length > 0 ?  `vous avez déjà ${savedPictures.length} sur nos serveurs et il vous reste ${6 - savedPictures.length} maximum que vous pouvez séléctionné`: "vous n'avez encore aucun image vous pouvez séléctionnez j'usqu'à 6 images" } </p>
                        </div>
                    </Row>

                    {   canceledPictures.length > 0 ?
                        <Row className="mt-5">
                            <Typography variant="h5" component="h5" color="error"> Ces images n'on pas pus s'enregistrer au sein de nos serveur. essayer ultériérement où bien essayer d'autre images </Typography>
                        </Row>
                        : null
                    }
                    {
                        canceledPictures.length > 0 ?
                        <Row className="images-canceled">
                            { canceledPictures.map((file, index) => {
                                    return (
                                        <Col className="mt-5" lg="2" md="4" xs="6" key={index}>
                                            <div className="image-canceled">
                                                <img src={file.filePath} alt={file.realName} className="img-fluid" />
                                            </div>
                                            <div>
                                            <Typography color="error" > Le serveur n'a pas pus suporter ces fichier </Typography>
                                            </div>
                                        </Col>
                                    )
                            })
                            }
                        </Row>
                        : null
                    }
                    <Row className="align-items-center justify-content-around mt-4 ">
                        {
                           files.map((file, index) => {
                                return (
                                   <Col className="mt-5" lg="2" md="4" xs="6" key={index}>
                                       <div className="selecting-img-container">
                                           <img src={file.filePath} alt={file.realName} className="img-fluid" />
                                           <span onClick={() => removeImageHandle(file)} className="delete-button"> <TiDeleteOutline /> </span>
                                       </div>
                                       <div>
                                           <p className="mt-3"> {file.realName} </p>
                                           
                                       </div>
                                   </Col>
                                )
                           })
                        }
                    </Row>

                    

                    {   rejectedFiles.length > 0 ?
                        <Row className="mt-5">
                            <Typography variant="h5" component="h5" color="error" > Fichier non accépter ils ne seront pas enregistrer sur le serveur </Typography>
                        </Row>
                        : null
                    }
                    <Row className="align-items-center mt-4 ">
                        {
                           rejectedFiles.map((rejectedFile, index) => {
                                return (
                                   <Col className="" lg="2" md="4" xs="6" key={index}>
                                       <div className="rejected-img-container">
                                           <img src={FileRejectedIcon} alt={"fichier rejeter"} className="img-fluid" />
                                       </div>
                                       <div>
                                           <div className="mt-3"> 
                                            { rejectedFile.errors.map((err, ind) => {
                                               return(
                                                <div key={ind}>
                                                    {err.code==="file-invalid-type" ? <Typography color="error" > Ce fichier <span className="type-file-span"> {rejectedFile.file.realName} </span> est de type <span className="type-file-span"> {rejectedFile.file.fileType} </span> . Seulement les images <span className="type-file-span">png, jpg et jpeg </span>  sont accépter </Typography> : ""}
                                                </div>
                                               )
                                            })} 
                                           </div>
                                       </div>
                                   </Col>
                                )
                           })
                        }
                    </Row>

                    <Row>
                        <Collapse in={ etatRequest.donneIncorecte}>
                            <div>
                                <Alert  variant="danger">
                                    les information sont incorrecte
                                </Alert>
                            </div>
                        </Collapse>
                    </Row>

                    <Row>
                        <Collapse in={etatRequest.success}>
                            <div >
                                <Alert  variant="success">
                                    Votre information personnel sont mis à jours avec succées
                                </Alert>
                            </div>
                        </Collapse>
                    </Row>

                    <Row className="align-items-center justify-content-around mt-4 ">
                        <SubmitButton sending={etatRequest.sending} successRequest={etatRequest.success} type="submit" color="primary"> Enregistrer </SubmitButton>
                    </Row>
                </Col>
                
            </form>
    )
}

