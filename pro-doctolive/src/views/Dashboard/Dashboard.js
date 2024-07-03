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
import Consulting from 'assets/img/consultation2.svg'
import imageMoney from 'assets/img/money-img.svg'
import Accessibility2 from 'assets/img/access.svg'
import {FcMoneyTransfer} from 'react-icons/fc'
const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
      
        <GridItem xs={12} sm={4} md={4}>
          <Card className={"card-stats"}>
            <CardHeader color="success" style={{maxWidth: "100%", display:"block",textAlign:"center",alignItems: "center",top:-44,justifyContent: "center"}} stats icon>
              <div >
              <img src={imageMoney} alt="  . . . " className={classes.cardImg}  /> 
              </div>
              <p className={classes.cardCategory}>Revenu</p>
            
            </CardHeader>
            <div className={classes.stats}>
                <DateRange />
                  Depuis la création
              </div>
            <CardFooter style={{width:"100%",textAlign:"center",alignItems:"center",justifyContent:"center"}} stats>
           
              <h3 className={classes.cardTitle}>0 MAD </h3>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={4} md={4}>
          <Card className={"card-stats"}>
            <CardHeader color="success" style={{maxWidth: "100%", display:"block",alignItems: "center",top:-44,justifyContent: "center",textAlign:"center"}} stats icon>
              <div>
              <img src={Consulting} alt="  . . . " className={classes.cardImg}  /> 
              </div>
              <p className={classes.cardCategory}>Consultation</p>
            
            </CardHeader>
            <div className={classes.stats}>
            <LocalOffer />
                En cabinet et en vidéo
              </div>
            <CardFooter style={{width:"100%",textAlign:"center",alignItems:"center",justifyContent:"center"}} stats>
           
              <h3 className={classes.cardTitle}>75</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <Card className={"card-stats"}>
            <CardHeader color="success" style={{maxWidth: "100%", display:"block",textAlign:"center",alignItems: "center",top:-44,justifyContent: "center"}} stats icon>
              <div >
              <img src={Accessibility2} alt="  . . . " className={classes.cardImg}  /> 
              </div>
              <p className={classes.cardCategory}> Patient traité</p>
            
            </CardHeader>
            <div className={classes.stats}>
            <Update />
               
                Sur la plateforme
              </div>
            <CardFooter style={{width:"100%",textAlign:"center",alignItems:"center",justifyContent:"center"}} stats>
           
              <h3 className={classes.cardTitle}>250 </h3>
            </CardFooter>
          </Card>
        </GridItem>

     
      </GridContainer>
      
    </div>
  );
}
