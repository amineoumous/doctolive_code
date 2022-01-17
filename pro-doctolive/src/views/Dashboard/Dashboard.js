import React from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

import Accessibility from "@material-ui/icons/Accessibility";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";

import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/views/dashboardStyle.js";
import Consulting from 'assets/img/consulting.png'
import {FcMoneyTransfer} from 'react-icons/fc'
const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
      
        <GridItem xs={12} sm={4} md={4}>
          <Card>
            <CardHeader color="success" style={{maxWidth: "100%", display:"block"}} stats icon>
              <CardIcon color="success">
                <FcMoneyTransfer />
              </CardIcon>
              <p className={classes.cardCategory}>Revenu</p>
              <h3 className={classes.cardTitle}>0 MAD </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                  Depuis la création
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <Card>
            <CardHeader color="danger" style={{maxWidth: "100%", display:"block"}} stats icon>
              <CardIcon color="danger" style={{textAlign: "center"}}>
              <img src={ Consulting} alt="  . . . " width="60%" /> 
              </CardIcon>
              <p className={classes.cardCategory}>Consultation</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                 En cabinet et en vidéo
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <Card>
            <CardHeader color="info" style={{maxWidth: "100%", display:"block"}} stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Patient traité</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Sur la plateforme
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      
    </div>
  );
}
