import {useState, useEffect} from 'react'

import Head from 'next/head'


import ContactBanner from './../assets/icons/svgr/ContactBanner'

import { Col} from 'react-bootstrap'

export default function contact() {
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
            </Head>
             
            <main className="">
                <div style={{backgroundColor: "#1ab9b9"}}>
                <Header  screenWidth={screenWidth}  />
                {/* <ContactForm screenWidth={screenWidth}  /> */}
                </div>
                
            </main>
        </>
    )
}


function Header(props) {
  
    return (
        <header className="yb-home">
                <Col md="6" xs="12" className="">
                <div className="">
                    <p className="capital-heading"> Contactez nous </p>
                    <h1 className="home-heading" style={{fontSize: 38}}>
                    Vous avez des question. <br />
                    Voulez vous s'avoir quelque shose précis.
                    </h1>
                    { props.screenWidth < 767 ?  <ContactBanner width="100%" height="100%" /> : null}
                    <p className="paragraph-home">
                    Yobal est le meilleur moyen de livrer. Nous obtenons votre produit de n'importe où en un temps record, combinant une réelle commodité avec une expérience de porte agréable.</p>
                    
                    </div>
                </Col>
                { props.screenWidth > 767 ? 
                    <Col md="6" >
                    <ContactBanner width="75%" height="75%" />
                    </Col>
                    : null
                }
                
            </header>   
    )
}
