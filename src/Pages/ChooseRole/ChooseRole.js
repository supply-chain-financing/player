import axios from "axios";
import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import supplier from "../../assets/role.png";
import retailer from "../../assets/role.png";

import Modal from "react-bootstrap/Modal";

const ModalPlace = styled.div`
  margin-top: 1vh;
  //border: 2px solid black;
`;
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
  gap: 10vw;
  width: 100%;
  // border: 2px solid black;
  justify-content: center;
`;

const SupplierBlock = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 300px;
  margin-top: 5%;
  text-align: center;
  font-size: 50px;
  font-family: "jf";
  font-weight: bold;
  //border: 2px solid black;
  color: #ee786c;
`;
const RetailerBlock = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 300px;
  margin-top: 5%;
  text-align: center;
  font-size: 50px;
  font-family: "jf";
  font-weight: bold;
  //border: 2px solid black;
  color: #ee786c;
`;

export default function ChooseRole() {
  const [role, setRole] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let history = useHistory();

  function toggleTrueFalse() {
    setShowModal(handleShow);
  }

  //??????????????????modal
  function tempSubmit(e) {
    setRole(e.target.value);
    toggleTrueFalse();
  }
  function handleChoice() {
    // axios
    //   .post("", {

    //   })
    //   .then((res) => {
    //     if (res.data) {
    //       history.push();
    //     } else alert("????????????");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //????????????????????????
    if (role === "supplier") {
      history.push("/supplier");
    } else {
      history.push("/retailer");
    }
  }

  const ModalContent = () => {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>{modalInfo.loanAgreementId}</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>???????????????{role}??????</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleChoice}>
            ??????
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            ??????
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  return (
    <Background>
      <SCF>Supply Chain Financing</SCF>
      <Choose>?????????????????????</Choose>
      <RoleBlock>
        <SupplierBlock>
          <Button
            variant="outline-light"
            size="lg"
            style={{ color: "#ee786c" }}
            value={"supplier"}
            onClick={tempSubmit}
          >
            ?????????
          </Button>
          <img
            src={supplier}
            style={{ width: "200px", height: "200px", marginTop: "3vh" }}
          />
        </SupplierBlock>
        <RetailerBlock>
          <Button
            variant="outline-light"
            size="lg"
            style={{ color: "#ee786c" }}
            value={"retailer"}
            onClick={tempSubmit}
          >
            ??????
          </Button>
          <img
            src={supplier}
            style={{ width: "200px", height: "200px", marginTop: "3vh" }}
          />
        </RetailerBlock>
      </RoleBlock>

      <ModalPlace>{show ? <ModalContent /> : null}</ModalPlace>
    </Background>
  );
}
