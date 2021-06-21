import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
// import PerfectScrollbar from "perfect-scrollbar";
// import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
//sidebar components
import Sidebar from "../components/Sidebar";

//retailer 使用的 routes
import routes from "../routes_retailer";

export default function RetailerAdmin({ ...rest }) {
  return (
    <div>
      <Sidebar routes={routes} logoText={"SNSD"} />
    </div>
  );
}
