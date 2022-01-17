import React, { useEffect, useState } from 'react'

import {Row, Col, Container} from 'react-bootstrap'

import moment from 'moment'

import { Link } from 'react-router-dom';

import {AiOutlineCheckCircle} from 'react-icons/ai'
import GraduateIcon from 'assets/icons/Experience'
import Persson from 'assets/icons/User'
import Cash from 'assets/icons/Money'
import Clock from 'assets/icons/Clock'

import TimeLine from 'components/profilMedecin/TimeLine'

import {getMedecinById} from 'services/medecin/MedecinService'

import Config from 'Config';


export default function ProfilMedecin (props) {

    const [medecinInfos, setMedecinInfo] = useState({specialites:[], tarifs: [],  diplomes: [], horaires: []});

    useEffect(() => {
        getMedecinById(props.match.params.id)
        .then(result => {
            if(result.data.medecin){
                setMedecinInfo(result.data.medecin)
            }

        })
        .catch(err => {

        })
        return () => {
            
        }
    }, [])

        return (
            <Container>
            <Row className="pt-5 mt-5">
                <Col xs="12" md="12" lg="12" xl="3" >
                    <div className="aside">
                        <div className="sidebar-profil">
                            <div className="profil-content">
                                <figure>
                                    <img src={ !medecinInfos.image ?  require("./../../assets/img/medecin.jpeg") : `${Config.BACKEND_URL}/${medecinInfos.image}` } alt="" className="img-fluid" />
                                </figure>
                                <div className="medecin-details">
                                    {/* <small>Primary care - Internist</small> */}
                                    <h3>{"DR. " + medecinInfos.nom + ' ' + medecinInfos.prenom}</h3>
                                    <ul className="contacts">
                                        <li>
                                            <h6> informations d'accès </h6> 
                                            {
                                                !medecinInfos.adress ? 
                                                "Vous n'avez pas encore spécidier vos information d'accés" : 
                                                (medecinInfos.adress.streetName? medecinInfos.adress.streetName : "") + " " + 
                                                (medecinInfos.adress.buildingName? medecinInfos.adress.buildingName : "") + " " + 
                                                (medecinInfos.adress.floor? "étage " + medecinInfos.adress.floor : "") + " " + 
                                                (medecinInfos.adress.sector? medecinInfos.adress.sector : "") + ", " + 
                                                (medecinInfos.adress.codePostal? medecinInfos.adress.codePostal : "") + " - " + 
                                                (medecinInfos.city ? medecinInfos.city.name  : "") 
                                            } 
                                        </li>
                                        <li><h6>Contact du secrétariat </h6>{medecinInfos.phone} </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs="12" md="12" lg="12" xl="9" className="">
                    <div className="box_general">
                        <div className="indent_title_in">
                            <Persson />
                            <h3>À propos de moi</h3>
                            <p>Présentation générale</p>
                        </div>
                        <div className="wrapper_indent">
                            <p> {medecinInfos.presentation} </p>
                            <h6>Specialité</h6>
                            <ul className="bullets">
                                { 
                                    medecinInfos.specialites.map((spec, index) => {
                                        return(
                                            <li key={index}> <span> <AiOutlineCheckCircle /> </span> {spec.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <hr />
                        <div className="indent_title_in">
                            <GraduateIcon />
                            <h3>Parcours</h3>
                            <p> Description du parcours du médecin </p>
                        </div>
                        <div className="wrapper_indent">
                            {/* <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p> */}
                            <h4>Formation</h4>
                            <TimeLine items={medecinInfos.diplomes.filter((dip) => dip.type === "education")} />
                            <h4>awards</h4>
                            <TimeLine items={medecinInfos.diplomes.filter((dip) => dip.type === "experience")} />
                            <h4>expérience</h4>
                            <TimeLine items={medecinInfos.diplomes.filter((dip) => dip.type === "award")} />
                        </div>  
                        <hr />

                        <div className="indent_title_in">
                            <Cash />
                            <h3> Tarifs </h3>
                            <p>Détail des prix de chaque type de consultaion.</p>
                        </div>
                        <div className="wrapper_indent">
                            <p>Ces honoraires vous ^rtre communiqués à titre indicatif par vous. Ils peuvent varier selon le type de soins finalement réalisés en cabinet, le nombre de consultations et les actes additionnels nécessaires. En cas de dépassement des tarifs, le praticien doit en avertir préalablement le patient.</p>
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
                                            medecinInfos.tarifs.map((tarif, index) => {
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
                            <p>Ces honoraires vous sont communiqués à titre indicatif par le praticien. Ils peuvent varier selon le type de soins finalement réalisés en cabinet, le nombre de consultations et les actes additionnels nécessaires. En cas de dépassement des tarifs, le praticien doit en avertir préalablement le patient.</p>
                            <div className="table-responsive">
                                {
                                    medecinInfos.horaires.map((horaire, index) => {
                                        return(
                                            <time className="d-flex" key={index}>
                                                <div style={{flexBasis: 82}} className="">{horaire.jour} : </div>
                                                <div style={{flex: "1 0 0%", paddingRight:16}}>
                                                    { !horaire.is_matin ? null : <span>{moment(horaire.debut_matin).format('HH:mm')} - {moment(horaire.fin_matin).format('HH:mm')}</span>}
                                                    {!horaire.is_soir ? null : <span>, {moment(horaire.debut_soir).format('HH:mm')} - {moment(horaire.fin_soir).format('HH:mm')}</span>}
                                                </div>
                                            </time>
                                        )
                                    })
                                }
                            
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
             <Row className="justify-content-center ">
                <Link className="btn btn-primary" to="/profil/edit"> Modifier les informations </Link>
            </Row>
         </Container>
        )
    
}
