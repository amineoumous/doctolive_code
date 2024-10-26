import Head from 'next/head'
import {useState, useEffect} from 'react'
import {Row, Col, Container} from 'react-bootstrap'

import Config from './../../../EndPoint'

import MedecinWidget from './../../../components/MedecinWidget/MedecinWidget';
import MapAccess from './../../../components/MedecinWidget/MapAccess';

import Search from './../../../components/Searchtwo/Search'

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
                <title> DOCTOLIVE - Rechercher médecin{medecins?.length} </title>
            </Head>

            <div className= " ">
                    <div className=" m-0">
                        <section className= {classes.header}>
                            <div className= {'header-search'} style={locale === "ar" ? { backgroundPosition: "bottom left", textAlign: "right"} : { backgroundPosition: "85% 75%"}}>
                                <div className="container-fluid text-center" id="recherche-medecin">
                                    {/* <div className="mb-3">
                                        <h1 className={classes.h1}>  {content.resultResearch.noReseault} </h1>
                                        <h2 className={classes.h2}> {content.heading2} </h2>
                                    </div> */}
                                    <Search content={content.resultResearch} locale={locale} />
                                    </div>
                            </div>
                        </section>
                        {/* <Row className='bg-white-s'>
                            <Container>
                                <Col lg={12} className='container-filter'>
                                  
                                </Col>
                                
                            </Container>
                           

                        </Row> */}
                       
                    </div>
                    
                </div>
            
             
            {
                medecins.length > 0 ?
                <Row className="content-recherche m-0 bg-body-i">
                    <Col lg="9" md="12" xs="12">
                        {medecins?.map((researched, index) => {
                                return(
                                    <div key= {index}>
                                        <MedecinWidget medecin={researched} locale={locale} content={content.resultResearch.widget} />
                                    </div>
                                )
                            })
                        }
                    </Col>
                    <Col lg="3" md="12" xs="12" className="order-sm-last">
                        {/* <MapAccess apiKey={Config.apiKey} locations={locations} /> */}
                        <div className='carre-map text-center'>
                        <img src={"/image/pin-round.png"} className="img-fluid mt-5" alt="User Image" />
                            <p>J’autorise le traitement d’informations (dont mon adresse IP)</p>

                        </div> 
                    </Col>
                </Row>
                :
                <div className= " ">
             <h1 className={classes.h1}>  {content.resultResearch.noReseault} </h1>
                    
                </div>
            }
            
        </>
    )
}

export async function getServerSideProps(context) {
    const { specialite, ville } = context.params;
  
    const url = `${Config.BACKEND_URL}/medecin/${specialite}/${ville}`;
    const res = await fetch(url, {
      headers: {
        'Origin': Config.CURRENT_URL,  // Replace with your frontend URL
      },
    });
  
    const data = await res.json();
  
    console.log("Data:", data);
  
    if (data.error) {
      return {
        props: {
          medecins: [],
          locations: [],
        },
      };
    }
  
    return {
      props: {
        medecins: data.medecins,
        locations: data.medecins.map((medecin) => medecin.adress),
      },
    };
  }