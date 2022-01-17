import React, {useEffect} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

// import BaseUrl from 'Config.js'

// import io from "socket.io-client";

import routes from "routes.js";

import styles from "assets/jss/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar.jpeg";
import logo from "assets/img/doctolive.png";

let ps;

const switchRoutes = (
  <Switch>
    {routes.admin.map((prop, key) => {        
      return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {


  const classes = useStyles();
  const mainPanel = React.createRef();
  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getRoute = () => {
    return window.location.pathname !== "/admin/maps" && window.location.pathname.slice(0, 16) !== "/admin/livreurs/" && window.location.pathname.slice(0, 13) !== "/admin/medecins/";
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes.admin}
        logoText={"DOCTOLIVE ADMIN"}
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={"purple"}
        {...rest}
      />
      <div className={classes.mainPanel+ " main-panel"} ref={mainPanel}>
        <Navbar
          routes={routes.admin}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
       
        { getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
         <Footer />
      </div>
    </div>
  );
}
