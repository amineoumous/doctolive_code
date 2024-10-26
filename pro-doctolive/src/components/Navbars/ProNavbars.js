import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import {Row, Col, Container} from 'react-bootstrap'
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

  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>     
        <Container className="p-0">
            <ProNavbarLink {...props} />
        </Container>          
       

      </Toolbar>
    </AppBar>
  );
}
const routes = [

]
Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
};
