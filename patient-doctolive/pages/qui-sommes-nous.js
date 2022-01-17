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
            <title> </title>
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
                     
                    </p>
                    <div className="button-wrap-home">

                        <a href="" className="button w-button"></a>
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
                        <h2 className="card-heading heading-primary-color"> </h2>
                    </div>
                    <div className="card-body">
                      
                    </div>
                </div>
            </div>
        </section>
       
    )
}