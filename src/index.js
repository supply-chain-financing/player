import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Link, useHistory } from "react-router-dom";
import Start from "./Pages/Start";
import Login from "./Pages/Login";
import ChooseRole from "./Pages/ChooseRole";
import Register from "./Pages/Register";
import Retailer from "./Pages/Retailer";
import Supplier from "./Pages/Supplier";
import BasicInfo from "./components/BasicInfo";
import Explanation from "./Pages/Explanation";
import Match from "./Pages/Match";
import SupplierAdmin from "./layouts/SupplierAdmin";
import RetailerAdmin from "./layouts/RetailerAdmin";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    ></link>
    <Router>
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/Login" exact component={Login} />
        <Route path="/ChooseRole" exact component={ChooseRole} />
        <Route path="/Register" exact component={Register} />
        <Route path="/Retailer" component={Retailer} />
        <Route path="/Supplier" component={Supplier} />
        <Route path="/basicinfo" exact component={BasicInfo} />
        <Route path="/explanation" exact component={Explanation} />
        <Route path="/match" exact component={Match} />
        <Route path="/supplieradmin" component={SupplierAdmin} />
        <Redirect from="/supplieradmin" to="/supplieradmin/dashboard" />
        <Route path="/retaileradmin" component={RetailerAdmin} />
        <Redirect from="/retaileradmin" to="/retaileradmin/dashboard" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
