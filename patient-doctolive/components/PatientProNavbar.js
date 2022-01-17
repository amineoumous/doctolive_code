import React, { useEffect, useState, useRef } from 'react'
import { Navbar, Nav, Row, Container, } from 'react-bootstrap';
// import {Link } from "react-router-dom";
import Link from 'next/link'
import { withRouter } from 'next/router'

import { makeStyles } from "@material-ui/core/styles";

import classNames from "classnames";

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";

import {useAuth} from './../context/AuthContext'

import { useRouter } from 'next/router';

import contentFR from './../contentFR'
import contentEN from './../contentEN'
import contentAR from './../contentAR'

import LangSwitch from './LangSwitcher'

// core components

import Button from "./CustomButtons/Button.js";


import styles from "../assets/jss/PatientPublicNavbarStyle.js";
import stylesDropdown from "../assets/jss/headerLinksStyle.js";

import {  BsFillPersonFill } from 'react-icons/bs'

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(stylesDropdown);

function PatientPublicNavbar(props) {
    const classes = useStyles();
    const classes2 = useStyles1();

    const router = useRouter();

    const {locale} = router;
    const content = locale === "ar" ? contentAR : locale === "en" ? contentEN : contentFR;

    const [colapsed, setColapsed] = useState(false)

    const [openProfile, setOpenProfile] = useState(null);

    const { userData, setUser } = useAuth();

    const isToggled = (etat) => {
        setColapsed(etat)
      }

      
      const handleClickProfile = event => {
        if (openProfile && openProfile.contains(event.target)) {
          setOpenProfile(null);
        } else {
          setOpenProfile(event.currentTarget);
        }
      };
      const handleCloseProfile = () => {
        setUser({});
        setOpenProfile(null);
        
      };
       
      const appBarClasses = classNames({
        [" " + classes["transparent"]]: true
      });
    return (
                <div >
                    {/* <AppBar color="transparent" style={{backgroundColor: "#1ab9b9"}} className={classes.appBar + appBarClasses}> */}
                        {/* <Toolbar className={classes.container}> */}
                                <Navbar className={classes.navWrap} collapseOnSelect={true} expand="lg" as="nav" onToggle={isToggled}>
                                    <div className={classes.navContent} > 

                                        <div className= "d-flex header-100-md">
                                            <a  href="/" to="/" className="navbar-brand" > 
                                                <div style={{display: "inline-block",
                                                    width: "95px",
                                                    height: "50px",
                                                    backgroundImage: `url(/image/doctoLogo-white.png)`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "center",
                                                    backgroundSize: "95px auto",}}>  </div> 
                                            </a>
                                            <Navbar.Toggle aria-expanded={colapsed} aria-controls="basic-navbar-nav" className="mx-5" >
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </Navbar.Toggle>
                                        </div>
                                        
                                        <Row className="m-0">
                                            <Navbar.Collapse id="basic-navbar-nav">
                                                
                                                <Nav as="ul" activeKey={props.router? props.router.pathname: null} className={classes.navbarNav} >
                                                  
                                                    <Nav.Item as="li">
                                                        <Link href='/account/appointments' passHref>
                                                            <Nav.Link className="" > 
                                                                <span > {content.pronavbar.rdv}  </span>
                                                            </Nav.Link> 
                                                            </Link>
                                                        </Nav.Item>
                                                
                                                
                                                    <Nav.Item as="li"> 
                                                        <Link href='/account/documents' passHref>
                                                            <Nav.Link className="" > 
                                                                <span >  {content.pronavbar.document} </span>
                                                            </Nav.Link> 
                                                        </Link>
                                                    </Nav.Item>
                                                
                                                    <Hidden  mdUp implementation="css">
                                                        <Nav.Item as="li"> 
                                                            <Link href='/account/profile' passHref>
                                                                <Nav.Link className="" > 
                                                                    <span >  {content.pronavbar.dropDown1} </span>
                                                                </Nav.Link> 
                                                            </Link>
                                                        </Nav.Item>
                                                        <MenuList role="menu">
                                                                    <Divider light />
                                                                    <MenuItem
                                                                    onClick={handleCloseProfile}
                                                                    className={classes2.dropdownItem}
                                                                    >
                                                                        {content.pronavbar.dropDown2}
                                                                    </MenuItem>
                                                        </MenuList>
                                                    </Hidden>
                                                </Nav>
                                                <Hidden mdDown implementation="css">
                                                <div className={classes2.manager}>
                                                        <Button
                                                        color={window.innerWidth > 959 ? "transparent" : "white"}
                                                        // justIcon={window.innerWidth > 959}
                                                        simple={!(window.innerWidth > 959)}
                                                        aria-owns={openProfile ? "profile-menu-list-grow" : null}
                                                        aria-haspopup="true"
                                                        onClick={handleClickProfile}
                                                        className={classes2.buttonLink}
                                                        >
                                                        <BsFillPersonFill className={classes2.icons} />
                                                        <Hidden mdDown implementation="css">
                                                            <p className={classes2.linkText}>{!userData.user? null : userData.user.email}</p>
                                                        </Hidden>
                                                        </Button>
                                                        <Poppers
                                                        placement={'bottom'}
                                                        // style={{right: -10}}
                                                        open={ window.innerWidth < 959 || Boolean(openProfile)}
                                                        anchorEl={openProfile}
                                                        transition
                                                        disablePortal
                                                        className={
                                                            classNames({ [classes2.popperClose]: !openProfile }) +
                                                            " mr-4 " +
                                                            classes2.popperNav
                                                        }
                                                        >
                                                        {({ TransitionProps, placement }) => (
                                                            <Grow
                                                            {...TransitionProps}
                                                            id="profile-menu-list-grow"
                                                            style={{
                                                                transformOrigin:
                                                                placement === "bottom" ? "center top" : "center bottom"
                                                            }}
                                                            >
                                                            <Paper>
                                                                <ClickAwayListener onClickAway={() => {setOpenProfile(null);}}>
                                                                <MenuList role="menu">
                                                                    <MenuItem
                                                                    onClick={() => {router.push('/account/profile')}}
                                                                    className={classes2.dropdownItem}
                                                                    >
                                                                    {content.pronavbar.dropDown1}
                                                                    </MenuItem>
                                                                    <Divider light />
                                                                    <MenuItem
                                                                    onClick={handleCloseProfile}
                                                                    className={classes2.dropdownItem}
                                                                    >
                                                                        {content.pronavbar.dropDown2}
                                                                    </MenuItem>
                                                                </MenuList>
                                                                </ClickAwayListener>
                                                            </Paper>
                                                            </Grow>
                                                        )}
                                                        </Poppers>
                                                    </div>
                                                    </Hidden>

                                                   
                                                    <LangSwitch />
                                            </Navbar.Collapse>
                                        </Row>
                                            
                                    </div>
                                    
                                </Navbar>
                         
                        {/* </Toolbar>
                    </AppBar> */}
                    
                </div>
)
}

export default withRouter(PatientPublicNavbar)