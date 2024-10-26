/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import ProfileIcon from 'assets/img/icon-profile.svg'
import PoleIcon from 'assets/img/icon-pole.svg'
// core components
import { FaRegUserCircle } from "react-icons/fa";
import styles from "assets/jss/components/sidebarStyle.js";
import { BsCircleFill } from 'react-icons/bs';
import { HiOutlinePresentationChartBar } from "react-icons/hi";

import medecinImage from "assets/img/medecin/homme.jpg";
import { useAuth } from "context/Auth";
import { BsCameraVideo } from "react-icons/bs";
import VideoChatIcon from 'assets/img/consultation.svg'
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdPublishedWithChanges } from "react-icons/md";
const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const {UserData} = useAuth();
  console.log(UserData)
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }

  const {logo, routes } = props;
  
  var links = (
    <List className={classes.list}>
     <NavLink
            to={"/Profil"}
            className={" " + classes.item}
            activeClassName="active"
            key={"profil"}
          >
            <ListItem button className={classes.itemLink +" sidebar-color"}>
                <img src={ProfileIcon} alt={"Profile"}
                className={classNames(classes.itemIcon, {
                  [classes.itemIconRTL]: props.rtlActive
                })}
              />
            
              <ListItemText
                primary={"Profile"}
                className={classNames(classes.itemText) +" item-txt"}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
      {routes.map((prop, key) => {
        if(prop.path!="/pole"){
        var activePro = " ";
        var listItemClasses;
        listItemClasses = classNames({
          [" " + classes["blue"]]: activeRoute(prop.path)
        });
        
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.path)
        });
     
        return (
          
          <NavLink
            to={prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses+" sidebar-color"}>
              {typeof prop.icon === "string" ? (
                <img src={prop.icon} alt={prop.name}
                className={classNames(classes.itemIcon, whiteFontClasses, {
                  [classes.itemIconRTL]: props.rtlActive
                })}
              />
              ) : (
                <Icon
                className={classNames(classes.itemIcon, whiteFontClasses, {
                  [classes.itemIconRTL]: props.rtlActive
                })}
              >
                {prop.icon}
              </Icon>
              )}
              <ListItemText
                primary={ prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                }) +" item-txt"}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
          
        );
        }
      })}
      <NavLink
            to={"/chat-video"}
            className={" " + classes.item}
            activeClassName="active"
            key={"chat"}
          >
            <ListItem button className={classes.itemLink +" sidebar-color"}>
                <img src={VideoChatIcon} alt={"Consultation"}
                className={classNames(classes.itemIcon, {
                  [classes.itemIconRTL]: props.rtlActive
                })}
              />
            
              <ListItemText
                primary={"Consultation"}
                className={classNames(classes.itemText) +" item-txt"}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>

          <NavLink
            to={"/pole"}
            className={" " + classes.item}
            activeClassName="active"
            key={"pole"}
          >
            <ListItem button className={classes.itemLink +" sidebar-color"}>
                <img src={PoleIcon} alt={"Pôle emploi"}
                className={classNames(classes.itemIcon, {
                  [classes.itemIconRTL]: props.rtlActive
                })}
              />
            
              <ListItemText
                primary={"Pôle emploi"}
                className={classNames(classes.itemText) +" item-txt"}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
    </List>
  );

  var linksmobile = (
    <List className={classes.list}>
     <NavLink
            to={"/Profil"}
            className={" " + classes.item}
            activeClassName="active"
            key={"profil"}
          >
           
              <FaRegUserCircle size={25} color="38869C" />
            
            
           
          </NavLink>
 
          <NavLink
            to={"/dashboard"}
            className={" " + classes.item}
            activeClassName="active"
            key={"dashboard"}
          >
           
              <HiOutlinePresentationChartBar size={25} color="38869C" />
            
            
           
          </NavLink>
        

          <NavLink
            to={"/agenda"}
            className={" " + classes.item}
            activeClassName="active"
            key={"Agenda"}
          >
              <FaRegCalendarAlt size={25} color="38869C" />           
          </NavLink>
        
      
          <NavLink
            to={"/chat-video"}
            className={" " + classes.item}
            activeClassName="active"
            key={"dashboard"}
          >
              <BsCameraVideo size={25} color="38869C" />           
          </NavLink>

          <NavLink
            to={"/pole"}
            className={" " + classes.item}
            activeClassName="active"
            key={"dashboard"}
          >
              <MdPublishedWithChanges size={25} color="38869C" />           
          </NavLink>

          
      {/* <NavLink


            to={"/chat-video"}
            className={" " + classes.item}
            activeClassName="active"
            key={"chat"}
          >
            <ListItem button className={classes.itemLink +" sidebar-color"}>
                <img src={VideoChatIcon} alt={"Consultation"}
                className={classNames(classes.itemIcon, {
                  [classes.itemIconRTL]: props.rtlActive
                })}
              />
            
           
            </ListItem>
          </NavLink>

          <NavLink
            to={"/pole"}
            className={" " + classes.item}
            activeClassName="active"
            key={"pole"}
          >
            <ListItem button className={classes.itemLink +" sidebar-color"}>
                <img src={PoleIcon} alt={"Pôle emploi"}
                className={classNames(classes.itemIcon, {
                  [classes.itemIconRTL]: props.rtlActive
                })}
              />
            
              <ListItemText
                primary={"Pôle emploi"}
                className={classNames(classes.itemText) +" item-txt"}
                disableTypography={true}
              />
            </ListItem>
          </NavLink> */}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <Link className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive
        })} to="/dashboard">
     {"Acceuil"}
        </Link>
    </div>
  );
  return (
    <div className="">
      <Hidden mdUp implementation="css">
          <div className={classes.sidebarWrapper +" menu-patient-icon"}>
          {linksmobile}
          </div>
      
      </Hidden>
      
   
      <Hidden smDown implementation="css">
        
          <div className={classes.sidebarWrapper}>{links}</div>
          
  
      </Hidden>

      
    </div>
  );
}

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool
};
