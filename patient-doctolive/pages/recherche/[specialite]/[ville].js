import Head from 'next/head'
import {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'

import Config from './../../../EndPoint'

import MedecinWidget from './../../../components/MedecinWidget/MedecinWidget';
import MapAccess from './../../../components/MedecinWidget/MapAccess';

import Search from './../../../components/Search/Search'

import { useRouter } from 'next/router';

import contentFR from './../../../contentFR'
import contentEN from './../../../contentEN'
import contentAR from './../../../contentAR'

import { makeStyles } from "@material-ui/core/styles";


import styles from "./../../../assets/jss/recherchePage.js";


const useStyles = makeStyles(styles);

export default function magasin({medecins, locations}) {
    const router = useRouter();
    const {locale} = router;
  
    const content = locale === "ar" ? contentAR : locale === "en" ? contentEN : contentFR;

    const [screenWidth, setScreenWidth] = useState(1);

    const classes = useStyles();

    useEffect(() => {
        function updateSize() {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => {
            window.removeEventListener('resize', updateSize)
        }
    }, [])



    return (
        
        <>
            <Head>
                <title> DOCTOLIVE - Rechercher médecin </title>
            </Head>
             
            {
                medecins.length> 0 ?
                <Row className="content-recherche m-0">
                    <Col lg="7" md="12" xs="12">
                        { !medecins ? null :
                            medecins.map((researched, index) => {
                                return(
                                    <div key= {index}>
                                        <MedecinWidget medecin={researched} locale={locale} content={content.resultResearch.widget} />
                                    </div>
                                )
                            })
                        }
                    </Col>
                    <Col lg="5" md="12" xs="12" className="order-sm-last">
                        <MapAccess apiKey={Config.apiKey} locations={locations} />
                    </Col>
                </Row>
                :
                <div className= " ">
                    <div className=" m-0">
                        <section className= {classes.header}>
                            <div className= {classes.bakgroudContainer} style={locale === "ar" ? {backgroundImage: `url(/image/search.svg)`, backgroundPosition: "bottom left", textAlign: "right"} : {backgroundImage: `url(/image/search.svg)`, backgroundPosition: "85% 75%"}}>
                                <div className="container-fluid" id="recherche-medecin">
                                    <div className="mb-3">
                                        <h1 className={classes.h1}>  {content.resultResearch.noReseault} </h1>
                                        <h2 className={classes.h2}> {content.heading2} </h2>
                                    </div>
                                    <Search content={content.resultResearch} locale={locale} />
                                    </div>
                            </div>
                        </section>
                       
                    </div>
                    
                </div>
            }
            
        </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`${Config.BACKEND_URL}/medecin/${context.params.specialite}/${context.params.ville}`)
    const data = await res.json()
    if(data.error){
        return {
            // props: {medecins: data.medecins, locations: data.medecins.map((medecin) => medecin.adress)},
            props: {medecins: [], locations: []},
          }
    }
    return {
      props: {medecins: data.medecins, locations: data.medecins.map((medecin) => medecin.adress)},
    //   props: {medecins: [], locations: []},
    }
  }