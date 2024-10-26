import React from "react";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import { FaSearch } from 'react-icons/fa';
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import { useAuth } from "context/Auth";

import styles from "assets/jss/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks(props) {
  const { setUserData } = useAuth();

  const classes = useStyles();
  // const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);
  // const handleClickNotification = event => {
  //   if (openNotification && openNotification.contains(event.target)) {
  //     setOpenNotification(null);
  //   } else {
  //     setOpenNotification(event.currentTarget);
  //   }
  // };
  // const handleCloseNotification = () => {
  //   setOpenNotification(null);
  // };
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setUserData({});
    setOpenProfile(null);
  };
  return (
    <div className="header-c">
    <div className="link-acc">
       <NavLink
            to={"/dashboard"}
            className={classes.accueilLink}
            activeClassName="active"
            key={"chat"}
          >
            Acceuil
       
      </NavLink> 
    </div>
    
      <div className={classes.searchWrapper}>
        {/* <div className="input-search"> */}

        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
            <button className="search-button">
                <FaSearch />
            </button>
        </div>
        {/* <CustomInput
          formControlProps={{
            className: classes.margin + " " + classes.search
          }}
          inputProps={{
            placeholder: "Trouver vos patient",
            inputProps: {
              "aria-label": "Trouver vos patient"
            }
          }}
        />
        <Button color="white" aria-label="edit" justIcon >
          <Search />
        </Button> */}
      {/* </div> */}
      </div>

   
      <div className={classes.manager}>
  

     <NavLink to="#"  onClick={handleCloseProfile} className={"logoutbtn"}>
     Se déconnecter
      </NavLink>
 
      </div>
    </div>
  );
}
