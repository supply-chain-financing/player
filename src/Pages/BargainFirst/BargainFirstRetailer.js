import axios from "axios";
import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "@material-ui/core/Button";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import SendIcon from "@material-ui/icons/Send";
import { css } from "@emotion/react";

import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

import Loading from "../../components/Loading";

const Word = styled.div`
  position: static;
  font-size: 50px;
  font-family: "jf";
  font-weight: bold;
  text-align: center;
  //border: 2px solid black;
  color: black;
`;
const Content = styled.div`
  position: static;
  display: flex;
  margin-top: 1vh;
  font-family: "jf";
  font-weight: bold;
  text-align: left;
  //border: 2px solid black;
  color: black;
`;
const ContentWord = styled.div`
  position: static;
  width: 180px;
  margin-top: 3%;
  margin-right: 5%;
  font-size: 30px;
  font-family: "jf";
  font-weight: bold;
  text-align: left;
  //border: 2px solid black;
  color: black;
`;

const Block = styled.div`
  position: static;
  padding: 30px;
  width: 700px;
  height: 480px;
  margin-top: 10%;
  margin-left: 30vw;
  text-align: left;
  font-size: 50px;
  font-family: "jf";
  font-weight: bold;
  background-color: #ffffffd5;
  border: 8px solid #f29979;
  border-radius: 30px;
  color: black;
`;
const ContentFooter = styled.div`
  position: static;
  display: flex;
  align-items: center;

  font-size: 20px;
  font-family: "jf";
  font-weight: bold;
  text-align: center;
  //border: 2px solid black;
  color: black;
`;
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(2),
      fontFamily: "jf",
    },
  },
  input: {
    borderRadius: 10,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #adceed",
    fontFamily: "jf",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["jf"].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#f29979",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      fontFamily: "jf",
    },
  },
}))(InputBase);
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    fontFamily: "jf",
    fontWeight: "500",
    marginLeft: "42%",
  },
}));

export default function BargainFirst_retailer({}) {
  const [money, setMoney] = useState(0);
  const [creditTerm, setCreditTerm] = useState(0);
  const [creditLine, setCreditLine] = useState(0);
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("true");
  const [isFocused, setIsFocused] = useState(false);

  const classes = useStyles();
  let history = useHistory();

  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  function tempSubmit(e) {
    e.preventDefault();
    setStatus("false");
    // axios
    //   .post("", {
    //     values: [value1, value2, value3],
    //   })
    //   .then((res) => {
    //     if (res.data) {
    //     } else alert("????????????");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    alert("?????????" + amount);
  }

  function handleFinal() {
    setStatus("final");
  }

  function validateForm() {
    return amount != "";
  }
  function handleIntoAdmin() {
    history.push("/retaileradmin");
  }

  //??????????????????????????? => ??????????????????
  function renderSwitch(param) {
    switch (param) {
      case "true":
        return (
          <>
            <Word>??????</Word>
            <Form onSubmit={tempSubmit}>
              <Content>
                <ContentWord>????????????</ContentWord>
                <ContentWord style={{ color: "#757ce8" }}>{money}</ContentWord>
              </Content>
              <Content>
                <ContentWord>Credit Term</ContentWord>
                <ContentWord style={{ color: "#757ce8" }}>
                  {creditTerm}
                </ContentWord>
              </Content>
              <Content>
                <ContentWord>Credit Line</ContentWord>
                <ContentWord style={{ color: "#757ce8" }}>
                  {creditLine}
                </ContentWord>
              </Content>
              <Content>
                <ContentWord>??????</ContentWord>
                <ContentWord style={{ color: "#757ce8" }}>
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={amount}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                    onFocus={handleFocus}
                    style={{
                      borderBottomColor: isFocused ? "#f29979" : "#f29979",
                      width: "200px",
                    }}
                  >
                    <option aria-label="????????????" value="" />
                    <option value={100}>100 </option>
                    <option value={200}>200</option>
                    <option value={300}>300</option>
                  </NativeSelect>
                </ContentWord>
              </Content>

              <ContentFooter style={{}}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  endIcon={<SendIcon />}
                  onClick={tempSubmit}
                  disabled={!validateForm()}
                >
                  ?????????
                </Button>
              </ContentFooter>
            </Form>
          </>
        );
      case "false":
        return (
          <>
            <Word>????????????????????????</Word>
            <Loading />
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              endIcon={<SendIcon />}
              onClick={handleFinal}
            >
              ?????????
            </Button>
          </>
        );
      case "final":
        return (
          <>
            <Word>????????????</Word>
            <Content>
              <ContentWord>??????</ContentWord>
              <ContentWord style={{ color: "#757ce8" }}>{money}</ContentWord>
            </Content>
            <Content>
              <ContentWord>Credit Term</ContentWord>
              <ContentWord style={{ color: "#757ce8" }}>
                {creditTerm}
              </ContentWord>
            </Content>
            <Content>
              <ContentWord>Credit Line</ContentWord>
              <ContentWord style={{ color: "#757ce8" }}>
                {creditLine}
              </ContentWord>
            </Content>
            <Content>
              <ContentWord>Credit Line</ContentWord>
              <ContentWord style={{ color: "#757ce8" }}>{amount}</ContentWord>
            </Content>
            <ContentFooter style={{}}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                endIcon={<SendIcon />}
                onClick={handleIntoAdmin}
              >
                ??????????????????
              </Button>
            </ContentFooter>
          </>
        );
      default:
        return <></>;
    }
  }

  return (
    <>
      <Block>{renderSwitch(status)}</Block>
    </>
  );
}
