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
// core components

import styles from "assets/jss/components/sidebarStyle.js";
import { BsCircleFill } from 'react-icons/bs';

import medecinImage from "assets/img/medecin/homme.jpg";
import { useAuth } from "context/Auth";

import VideoChatIcon from 'assets/img/nav-icon/customer-service.svg'
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
      {routes.map((prop, key) => {
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
            <ListItem button className={classes.itemLink + listItemClasses}>
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
                })}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
          
        );
      })}
      <NavLink
            to={"/chat-video"}
            className={" " + classes.item}
            activeClassName="active"
            key={"chat"}
          >
            <ListItem button className={classes.itemLink}>
                <img src={VideoChatIcon} alt={"consultation video"}
                className={classNames(classes.itemIcon, {
                  [classes.itemIconRTL]: props.rtlActive
                })}
              />
            
              <ListItemText
                primary={"consultation video"}
                className={classNames(classes.itemText)}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <Link className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive
        })} to="/dashboard">
      <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        </Link>
    </div>
  );
  return (
    <div className="sidebar">
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper)
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
             {/* <AdminNavbarLinks /> */}
            {links}
          </div>
         
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="right"
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper)
          }}
        >
          {brand}
          <div className="profil">
              <div className="w-50">   
                  <BsCircleFill className="circle_online" />
                  <img className="profile-img" src={medecinImage} alt="" />
              </div>  
             
              <div className="ml-1">
                <span>Bienvenue,</span>
                <h5 className="upper"> Dr. {UserData.user.nom? UserData.user.prenom : ""}  </h5>  
                <Link to="/profil"> voir le profil </Link>   
              </div>
          </div>
          <div className={classes.sidebarWrapper}>{links}</div>
          
        </Drawer>
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
