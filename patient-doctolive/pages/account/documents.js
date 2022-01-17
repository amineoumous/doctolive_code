import React, {useState, useEffect} from 'react'
import Config from './../../EndPoint'

import {TiDeleteOutline} from 'react-icons/ti'

import {Row, Col, Container, Alert} from 'react-bootstrap'
import { useAuth } from './../../context/AuthContext';

import ReactFancyBox from './../../components/fancyBox/fancybox/ReactFancyBox'

import { useRouter } from 'next/router'


import contentFR from './../../contentFR'
import contentEN from './../../contentEN'
import contentAR from './../../contentAR'


export default function Documents() {
    const router = useRouter()


    const {locale} = router;
    const {userData} = useAuth();

    const content = locale === "ar" ? contentAR : locale === "en" ? contentEN : contentFR;

    const [savedPictures, setSavedPictures] = useState([]);




    const deleteImageHandle = async (file) => {

        let response = await fetch(`${Config.BACKEND_URL}/upload/document`, {
            method: 'DELETE',
            body: JSON.stringify({path: file.path, id: file.id}),
            headers: {
              'Accept': 'application/json', 
              'Content-Type': 'application/json',
              'Authorization': `token ${userData.token}`,
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

    useEffect( async () => {
        if(!userData.token) return router.push('account/new')

        const res = await fetch(`${Config.BACKEND_URL}/patient/documents`, {
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization': `token ${userData.token}`,
              },
        })
        const data = await res.json()
        setSavedPictures(data.documents)
        return () => {
            
        }
    }, [])
    if(!savedPictures) {
        return (
            <Container>
                <h3> {content.documents.aucun} </h3>
            </Container>
        )
    }
    if(!savedPictures.length) {
        return (
            <Container>
                <h3> {content.documents.aucun} </h3>
            </Container>
        )
    }
    return (
        <Container>
            <Row className="align-items-center justify-content-around mt-4 ">
            {
               savedPictures.length > 0 ?
               
                <Row className="images-saved">
                    {savedPictures.map((file, index) => {

                        return (
                            <Col className="mt-5 p-5" lg="4" md="4" xs="6" key={index}>
                                <div className="image-saved">
                                    {file.type === "application/pdf" ?
                                    <a href={Config.BACKEND_URL + file.path} download={file.name} target="_blank" rel="noopener noreferrer">  <img src='/image/pdf.png' alt="..." className="img-fluid" /> </a>
                                    :
                                    <ReactFancyBox
                                        thumbnail={`${Config.BACKEND_URL}${file.path}`}
                                        showCloseBtn={false}
                                        image={`${Config.BACKEND_URL}${file.path}`}/>
                                    }
                                              <p> {
                                    file.sentTo === "patient" ? <label>{content.documents.sharedBy} </label> : <label> {content.documents.sharedBy} </label>
                                    }
                                    <strong> Dr. {file.medecin.nom + "  " + file.medecin.prenom} </strong> </p>
                                    <span onClick={() => deleteImageHandle(file)} className="delete-button"> <TiDeleteOutline /> </span>                                            
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                : null
            }
        </Row>
            
        </Container>
    )
}
