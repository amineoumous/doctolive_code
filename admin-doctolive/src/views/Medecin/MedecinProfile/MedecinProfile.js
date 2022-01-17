import React,{useEffect, useState, useRef} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import {Row, Col } from 'react-bootstrap';


// core components
import Table from "components/Table/Table.js";
import SearchInput from "components/SearchInput/SearchInput.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SwipeableRoutes from "react-swipeable-routes";

import { BiCalendar, BiPhone, BiEnvelope, BiHome, BiBox, BiUserCheck, BiUserX, BiSave } from 'react-icons/bi'
import { AiTwotoneShop, AiOutlineShopping, AiOutlineClose  } from 'react-icons/ai'

import GraduateIcon from 'assets/icons/svgr/Experience'
// import Persson from 'assets/icons/svgr/User'
import Cash from 'assets/icons/svgr/Money'
import Clock from 'assets/icons/svgr/Clock'

import { useAuth } from "context/Auth";
import { getOneElement, _addCategoryProduct, activateElement, deleteElement, _updateProduct,getMedecinConsultation, _blockingElement, _deblockingElement } from 'services/Medecins/MedecinsService'

import styles from "assets/jss/views/profilePageStyle.js";
import bgImage from './../../../assets/img/medecinBackground.jpg'
import FormUpdate from 'views/Medecin/FormUpdate/FormUpdate';

import moment from 'moment'
import momentLangue from 'momentLangue'
import Config from './../../../Config';

import SwipeableViews from "react-swipeable-views";
import { Link, Route } from "react-router-dom";

import TimeLine from 'components/TimeLine'

import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import CardHeader from "components/Card/CardHeader.js";

// import FormProduct from './FormProduct'
moment.locale('fr', momentLangue['fr']); // it is required to select default locale manually


