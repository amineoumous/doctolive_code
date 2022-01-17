import React, { useState, useEffect } from 'react'
import autoBind from 'react-autobind';

import {Row} from 'react-bootstrap'

import Persson from 'assets/icons/User'
import Cash from 'assets/icons/Money'
import Clock from 'assets/icons/Clock'
import Speciality from 'assets/icons/Speciality'
import Mortarboard from 'assets/icons/Mortarboard'
import Map from 'assets/icons/Map'

import { Link } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useTheme } from '@material-ui/core/styles';


import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import FileUploader from 'components/FileUploader/FileUploader';

import Education from './editProfil/Education'


import GeneralInfos from './editProfil/GeneralInfos'
import Images from './editProfil/Images'
import AccessInfos from './editProfil/AccessInfos'
import About from './editProfil/About'
import Pricing from './editProfil/Pricing'
import Hours from './editProfil/Hours'

import styles from "assets/jss/views/ProfilMedecinEditStyle";

import {getMedecinInfos, uploadImage} from 'services/medecin/MedecinService'
import { useAuth } from "context/Auth";

import Config from 'Config';

const useStyles = makeStyles(styles);

export default function ProfilMedecin () {
    const {UserData} = useAuth();

    const classes = useStyles();

    const [uploadedFile, setUploadedFile] = useState({fileType: "image", realName:"nom medecin", filePath: require("./../../assets/img/medecin.jpeg")});
    const [waitingConfirmation, setWaitingConfirmation] = useState({});
    const [medecinInfos, setMedecinInfo] = useState({});
    const [showConfirmation, setShowConfirmation] = useState(false);

    const fileHandling = async (data) => {
        setWaitingConfirmation(data);
        setShowConfirmation(true)
    }

    const ConfirmPicture = async () => {
        let uploadingFile = await uploadImage(waitingConfirmation, UserData.token); 

        setUploadedFile(uploadingFile.data)
        setShowConfirmation(false)
    }

    const removeBgImage = () =>{
        setUploadedFile({});
    }

    useEffect(() => {
        getMedecinInfos(UserData.token)
        .then(result => {

                if(result.data.thisMedecin){
                setMedecinInfo(result.data.thisMedecin)

                setUploadedFile((info => {return result.data.thisMedecin.image === null ? {} :  {...info, filePath : Config.BACKEND_URL + result.data.thisMedecin.image, realName: "DR. " + result.data.thisMedecin.nom + " " + result.data.thisMedecin.prenom }}))
            }
            
        })
        .catch(err => {

        })
        return () => {
            
        }
    }, [])
        return (
            <GridContainer >
            
    
            <GridItem xs={12} sm={12} md={12}>
                <Card >
                    <CardHeader color="primary"> 
                        <span className="icon"> <Persson /> </span>
                        
                      <h4 className={classes.cardTitleWhite}>
                            Modification des information Générale
                      </h4>
                    </CardHeader>
                    <CardBody>
                        <Row className="w-50">
                            <FileUploader 
                                label="ajouter une image pour de profile"
                                name= "bgImage"
                                id="custumFile"
                                uploadedFile={uploadedFile}
                                onDelete={removeBgImage}
                                setUploadedFile={fileHandling}
                            />
                        </Row>  
                            
                        <Row>
                            <GeneralInfos medecinInfos={medecinInfos}  />
                        </Row>  
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <Card >
                    <CardHeader color="primary"> 
                        <span className="icon"> <Map /> </span>
                      <h4 className={classes.cardTitleWhite}>
                            Géstion des image de cabinet
                      </h4>
                    </CardHeader>
                    <CardBody>
                        <Images images={medecinInfos.pictures} />
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <Card >
                    <CardHeader color="primary"> 
                        <span className="icon"> <Speciality /> </span>
                        
                      <h4 className={classes.cardTitleWhite}>
                            Modification des spécialités
                      </h4>
                    </CardHeader>
                    <CardBody>
                        <About specialites ={medecinInfos.specialites} />
                    </CardBody>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
                <Card >
                    <CardHeader color="primary"> 
                        <span className="icon"> <Map /> </span>
                      <h4 className={classes.cardTitleWhite}>
                            Modification des information d'accés au cabinet
                      </h4>
                    </CardHeader>
                    <CardBody>
                        <AccessInfos accessInfo={medecinInfos.adress} />
                    </CardBody>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
                <Card >
                    <CardHeader color="primary"> 
                        <span className="icon"> <Mortarboard /> </span>
                        
                      <h4 className={classes.cardTitleWhite}>
                            Modification des information du parcours (etudes et expériences)
                      </h4>
                    </CardHeader>
                    <CardBody>
                        <Education experiences={medecinInfos.diplomes} />
                    </CardBody>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
                <Card >
                    <CardHeader color="primary"> 
                        <span className="icon"> <Cash /> </span>
                        
                      <h4 className={classes.cardTitleWhite}>
                            Modification des prix de visit
                      </h4>
                    </CardHeader>
                    <CardBody>
                        <Pricing pricing={medecinInfos.tarifs} />
                    </CardBody>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
                <Card >
                    <CardHeader color="primary"> 
                        <span className="icon"> <Clock /> </span>
                        
                      <h4 className={classes.cardTitleWhite}>
                            Modification des temps de travail
                      </h4>
                    </CardHeader>
                    <CardBody>
                        <Hours horaire={medecinInfos.horaires} />
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <Row className="justify-content-center ">
                    <Link className="btn btn-primary" to="/profil"> Aperçu du profile </Link>
                </Row>
            </GridItem>
            <ResponsiveDialog open={showConfirmation} uploadedFile={waitingConfirmation} ConfirmPicture={ConfirmPicture} handleClose={ () => setShowConfirmation(false)} />
          </GridContainer>
          
        )
    
}

function ResponsiveDialog(props) {
//   const [open, setOpen] = React.useState(false);
  const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
     <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation de la nouvelle photo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            La confirmation de cette image vas automatiquement suprimer votre ancienne photo de profile et vos patient vont désormé peut l'à voir
          </DialogContentText>
          <div>
              <img src={props.uploadedFile.filePath} width="20%" /> 
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Annuller
          </Button>
          <Button onClick={props.ConfirmPicture} color="primary">
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
