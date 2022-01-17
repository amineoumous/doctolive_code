// import React from 'react'

import AboutBackground from './../assets/icons/svgr/AboutBackgrounfd'
import { Col} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import Head from 'next/head'

export default function about() {
    const [screenWidth, setScreenWidth] = useState(1);

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
            <title> YOBAL - Géstion des magasin et restaurant </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
         
        <main className="delivery-man">
            <div style={{backgroundColor: "#1ab9b9"}}>
                <Header  screenWidth={screenWidth}  />
                <Content />
            </div>
            
        </main>
    </>
    )
}


function Header(props) {
  
    return (
        <header className="yb-home">
                <Col md="6" xs="12" className="">
                <div className="content-block-home">
                    <p className="capital-heading"> À props de nous </p>
                    <h1 className="home-heading" style={{fontSize: 38}}>
                   
                        Voulez vous s'avoir plus sur nous.
                    </h1>
                    { props.screenWidth < 767 ?  <AboutBackground width="100%" height="100%" /> : null}
                    <p className="paragraph-home">
                        YOBAL permet aux gens de commander en ligne à partir de leur local préféré
                        restaurants, magasins d'alcools, épiceries et fournisseurs de services de blanchisserie et de nettoyage à sec.
                    </p>
                    <div className="button-wrap-home">

                        <a href="" className="button w-button">Get Started</a>
                    </div>
                    </div>
                </Col>
                { props.screenWidth > 767 ? 
                    <Col md="6" >
                    <AboutBackground width="75%" height="75%" />
                    </Col>
                    : null
                }
                
            </header>   
    )
}

function Content() {
    return (
        <section className="section-content">
            <div className="container space-below">
                <div className="form partner-form">
                    <div className="card-top">
                        <h2 className="card-heading heading-primary-color"> Vous êtes occupé, alors nous allons garder ça vite </h2>
                    </div>
                    <div className="card-body">
                       <h3> Qu'est-ce que YOBAL?  </h3>
                       <p> YOBAL fournit de la nourriture et des boissons, des produits de nettoyage, des produits ménagers, des médicaments en vente libre et bien plus en quelques minutes. </p>
                       <h3> Comment fonctionne YOBAL? </h3>
                       <p> Nous répondons à tous vos besoins quotidiens directement à votre porte depuis nos magasin et réstaurant partenaire de votre région. Ainsi, lorsque vous commandez, vos affaires vous parviennent directement. Nous ne facturons pas de prix de pointe fous et nous livrons rapidement. Notre devise est: "Commandez en quelques secondes, livré en quelques minutes." </p>
                       <h3> Comment YOBAL a-t-il commencé? </h3>
                       <p> à vos clavier :</p>
                       <h3> Quelle est la mission de YOBAL? </h3>
                       <p> La mission de YOBAL est de rendre la vie quotidienne sans effort. YOBAL fournit la solution incontournable du consommateur moderne pour les besoins quotidiens immédiats. Nous rendons la livraison des produits d'épicerie, de la maison, des produits essentiels pour bébés et animaux et des médicaments en vente libre facile et abordable pour tous. </p>
                    </div>
                </div>
            </div>
        </section>
       
    )
}