const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const {UserData} = useAuth();

  const [userInfo, setUserInfo] = useState({city:{}, diplomes: [], tarifs:[], horaires:[]});
  const [showConfirmationActivate, setShowConfirmationActivate] = useState(false);
  const [showConfirmationDelete, setShowConfirmationDelete] = useState(false);
  const [showConfirmatioBlock, setShowConfirmationBlock] = useState(false);
  const [showConfirmatioDeblock, setShowConfirmationDeblock] = useState(false);

  const el = useRef(null);

  const classes = useStyles();



  const handleConfirmation = () => {
    activateElement(props.match.params.id, UserData.token)
    .then(result =>{

      setUserInfo(oldInfo => {return {...oldInfo, active: true}});
      setShowConfirmationActivate(false)
    })
    .catch(err => {
        if(err.response){
            // console.log(err.response)
        }

    })
  }

  const handleDelete = () => {
    deleteElement(props.match.params.id, UserData.token)
    .then(result =>{
      return props.history.push({
        pathname: `/admin/medecins`,
      })
    })
    .catch(err => {
        if(err.response){

        }

    })
  }

  const handleBlock = () => {
    _blockingElement(props.match.params.id, UserData.token)
    .then(result =>{
      setUserInfo(oldInfo => {return {...oldInfo, blocked: true}});
      setShowConfirmationBlock(false)
    })
    .catch(err => {
        if(err.response){

        }

    })
  }

  const handleDeblock = () => {
    _deblockingElement(props.match.params.id, UserData.token)
    .then(result =>{
      setUserInfo(oldInfo => {return {...oldInfo, blocked: false}});
      setShowConfirmationDeblock(false)
    })
    .catch(err => {
        if(err.response){

        }

    })
  }


  useEffect(() => {

    getOneElement(props.match.params.id, UserData.token)
    .then(result => {
      if(! result.data.error ){
          if(!result.data.medecin){

          }else{
            setUserInfo(result.data.medecin);
          }
        
      }
    })
    .catch(err => {
      // console.log(err.response)
    })
    return () => {
      
    }
  }, [])

  const scrollToTop = (index) => {
    Array.from(el.current.containerNode.children).forEach((child, i) => {
      if (index !== i) {
        child.scrollTo(0, 0);
      }
    });
  };

  return (
    <div>


      <Parallax small filter image={!userInfo.bgImage ? bgImage :  `${Config.BACKEND_URL}${userInfo.bgImage}`} />
 
      <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              {/* <div className={classes.profile}> */}
              <Col>
                <Row className="justify-content-center align-items-center">
                  <h3 className={classes.title}> {`Dr ${userInfo.nom} ${userInfo.prenom}`} </h3>
                    { userInfo.deleted ?  null : userInfo.active ? 
                        ! userInfo.blocked ?
                        <span className="ml-3" style={{ fontSize:18}} > 
                          <BiUserCheck size="1.825rem" color= "green" /> active <Button onClick={() => setShowConfirmationBlock(true)} round color="warning"> Bloquer </Button>
                        </span> 
                        :
                        <span className="ml-3" style={{ fontSize:18}} > 
                        <BiUserX size="1.825rem" color= "red" /> blocker <Button onClick={() => setShowConfirmationDeblock(true)} round color="success"> déblocker </Button>
                      </span> 
                        : 
                        <span className="ml-3" style={{fontSize:18}} > 
                          <BiUserX color= "red" size="1.825rem" />
                          pas encore activé
                          <Button className="ml-3" onClick={() => setShowConfirmationActivate(true)} color="success" round> activé maintenant </Button>
                        </span> 
                    }  

                </Row>
                <Row className="justify-content-center">
                  {
                    userInfo.deleted ? 
                    <span className=" btn-secondary"> Ce compte est déja suprimer </span>
                    :
                    <Button onClick={() => setShowConfirmationDelete(true)} color="danger" round> Suprimer le medecin </Button>
                  }
                </Row>
                {/* <Row className="justify-content-center mt-3">
                  <h6> {userInfo.category.name}  </h6>
                </Row > */}
                <Row className="justify-content-center"><p> {userInfo.description} </p></Row>
              </Col>
              {/* </div> */}  
            </GridItem>
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
 
                  <Row className="justify-content-center">
                    <Link to={`/admin/medecins/${props.match.params.id}/infos`}> 
                      <span 
                        className={ 
                          classes.pills + 
                          (
                            (`/admin/medecins/${props.match.params.id}/infos` === props.location.pathname || 
                            `/admin/medecins/${props.match.params.id}` === props.location.pathname ) 
                            ? " active": ""
                          )
                        }
                        > 
                      <AiTwotoneShop className={classes.tabIcon} /> Information 
                      </span>  
                    </Link>
                    <Link to={`/admin/medecins/${props.match.params.id}/consultations`}>
                      <span 
                        className={ 
                          classes.pills + 
                          (
                            props.location.pathname.includes(`/admin/medecins/${props.match.params.id}/consultations`)  
                            ? " active": ""
                          )
                        }
                      > 
                        <AiOutlineShopping className={classes.tabIcon} /> Consultations 
                      </span>  
                    </Link>
                  </Row>
                  <Row className="m-0 p-3">
                    <SwipeableRoutes 
                      replace
                      onChangeIndex={scrollToTop}
                      innerRef={el}
                      containerStyle={{ minHeight: 200 }}
                    >
                      <Route path={[`/admin/medecins/:id/infos`, "/admin/medecins/:id/consultations", "/admin/medecins/:id"]} render={(props) => <GeneralInfos {...props}userInfo={userInfo} setUserInfo={setUserInfo} />} />
                      <Route path={`/admin/medecins/:id/consultations`} render={ (props) => <Consultations {...props} />} />
                      <Route path={`/admin/medecins/:id/consultations/:consultation`} render={ (props) => <ConsultationDetails {...props} />} />
                    </SwipeableRoutes>
                  </Row>
              </GridItem>
            </GridContainer>
          </div>
      </div>
      <Dialog
        open={showConfirmationActivate}
        onClose={ () => setShowConfirmationActivate(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"> Activer le medecin </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                avec l'activation de ce medecin un compte utilisateur vas être automatiquement créer et le chef vas recevoir les information de login sur sont boite email.
                Aussi les utilisateurs de l'application peux désormais voir les information, les produit et le menu de ce medecin et passer des commande. 
                Le medecin peuvent aussi traiter ces commande
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmation} color="danger">
            Confirmer
          </Button>
          <Button onClick={() => setShowConfirmationActivate(false)} color="transparent" >
            Annuler
          </Button>
        </DialogActions>
      </Dialog>

      {/* confirmation de supession d'élement */}

      <Dialog
        open={showConfirmationDelete}
        onClose={ () => setShowConfirmationDelete(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"> Suprimer le medecin </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Avec votre confirmation le systéme vas essayer de suprimer diffénitivement ce medecin, et s'il est lié à d'autre élement das la base de donnée, le systéme vas seulement le suprimer logiquement mais pas physiquement
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} color="danger">
            Confirmer
          </Button>
          <Button onClick={() => setShowConfirmationDelete(false)} color="transparent" >
            Annuler
          </Button>
        </DialogActions>
      </Dialog>

      {/* confirmation de supession d'élement */}

      <Dialog
        open={showConfirmatioBlock}
        onClose={ () => setShowConfirmationBlock(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"> Bloquer le medecin </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Avec votre confirmation le systéme vas blocker ce medecin donc il peuvent pas accéder à son profile et les clients ne peux plus voir leurs produits ni passer des commande au sein de ce medecin
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBlock} color="danger">
            Confirmer
          </Button>
          <Button onClick={() => setShowConfirmationBlock(false)} color="transparent" >
            Annuler
          </Button>
        </DialogActions>
      </Dialog>

      {/* confirmation de supession d'élement */}

      <Dialog
        open={showConfirmatioDeblock}
        onClose={ () => setShowConfirmationDeblock(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"> Déblocquer ce medecin </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Avec votre confirmation le systéme vas déblocker ce medecin donc il peuvent désormais accéder à son profile et les clients aussi peux voir leur produits et passer des commande au sein de ce medecin
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeblock} color="danger">
            Confirmer
          </Button>
          <Button onClick={() => setShowConfirmationDeblock(false)} color="transparent" >
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
     
    </div>
  );
}


function GeneralInfos(props) {
  const classes = useStyles();

  const [updateItem, setUpdateItem] = useState(false);



  const setUpdatedMedecin = (updatedMedecin) => {
    if(!updatedMedecin){

    }else{
      props.setUserInfo(old=> { return {...old, updatedMedecin}})
    }
    setUpdateItem(false)
  }

  return(
    <GridContainer justify="center">
    <GridItem xs={12} sm={12} md={6}>
        <h3> information general </h3>
    </GridItem>
    <GridItem sm={12} md={6} style={{ textAlign: 'right'}}>
        <Button 
            onClick={() => (setUpdateItem( value => !value))} 
            round 
            color="primary"
        > 
            {updateItem ? "Annuler la modification" : "Modifier les informations"}  
        </Button>
    </GridItem>
   
    <GridItem xs={12} sm={12} md={12}>
            <SwipeableViews
                axis="x"
                index={updateItem ? 1 : 0}
                // onChangeIndex={(e, active)=> setActive(active)}
            >
                <Row className={classes.basicInfoContainer + " m-0"}>
                    <Col sm={12} md={6} className={classes.basicInfo}> <BiCalendar /> <span> Date de création : { moment(props.userInfo.createdAt).calendar() } </span>  </Col>
                    <Col sm={12} md={6} className={classes.basicInfo}> <BiPhone /> <span> Numéro de téléphone : {props.userInfo.phone} </span>  </Col>
                    <Col sm={12} md={6} className={classes.basicInfo}> <BiEnvelope /> <span> Adresse email : {props.userInfo.email} </span>  </Col>
                    <Col sm={12} md={6} className={classes.basicInfo}>   <BiHome /> <span> Ville : {props.userInfo.city.name} </span>  </Col>
                    <Col sm={12} md={6} className={classes.basicInfo}>   <BiHome /> <span> Adresse : <label >
                            {
                                !props.userInfo.adress ? 
                                "Aucun adress spécifier par le médecin" : 
                                (props.userInfo.adress.streetName? props.userInfo.adress.streetName : "") + " " + 
                                (props.userInfo.adress.buildingName? props.userInfo.adress.buildingName : "") + " " + 
                                (props.userInfo.adress.floor? "étage " + props.userInfo.adress.floor : "") + " " + 
                                (props.userInfo.adress.sector? props.userInfo.adress.sector : "") + ", " + 
                                (props.userInfo.adress.codePostal? props.userInfo.adress.codePostal : "") 
                            } 
                            </label> </span>  </Col>
                    <Col sm={12} md={6} className={classes.basicInfo}>   <BiHome /> <span> specialités : {props.userInfo.specialites ?
                    props.userInfo.specialites.length > 0 ? 
                     props.userInfo.specialites.map((spec, index) => {
                      return(
                          <strong className="ml-2 " key={index}> {spec.name} </strong>
                      )
                    })
                  : <label> Aucune spécialité mentionnée par le médecin </label>
                  :  <label> Aucune spécialité mentionnée par le médecin </label>}
                 </span>  </Col>
                 <Col>
                 <hr />
                        <div className="indent_title_in">
                            <GraduateIcon />
                            <h3>Parcours</h3>
                            <p> Description du parcours du médecin </p>
                        </div>
                        <div className="wrapper_indent">
                            {/* <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p> */}
                            <h4>Formation</h4>
                            <TimeLine items={props.userInfo.diplomes.filter((dip) => dip.type === "education")} />
                            <h4>awards</h4>
                            <TimeLine items={props.userInfo.diplomes.filter((dip) => dip.type === "experience")} />
                            <h4>expérience</h4>
                            <TimeLine items={props.userInfo.diplomes.filter((dip) => dip.type === "award")} />
                        </div>  
                        <hr />

                        <div className="indent_title_in">
                            <Cash />
                            <h3> Tarifs </h3>
                            <p>Détail des prix de chaque type de consultaion.</p>
                        </div>
                        <div className="wrapper_indent">
                        <p>Ces honoraires vous sont communiqués à titre indicatif par le praticien. Ils peuvent varier selon le type de soins finalement réalisés en cabinet, le nombre de consultations et les actes additionnels nécessaires. En cas de dépassement des tarifs, le praticien doit en avertir préalablement le patient.</p>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Service - Visite</th>
                                            <th>Prix</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.userInfo.tarifs.map((tarif, index) => {
                                                return (<tr key={index}>
                                                            <td>{tarif.name}</td>
                                                            <td>{tarif.price} MAD </td>
                                                        </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr />

                        <div className="indent_title_in">
                            <Clock />
                            <h3> Horaires </h3>
                            <p>Détail des heurs de travail pour chaque jour de la semaine.</p>
                        </div>
                        <div className="wrapper_indent">
                            <div className="table-responsive">
                                {
                                    props.userInfo.horaires.map((horaire, index) => {
                                        return(
                                            <time className="d-flex" key={index}>
                                                <div style={{flexBasis: 82}} className="">{horaire.jour} : </div>
                                                <div style={{flex: "1 0 0%", paddingRight:16}}>
                                                    { !horaire.is_matin ? null : <span>{moment(horaire.debut_matin, "HH:mm:ss").format('HH:mm')} - {moment(horaire.fin_matin, "HH:mm:ss").format('HH:mm')}</span>}
                                                    {!horaire.is_soir ? null : <span>, {moment(horaire.debut_soir, "HH:mm:ss").format('HH:mm')} - {moment(horaire.fin_soir, "HH:mm:ss").format('HH:mm')}</span>}
                                                </div>
                                            </time>
                                        )
                                    })
                                }
                            
                            </div>
                        </div>
                 </Col>
                </Row>
                <div>
                    {updateItem?  <FormUpdate data={props.userInfo} setUpdatedElement={setUpdatedMedecin} /> : null}
                </div>
                
        </SwipeableViews>
       
    </GridItem>
    
</GridContainer>
  )
}
function Consultations (props) {
  const classes = useStyles();


  const [consultationsMedecin, setConsultationsMedecin] = useState([])

  const {UserData} = useAuth();



  useEffect(() => {
    getMedecinConsultation(props.match.params.id, UserData.token)
      .then(result => {
        console.log(result.data)
        if(! result.data.error ){
          setConsultationsMedecin(result.data.medecinConsultation)
        }
      })
      .catch(err => {
      //   console.log(err.response)
      })
      return () => {
        
      }
  }, [])


  return(
    <GridContainer justify="center">
    <GridItem xs={12} md={12}>
        {/* <Row className="m-0">
        {
            consultationsMedecin?.map((consultation, index) => {
              return(
                <Col md="3" className="" key={index}>
                    <ConsultationCard consultation={consultation} />
                  
                </Col>
              )
            })
          }
        </Row> */}
        <Card >
          <CardHeader style={{display: "flex", justifyContent:"space-between", alignItems:"center"}} color="primary">
              <div >
                <h4 className={classes.cardTitleWhite}>
                  Liste des consultations
                </h4>
                <p className={classes.cardCategoryWhite}>
                  Prise à titre de ce médecin
                </p>
              </div>
              <div >
                <SearchInput onChange={(researching) => {}} placeholder= "rechercher consultation..."  />
              </div>
          </CardHeader>

          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={columns}
              tableData={consultationsMedecin}
            />
          </CardBody>
        </Card>
         
    </GridItem>
  </GridContainer>
  )
}


const columns = [
  { 
    id: 'title', 
    label: 'Titre', 
    type: "text", 
  },

  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'center',
    type: "date",
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    align: 'center',
    type: "text",
  },
  {
    id: 'teleconsultation',
    label: 'Téléconsultation',
    type: "icon",
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'action',
    label: '',
    type: "link",
    path: 'consultations',
    content: 'Voir details',
    // minWidth: 170,
    align: 'right',
  }
];

function ConsultationDetails(){
  return(
    <div> 
      <h3> Détails de la consultation </h3>

    </div>
  )
}
// function ProductDetails(props) {
//   const {UserData} = useAuth();

//   const [product, setProductrInfo] = useState({});

//   const [showConfirmationDelete, setShowConfirmationDelete] = useState(false);
//   const [updateElement, setUpdateElement] = useState(false);


//   const [data, setData] = useState({name:"", content:"", active: true, price: 3, menuMedecinId: props.match.params.id})
//   const [uploadedFile, setUploadedFile] = useState({});

//   const handleDelete = () => {
//     deleteProduct(props.match.params.product, UserData.token)
//     .then(result =>{
//       setShowConfirmationDelete(false)
//       return props.history.push({
//         pathname: `/admin/shops/${props.match.params.id}/consultations`,
//       })
//     })
//     .catch(err => {
//         if(err.response){

//         }

//     })
//   }


//   const saveProduct = async () => {

//     // if(!nameError && !name.length < 3){
//         let bgImage = {}       
//         if(uploadedFile.filePath){
//             bgImage = await uploadImage(uploadedFile, UserData.token);  
            
//         }
//         // {name, content, active: validate,price: price.floatValue ,bgImage: bgImage.fileName ,menuMedecinId: props.menuMedecin.id}
        
//         _updateProduct( {...data, description: data.content, imageUri: bgImage.fileName}, UserData.token)
//         .then((result) => {

//           setProductrInfo(result.data.updatedProduct)
//             setUpdateElement(false)
//         })
//         .catch(error => console.log(error))
//     // }
    
// }


//   useEffect(() => {

//     getProduct(props.match.params.product)
//     .then(result => {

//       if(! result.data.error ){
//           if(!result.data.product){

//           }else{
//             setProductrInfo(result.data.product);
//             setData(result.data.product)
//             setUploadedFile(!result.data.product.bgImage ? {} : {fileType:"image", filePath: `${Config.BACKEND_URL}shopimage/${result.data.product.bgImage}`, realName:"produit image", type:"file"})
//           }
//       }
//     })
//     .catch(err => {
//       console.log(err.response)
//     })
//     return () => {
      
//     }
//   }, [props.location.pathname])

//   return (
//     <div style={{paddingTop: "3rem"}}>
//       <Row> <h3> Détail du produit </h3> </Row>
//       <Row className="justify-content-center my-5"> 
//         <Button onClick={() => setShowConfirmationDelete(true)} className="ml-3" color="danger" round> Suprimer le produits </Button> 
//         <Button onClick={() => setUpdateElement(true)} className="ml-3" color="success" round> Modifier le produits </Button> 
//       </Row>
//         <Row>
//           <Col md="6" xs="12" className="d-flex flex-column align-items-center justify-content-center">
//             <h3> {product.name} </h3>
//             <h4>  { "₣ " + product.price}  </h4>
//             <p> {product.content} </p>
//           </Col >
//           <Col  md="6" xs="12" className="d-flex flex-column align-items-center justify-content-center">
//             <img className="img-fluid" src={`${Config.BACKEND_URL}shopimage/${product.bgImage}`} alt=". . ." />
//           </Col>
//         </Row>
//         {/* confirmation de supession d'élement */}
//       <Dialog
//         open={showConfirmationDelete}
//         onClose={ () => setShowConfirmationDelete(false)}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title"> Suprimer le produit </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Avec votre confirmation le systéme vas essayer de suprimer diffénitivement ce produit, et s'il est lié à d'autre élement das la base de donnée, le systéme vas seulement le suprimer logiquement mais pas physiquement
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDelete} color="danger">
//             Confirmer
//           </Button>
//           <Button onClick={() => setShowConfirmationDelete(false)} color="transparent" >
//             Annuler
//           </Button>
//         </DialogActions>
//       </Dialog>
//       <Dialog
//         open={updateElement}
//         maxWidth="lg"
//         fullWidth
//         onClose={ () => setUpdateElement(false)}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title"> Suprimer le produit </DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//               To subscribe to this website, please enter your email address here. We will send updates
//               occasionally.
//             </DialogContentText>
//           <FormProduct
//             saveProduct={saveProduct} 
//             setUploadedFile = {setUploadedFile} 
//             setData={setData} data={data} 
//             setCancel={setUpdateElement} 
//             uploadedFile={uploadedFile}
//             responseErrors={{}}
          
//           />
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }

