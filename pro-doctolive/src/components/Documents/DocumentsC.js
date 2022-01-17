import React,{useState,useMemo, useEffect, useCallback} from 'react'

import {Row, Col, Collapse, Alert} from 'react-bootstrap'

import  SubmitButton  from 'components/CustomButtons/SubmitButton.js';

// import AddIcon from '@material-ui/icons/Add';

import {useDropzone} from 'react-dropzone'

import { useAuth } from "context/Auth";
import Config from 'Config'
import {Typography} from '@material-ui/core'


import FileRejectedIcon from 'assets/img/file-rejected.png'

import {uploadDocuments, deleteDocument} from 'services/uploads/uploadsImages'

import AcceptedFile from 'assets/img/fileaccepted.png'
import {TiDeleteOutline} from 'react-icons/ti'

import ReactFancyBox from 'react-fancybox'
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

    const [etatRequest, setEtatRequest] = useState({success: false, sending:false, donneIncorrect: false});
    const [files, setFiles] = useState([])
    const [rejectedFiles, setRejectedFiles] = useState([]);
    const [savedPictures, setSavedPictures] = useState([]);
    const [canceledPictures, setCanceledPictures] = useState([]);

    useEffect(() => {
        if(props.documents){
            setSavedPictures(props.documents)  
        }
              
        return () => {
            
        }
    }, [props.documents])

    useEffect(() => {
        if(props.socket){
            props.socket.on('newDocuments', (response)=> { 
                if(response.consultationId === props.consultation.id){
                    setSavedPictures( oldPic => [...oldPic, ...response.uploadedFiles]);
                }
            });  

        }
       
              
        return () => {
            if(props.socket){
                props.socket.removeAllListeners('newDocuments')
            }
        }
    }, [props.socket])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setEtatRequest(oldData => {return {...oldData, sending:true}});

        let uploadingFile = await uploadDocuments(files, UserData.token, props.consultation );

        if(!uploadingFile){
            setEtatRequest(oldData => {return {...oldData, sending:false, success:false, donneIncorrect: true}}); 
        } else if(!uploadingFile.error){
            setEtatRequest(oldData => {return {...oldData, sending:false, success:true}});

            if(uploadingFile.savedPictures.length> 0){
                setSavedPictures(oldFile => [...oldFile, ...uploadingFile.savedPictures])
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
            props.socket.emit('newDocuments', { uploadedFiles: uploadingFile.savedPictures , consultationId: props.consultation.id, selectedUser:  "p" + props.consultation.patient.id}, (response)=> { });  
        }else {
            setEtatRequest(oldData => {return {...oldData, sending:false, success:false, donneIncorrect: true}});
        }
    }

    const deleteImageHandle = async (file) => {

        let response = await fetch(`${Config.BACKEND_URL}/upload/document`, {
            method: 'DELETE',
            body: JSON.stringify({path: file.path, id: file.id}),
            headers: {
              'Accept': 'application/json', 
              'Content-Type': 'application/json',
              'Authorization': `token ${UserData.token}`,
            },
        });

        response.json()
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
        rejectedFiles.map(rejectedFile => {
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
                let newFile =  {filePath: reader.result, realName: file.name, type: 'file', fileType: "image", kind: file.type  }
                setFiles(existing => [...existing, newFile])          
            }
        })      
    }, [])

    const { getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({onDrop, accept: 'image/jpeg, image/png, image/jpg, application/pdf'})

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
                            <Typography variant="h5" component="h5" > Documents déjà partager dans cette consultation </Typography>
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
                                            {file.type === "application/pdf" ?
                                            <a href={Config.BACKEND_URL + file.path} download={file.name} target="_blank" rel="noopener noreferrer">  <img src={AcceptedFile} alt="..." className="img-fluid" /> </a>
                                            :
                                            <ReactFancyBox
                                                thumbnail={`${Config.BACKEND_URL}${file.path}`}
                                                showCloseBtn={true}
                                                className="img-fluid"
                                                image={`${Config.BACKEND_URL}${file.path}`}/>
                                            }
                                            <span onClick={() => deleteImageHandle(file)} className="delete-button"> <TiDeleteOutline /> </span>                                            
                                            {/* <img src={file.type === "application/pdf" ? AcceptedFile :`${Config.BACKEND_URL}${file.path}`} alt="..." className="img-fluid" />
                                            <span onClick={() => deleteImageHandle(file)} className="delete-button"> <TiDeleteOutline /> </span> */}
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        : null
                    }
                    {
                        props.consultation?.active ?
                        <Row className="align-items-center justify-content-around mt-4 ">
                        <div {...getRootProps({style, className:"dropzone"})}>
                                <input {...getInputProps()} />
                                <p>Glisser déposer des fichiers ici ou</p> <h4> PARCOURIR SUR MON ORDINATEUR </h4>
                            </div>
                        </Row>
                        : 
                        <Row className="align-items-center justify-content-around mt-4 ">
                        <div className="dropzone">
                                
                                <p> Cette consultation est términer vous pouvez plus envoyer des documents </p>
                            </div>
                        </Row>
                    }   
                    
                    

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
                                   <Col className="mt-5" lg="6" md="6" xs="6" key={index}>
                                       <div className="selecting-img-container">
                                           <img src={ file.kind === "application/pdf" ? AcceptedFile : file.filePath } alt={file.realName} className="img-fluid" />
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
                                   <Col className="" lg="6" md="12" xs="12" key={index}>
                                       <div className="rejected-img-container">
                                           <img src={FileRejectedIcon} alt={"fichier rejeter"} className="img-fluid" />
                                       </div>
                                       <div>
                                           <div className="mt-3"> 
                                            { rejectedFile.errors.map((err, ind) => {
                                               return(
                                                <div key={ind}>
                                                    {err.code==="file-invalid-type" ? <Typography color="error" > Ce fichier <span className="type-file-span"> {rejectedFile.file.realName} </span> est de type <span className="type-file-span"> {rejectedFile.file.fileType} </span> . Seulement les images <span className="type-file-span">png, jpg et jpeg et document pdf  </span>  sont accépter </Typography> : ""}
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
                                    Un ou plusieur document n'a pas pus enregistrer
                                </Alert>
                            </div>
                        </Collapse>
                    </Row>

                    <Row>
                        <Collapse in={etatRequest.success}>
                            <div >
                                <Alert  variant="success">
                                    Les document sont enregistrer avec succés
                                </Alert>
                            </div>
                        </Collapse>
                    </Row>

                    <Row className="align-items-center justify-content-around mt-4 ">
                        <SubmitButton disabled={files.length <= 0} sending={etatRequest.sending} successRequest={etatRequest.success} type="submit" color="primary"> Enregistrer </SubmitButton>
                    </Row>
                </Col>
                
            </form>
    )
}

