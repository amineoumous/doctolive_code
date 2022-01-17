import React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabProfil() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {/* <Tab label="réservation" {...a11yProps(0)} /> */}
          <Tab label="information sur le cabinet" {...a11yProps(1)} />
          <Tab label="des avis" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      
        <TabPanel value={value} index={1} dir={theme.direction}>

        {/* <div className="tab-pane fade" id="general" role="tabpanel" aria-labelledby="general-tab"> */}
            
            {/* <!--  End wrapper_indent --> */}

        {/* </div> */}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        {/* <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab"> */}
            <div className="reviews-container">
                <div className="row">
                    <div className="col-lg-3">
                        <div id="review_summary">
                            <strong>4.7</strong>
                            <div className="rating">
                                <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                            </div>
                            <small>Based on 4 reviews</small>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
                        </div>
                        {/* <!-- /row --> */}
                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
                        </div>
                        {/* <!-- /row --> */}
                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar"  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
                        </div>
                        {/* <!-- /row --> */}
                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
                        </div>
                        {/* <!-- /row --> */}
                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar"  aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
                        </div>
                        {/* <!-- /row --> */}
                    </div>
                </div>
                {/* <!-- /row --> */}
                
                <hr />
                
                <div className="review-box clearfix">
                    <figure className="rev-thumb"><img src="img/avatar1.jpg" alt="" />
                    </figure>
                    <div className="rev-content">
                        <div className="rating">
                            <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                        </div>
                        <div className="rev-info">
                            Admin – April 03, 2016:
                        </div>
                        <div className="rev-text">
                            <p>
                                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- /review-box --> */}

                <div className="review-box clearfix">
                    <figure className="rev-thumb"><img src="img/avatar2.jpg" alt="" />
                    </figure>
                    <div className="rev-content">
                        <div className="rating">
                            <i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                        </div>
                        <div className="rev-info">
                            Ahsan – April 01, 2016
                        </div>
                        <div className="rev-text">
                            <p>
                                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- End review-box --> */}

                <div className="review-box clearfix">
                    <figure className="rev-thumb"><img src="img/avatar3.jpg" alt="" />
                    </figure>
                    <div className="rev-content">
                        <div className="rating">
                            <i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                        </div>
                        <div className="rev-info">
                            Sara – March 31, 2016
                        </div>
                        <div className="rev-text">
                            <p>
                                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- End review-box --> */}
                
            </div>
            {/* <!-- End review-container --> */}
            <hr />
            <div className="text-right"><a href="submit-review.html" className="btn_1 add_bottom_15">Submit review</a></div>
        {/* </div> */}
        </TabPanel>
    </div>
  );
}
