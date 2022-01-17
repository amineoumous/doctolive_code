
import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/globals.css'
import './../styles/fancybox.css';

import Layout from './../components/Layout'

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import { AppWrapper } from './../context/AppointementContext'; 
import { AuthWrapper } from './../context/AuthContext'; 

import Config from './../EndPoint';

import io from "socket.io-client";

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

import { useRouter } from 'next/router';



import moment from 'moment'
import MomentLangue from './../components/MomentLangu'
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


export default function MyApp(props) {
  const router = useRouter();
  const {locale} = router;
  const momentLoc = locale === "ar" ? "ma" : locale
  moment.updateLocale(momentLoc,  MomentLangue[momentLoc]); 

  const [socket, setSocket] = React.useState();

  const { Component, pageProps } = props;
  React.useEffect(() => {
       
    const options = {
        path:"/socket.io",
        reconnection: true,
        reconnectionAttempts: Infinity,
        transports: ['websocket']
    }
    
    let connection = io.connect(Config.BACKEND_URL, options);
    connection.on('connect', () => {
      console.log('connect');
      connection.emit('join-patient',  {id: "p" + 1} , ({error, message }) => {
        console.log(error, message);
        if(error) {
            setSocketError(error, message)
        }
        else{
        
        }
    });
    });

    connection.on('connect_error', (error) => {
        console.log('connect_error', error)
    }); 

    connection.on('disconnect', (reason) => {
        console.log('disconnect', reason)

    });
  

    connection.on('reconnect_attempt', () => {
        console.log('reconnect_attempt')

    });

    connection.on('reconnecting', () => {
        console.log('reconnecting')

    });
    connection.on('reconnect', () => {
        console.log('reconnect')

       
    });

  

    setSocket(connection)
}, [] );


  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
   
  return () => {
      
  }
  }, []);

  React.useEffect(() => {
    switch (locale) {
        case "ar":  
            document.documentElement.lang = 'ar'; 
            document.documentElement.dir = 'rtl'; 
            break;
        case "en":  
            document.documentElement.lang = 'en'; 
            document.documentElement.dir = 'ltr'; 
            break;
        default :  
            document.documentElement.lang = 'fr'; 
            document.documentElement.dir = 'ltr'; 
            break;
    }
    return () => {
        
    }
  }, [locale]) 

  return (
    <React.Fragment>
      <Head>
        <title> Doctolive </title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <StylesProvider jss={jss}>
      <ThemeProvider theme={createMuiTheme({
  direction: locale === "ar" ? 'rtl' : "ltr",
  palette: {
    primary: {
      main: '#1ab9b9',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    typography: {
      fontFamily: [
        'Barlow',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  },
})}>
        <CssBaseline />
        
          <AppWrapper>
            <AuthWrapper >
              <Layout locale={locale} pathname= {router.pathname} > 
                <Component {...pageProps} socket={socket} />  
              </Layout>
            </AuthWrapper>
          </AppWrapper>
          
        
      </ThemeProvider>
      </StylesProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};


// Create a theme instance.
