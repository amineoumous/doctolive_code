import React, {useEffect} from "react";
import { Switch, Route } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/ProNavbars.js";
import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/layouts/ChatProStyle.js";
import Chat from 'views/Chat/Chat'
import Teleconsultation from 'views/Chat/Teleconsultation'
import Sidebar from "components/Sidebar/MedecinSidebar.js";

import logo from "assets/img/doctoLogo.png";
import routes from "routes.js";

let ps;

const useStyles = makeStyles(styles);

export default function MedecinPro({socket, ...rest }) {

  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  

  useEffect(() => {

    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }


    return () => {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }

    };
    
  }, [mainPanel]);

  return (
    <main className={classes.wrapper}>
      <div className={classes.mainPanel} ref={mainPanel}>

      <Sidebar
        routes={routes.medecinPro}
        logoText={"DOCTOLIVE"}
     
   
        logo={logo}
        {...rest}
      />

        <Navbar
          {...rest}

          routes={routes.medecinPro}
        />
          <div className={classes.content}>
            <div className={classes.container}>
              <Switch>
                <Route
                  path="/chat-video"
                  render= {(pr) => <Chat {...pr} socket={socket} /> }
                  key={"chat"}
                  exact
                />
                <Route
                  path="/chat-video/:code"
                  render= {(pr) => <Teleconsultation {...pr} socket={socket} /> }
                  key={"chat"}

                />
              </Switch>
            </div>
          </div>
        
         <Footer />
      </div>
    </main>
  );
}
