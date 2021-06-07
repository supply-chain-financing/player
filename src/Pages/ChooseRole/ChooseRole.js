import axios from "axios";
import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import supplier from "../../assets/role.png";
import retailer from "../../assets/role.png";

const Background = styled.div`
  background-color: #b9d8da;
  box-sizing: border-box;
  position: absolute;
  padding: 0em;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
`;
const SCF = styled.div`
  position: static;
  width: 1000px;
  height: 100px;
  margin-top: 10%;
  margin-left: 35%;
  text-align: left;
  font-size: 50px;
  font-family: "Comic Sans MS";
  font-weight: bold;
  // border: 2px solid black;
  color: #ee786c;
`;
const Choose = styled.div`
  position: static;
  width: 1000px;
  height: 100px;
  margin-top: 5%;
  margin-left: 40%;
  text-align: left;
  font-size: 50px;
  font-family: "jf";
  font-weight: bold;
  // border: 2px solid black;
  color: #ee786c;
`;

const RoleBlock = styled.div`
  display: inline-flex;
  // border: 2px solid black;
  margin-left: 20vw;
  text-align: center;
`;

const SupplierBlock = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 300px;
  margin-top: 5%;
  margin-left: 10vw;
  text-align: center;
  font-size: 50px;
  font-family: "jf";
  font-weight: bold;
  // border: 2px solid black;
  color: #ee786c;
`;
const RetailerBlock = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 300px;
  margin-top: 5%;
  margin-left: 20vw;
  text-align: center;
  font-size: 50px;
  font-family: "jf";
  font-weight: bold;
  // border: 2px solid black;
  color: #ee786c;
`;

export default function ChooseRole() {
  return (
    <Background>
      <SCF>Supply Chain Financing</SCF>
      <Choose>請選擇您的角色</Choose>
      <RoleBlock>
        <Link to="/supplier">
          <SupplierBlock>
            供應商
            <img
              src={supplier}
              style={{ width: "200px", height: "200px", marginTop: "3vh" }}
              to="./retailer"
            />
          </SupplierBlock>
        </Link>
        <Link to="/retailer">
          <RetailerBlock>
            企業
            <img
              src={supplier}
              style={{ width: "200px", height: "200px", marginTop: "3vh" }}
            />
          </RetailerBlock>
        </Link>
      </RoleBlock>
    </Background>
  );
}
