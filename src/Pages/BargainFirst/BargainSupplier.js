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

export default function BargainFirstSupplier({}) {
  const [money, setMoney] = useState();
  const [creditTerm, setCreditTerm] = useState(0);
  const [creditLine, setCreditLine] = useState(0);
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("true");
  const [isFocused, setIsFocused] = useState(false);

  const classes = useStyles();
  let history = useHistory();

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
    //     } else alert("回傳錯誤");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // alert(status);
  }
  function handleFinal() {
    setStatus("final");
  }

  function handleIntoAdmin() {
    history.push("/supplieradmin");
  }

  function validateForm() {
    return money != "" && creditLine != "" && creditTerm != "";
  }

  //從等供應商定價畫面 => 議價表單出來
  //如果有match成功 則換成Tick畫面
  function renderSwitch(param) {
    switch (param) {
      case "true":
        return (
          <>
            <Word>議價</Word>
            <Form onSubmit={tempSubmit}>
              <Content>
                <ContentWord>價格</ContentWord>
                <ContentWord style={{ color: "#757ce8" }}>
                  <BootstrapInput
                    id="demo-customized-textbox"
                    value={money}
                    style={{ width: "200px" }}
                    onChange={(e) => setMoney(e.target.value)}
                  />
                </ContentWord>
              </Content>
              <Content>
                <ContentWord>Credit Term</ContentWord>
                <ContentWord style={{ color: "#757ce8" }}>
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={creditTerm}
                    onChange={(e) => setCreditTerm(e.target.value)}
                    input={<BootstrapInput />}
                    onFocus={handleFocus}
                    style={{
                      borderBottomColor: isFocused ? "#f29979" : "#f29979",
                      width: "200px",
                    }}
                  >
                    <option aria-label="選擇creditTerm" value="" />
                    <option value={1}>一個月 </option>
                    <option value={2}>二個月</option>
                    <option value={3}>三個月</option>
                  </NativeSelect>
                </ContentWord>
              </Content>
              <Content>
                <ContentWord>Credit Line</ContentWord>
                <ContentWord style={{ color: "#757ce8" }}>
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={creditLine}
                    onChange={(e) => setCreditLine(e.target.value)}
                    input={<BootstrapInput />}
                    onFocus={handleFocus}
                    style={{
                      borderBottomColor: isFocused ? "#f29979" : "#f29979",
                      width: "200px",
                    }}
                  >
                    <option aria-label="選擇creditLine" value="" />
                    <option value={100}>一百萬 </option>
                    <option value={200}>一百二十萬</option>
                    <option value={300}>一百五十萬</option>
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
                  下一步
                </Button>
              </ContentFooter>
            </Form>
          </>
        );
      case "false":
        return (
          <>
            <Word>等待企業傳送契約</Word>
            <Loading />
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              endIcon={<SendIcon />}
              onClick={handleFinal}
            >
              下一步
            </Button>
          </>
        );
      case "final":
        return (
          <>
            <Word>契約產生</Word>
            <Content>
              <ContentWord>價格</ContentWord>
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
                進入決策中心
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
