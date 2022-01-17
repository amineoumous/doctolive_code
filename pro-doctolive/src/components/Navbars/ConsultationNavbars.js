import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import ProNavbarLink from "./ProNavbarLink.js";

import styles from "assets/jss/components/headerStyle.js";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();

  const { color, routes } = props;

  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
        <Link to='/profil' className={classes.title}>
          profile
        </Link>
          {
                routes.map(prop => {
                  return <Link key={"/" + prop.path} to={prop.path} className={classes.title}>
                            { prop.name }
                          </Link>
                })
                
          }
        </div>
        <Hidden smDown implementation="css">
          <ProNavbarLink {...props} />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
};
