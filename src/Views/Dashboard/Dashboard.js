import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
//import 決策component
import Repayment from "../Repayment/Repayment";
import Loan from "../Loan/Loan";
import Bargain from "../Bargain/Bargain";
import Investment from "../Investment/Investment";

import Merchandise from "../Merchandise/Merchandise";
import DeliveryPayment from "../DeliveryPayment/DeliveryPayment";
import ReceiptDate from "../ReceiptDate/ReceiptDate";
// sup 的
import MadeProduct from "../MadeProduct/MadeProduct";
import Delivery from "../Delivery/Delivery";
// material ui
import PropTypes from "prop-types";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import axios from "axios";
import { render } from "react-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
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
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ebf4f5",
    width: "80vw",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const getRoute = () => {
    // alert(window.location.pathname);
    return window.location.pathname;
  };
  function renderSwitch(param) {
    switch (param) {
      case "/retaileradmin/dashboard":
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
                <Tab label="還款" {...a11yProps(0)} />
                <Tab label="借貸" {...a11yProps(1)} />
                <Tab label="議價" {...a11yProps(2)} />
                <Tab label="投資" {...a11yProps(3)} />
                <Tab label="販賣商品" {...a11yProps(4)} />
                <Tab label="繳交貨款" {...a11yProps(5)} />
                <Tab label="收貨" {...a11yProps(6)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Repayment></Repayment>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <Loan></Loan>
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <Bargain></Bargain>
              </TabPanel>
              <TabPanel value={value} index={3} dir={theme.direction}>
                <Investment></Investment>
              </TabPanel>
              <TabPanel value={value} index={4} dir={theme.direction}>
                <Merchandise></Merchandise>
              </TabPanel>
              <TabPanel value={value} index={5} dir={theme.direction}>
                <DeliveryPayment></DeliveryPayment>
              </TabPanel>
              <TabPanel value={value} index={6} dir={theme.direction}>
                <ReceiptDate></ReceiptDate>
              </TabPanel>
            </SwipeableViews>
          </div>
        );
      case "/supplieradmin/dashboard":
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
                <Tab label="還款" {...a11yProps(0)} />
                <Tab label="借貸" {...a11yProps(1)} />
                <Tab label="議價" {...a11yProps(2)} />
                <Tab label="投資" {...a11yProps(3)} />
                <Tab label="製作商品" {...a11yProps(4)} />
                <Tab label="交貨" {...a11yProps(5)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Repayment></Repayment>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <Loan></Loan>
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <Bargain></Bargain>
              </TabPanel>
              <TabPanel value={value} index={3} dir={theme.direction}>
                <Investment></Investment>
              </TabPanel>
              <TabPanel value={value} index={4} dir={theme.direction}>
                <MadeProduct></MadeProduct>
              </TabPanel>
              <TabPanel value={value} index={5} dir={theme.direction}>
                <Delivery></Delivery>
              </TabPanel>
            </SwipeableViews>
          </div>
        );
      default:
        return <></>;
    }
  }

  return <>{renderSwitch(getRoute())}</>;
}
