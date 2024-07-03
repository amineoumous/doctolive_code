import {useState, useEffect} from 'react'
import Head from 'next/head'
import { makeStyles } from "@material-ui/core/styles";

import { Row, Col } from 'react-bootstrap'
import styles from "../assets/jss/PatientHomeStyle.js";


import {BiChevronRight, BiCheck, BiSearch, BiCalendar} from 'react-icons/bi'


import Search from './../components/Search/Search'
import { useRouter } from 'next/router';

import contentFR from './../contentFR'
import contentEN from './../contentEN'
import contentAR from './../contentAR'

const useStyles = makeStyles(styles);

export default function Home() {
  const router = useRouter();
  const {locale} = router;

  const content = locale === "ar" ? contentAR.home : locale === "en" ? contentEN.home : contentFR.home;

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
    <div >
        <Head>
            <title>  {content.title} </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header content= {content} locale={locale} screenWidth={screenWidth} />

        <AboutUs content= {content.about} screenWidth={screenWidth} />
        <SkipWaiting content= {content.skip} screenWidth={screenWidth} />
        <Services content= {content.services} screenWidth={screenWidth}  />
        <Steps content= {content.steps} screenWidth={screenWidth} />
        {/* <DownloadArea content= {content.dowload} screenWidth={screenWidth} /> */}
     
    </div>
  )
}
export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }

function DownloadArea({content}) {
  const classes = useStyles();    


    return (
        <section className="dowload_area padding_top">
            <div className="container">
                <div className ={classes.downloader}>
                    <Row className="downloader-wrapper">
                        <Col md="6">
                            <h2> {content.heading} </h2>
                            <p> {content.subHeading} </p>
                            {/* <div className="appstore"> 
                                <div className="appstore-container">
                                    <div className="appstore-content">
                                        <img src={'/image/appstore.png'} height= "30" />
                                        <div className="d-flex flex-row align-items-center">
                                            <div>
                                            </div>
                                            <div className="ml-2"> 
                                            {content.app} 
                                            </div>
                                        </div>
                                    </div>
                                    <BiChevronRight />
                                </div>
                            </div> */}
                            <div className="appstore mt-3"> 
                            <a href="https://play.google.com/store/apps/details?id=com.doctolive" style={{width: "100%", textDecoration: "none", color: "#000"}}> 
                                <div className="appstore-container">
                                    <div className="appstore-content">
                                        <img src={'/image/playstore.png'}  height= "30"/>
                                        <div className="d-flex flex-row align-items-center">
                                            <div>
                                            </div>
                                            <div className="ml-2">
                                               
                                            {content.play}
                                            </div>
                                        </div>
                                    </div>
                                    <BiChevronRight />
                                </div>
                            </a>
                            </div>
                            
                        </Col>
                        <Col md= "6" className="downloader-image p-0">
                            <Row className="justify-content-center m-0">
                                <img src='/image/phoneapp.png' />
                            </Row>
                            
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    )
}
function Header ({content, locale}){
  const classes = useStyles();

  return (
      <section className= {classes.header}>
          <div className= {classes.bakgroudContainer} style={locale === "ar" ? {backgroundImage: `url(/image/BgHome.svg)`, backgroundPosition: "bottom left", textAlign: "right"} : {backgroundImage: `url(/image/BgHome.svg)`, backgroundPosition: "bottom right"}}>
              <div className="container-fluid" id="recherche-medecin">
                <div className="mb-3">
                    <h1 className={classes.h1}> {content.heading1} </h1>
                    <h2 className={classes.h2}> {content.heading2} </h2>
                </div>
                <Search content={content.search} locale={locale} />
                </div>
          </div>
      </section>
  )
}


function AboutUs({content} ) {
    return (
        <section className="about_us padding_top">
        <div className="container">
            <div className="row text-center">
               
                <div className="col-md-12 col-lg-12">
                    <div className="about_us_text">
                        <h2>{content.heading}</h2>
                        
                        <p>{content.body}</p>
                        {/* <a className="btn_2 " href="#">{content.button}</a> */}
                        {/* <div className="banner_item">
                            <div className="single_item">
                                <img src="image/hospital.png" alt="" />
                                <h5>{content.banneritem1}</h5>
                            </div>
                            <div className="single_item">
                                <img src="image/reminder.png" alt="" />
                                <h5>{content.banneritem2}</h5>
                            </div>
                            <div className="single_item">
                                <img src="image/clock.png" alt="" />
                                <h5>{content.banneritem3}</h5>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="col-md-12 col-lg-12">
                    <div className="about_us_img">
                        <img src="/image/Group.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

const SkipWaiting = ({content}) => (
    <section className="skip-waiting padding_top">
        <div className="container">
            <div className="row justify-content-between align-items-center">
               
                <div className="col-md-12 col-lg-12">
                    <div className="about_us_text text-center">
                        <h2>{content.heading}{'...'}{content.subHeading}</h2>
                
                        <ul>
                            <li className="bonus">
                                <span> <BiCheck color="#F27B68" size="30" /> </span>
                                <span> {content.banneritem1} </span>
                            </li>
                            <li className="bonus">
                                <span> <BiCheck color="#F27B68" size="30" /> </span>
                                <span> {content.banneritem2} </span>
                            </li>
                            <li className="bonus">
                                <span> <BiCheck color="#F27B68" size="30" /> </span>
                                <span> {content.banneritem3} </span>
                            </li>
                        </ul>
                        <a className="btn_2 btn btn-primary" href="#recherche-medecin">{content.button}</a>
                    </div>
                </div>

                {/* <div className="col-md-12 col-lg-12">
                    <div className="about_us_img">
                        <img src="/image/doctorohone.png" alt="" className="img-fluid" />
                    </div>
                </div> */}
            </div>
        </div>
    </section>
)

function Steps ({content}){
    return(
        <section className="section-home-how-works padding_top">
            <h2 className="heading text-center"> {content.heading} </h2>
            <div className="hw-area">
                <div className="container">
                    <div className="row">
                        <div className="columns col-sm-4">
                            <div className="hw-box hw-box--mt">
                                <div className="hw-box__icon"><span className="icon-search"> <BiSearch /> </span></div>
                                <h3 className="hw-box__title"> {content.banneritem1} </h3>
                                <p className="hw-box__text"> {content.banneritem12} </p>
                            </div>
                        </div>
                        <div className="columns col-sm-4">
                            <div className="hw-box">
                                <div className="hw-box__icon"> <span className="icon-svg va-middle-inline"> <BiCalendar /> </span> </div>
                                <h3 className="hw-box__title"> {content.banneritem2} </h3>
                                <p className="hw-box__text">{content.banneritem22}</p>
                            </div>
                        </div>
                        <div className="columns col-sm-4">
                            <div className="hw-box">
                                <div className="hw-box__icon"><span className="icon-fat-check"><BiCheck /></span></div>
                                <h3 className="hw-box__title"> {content.banneritem3} </h3>
                                <p className="hw-box__text"> {content.banneritem32} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Services = ({content}) => (
    <section className="feature_part">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8">
                    <div className="section_tittle text-center">
                        <h3>{'Doctolive:'}</h3>
                        <h3> {content.heading} </h3>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-3 col-sm-12">
                    <div className="single_feature">
                        <div className="single_feature_part">
                         
                            <img src="image/OnlineConsulting.png" alt="" />
                          
                           
                            <p> {content.item1body} </p>
                        </div>
                    </div>
                  
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div className="single_feature">
                        <div className="single_feature_part">
                       
                                  
                            <img src="image/security-doc.png" alt="" />
                                                  
                            
                            <p>{content.item2body}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div className="single_feature">
                        <div className="single_feature_part">
                     
                                  
                            <img src="image/adv-info.png" alt="" />
                                              
                            
                            <p>{content.item3body}</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-12">
                    <div className="single_feature">
                        <div className="single_feature_part">
                        <img src="image/Soins.png" alt="" />
                           
        
                            <p>{content.item4body}</p>
                        </div>
                    </div>
                
                </div>
            </div>

            <div className="row justify-content-between align-items-center doctolive-cest">
                <div className="col-lg-3 col-sm-12 ">
                <span className='start'>Doctolive c’est...</span>
                </div>

                <div className="col-lg-3 col-sm-12 text-center">
                <h4>10 Milliers</h4>
                 <span className='start2'>patients</span>
  
                </div>
                <div className="col-lg-3 col-sm-12 text-center">
                <h4> 23 000 </h4>
                 <span className='start2'>personnels de santé</span>
                </div>
                <div className="col-lg-3 col-sm-12 text-center">
                <h4> 50% </h4>
                 <span className='start2'>consultations</span>
                </div>
            </div>

            <div className="row justify-content-between align-items-center my-conf-css">
            <div className="col-lg-8 col-sm-12 ">
                <h3>Votre santé. Vos données.</h3>
                <p>La confidentialité de vos informations personnelles est une préiorité absolue pour Doctolive et guide notre action au quotidien.</p>
                <a className='engagement'> Découvrir nos engagements</a>
                </div>
                <div className="col-lg-4 col-sm-12 text-center ">
                <img src="/image/padlock-inject.png" alt="" className="img-fluid" />
                </div>
            </div>

            <div className="row justify-content-between align-items-center my-conf-css">
            <div className="col-lg-8 col-sm-12 ">
                <h3>Découvrez l’application mobile Doctolive</h3>
                <p>Pour accéder à vos praticiens à tout moment, où que vous soyez.</p>
                <a><img src="/image/play-s.png" alt="" className="img-fluid" /></a>
                <a><img src="/image/app-s.png" alt="" className="img-fluid" /></a>
                </div>
                <div className="col-lg-4 col-sm-12 text-center ">
                <img src="/image/character--inject-62.png" alt="" className="img-fluid" />
                </div>
            </div>

        </div>
    </section>
)