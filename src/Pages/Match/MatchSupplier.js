import { useTheme } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
//loader
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
import { Tick } from "react-crude-animated-tick";
//loader css
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #f29979;
  margin-top: 20%;
`;

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
  margin-top: 5%;
  font-size: 20px;
  font-family: "jf";
  font-weight: bold;
  text-align: left;
  //border: 2px solid black;
  color: black;
`;
const ContentWord = styled.div`
  position: static;
  width: 180px;
  margin-top: 5%;
  margin-right: 5%;
  font-size: 20px;
  font-family: "jf";
  font-weight: bold;
  text-align: left;
  //border: 2px solid black;
  color: black;
`;

const Block = styled.div`
  position: static;
  padding: 30px;
  width: 500px;
  height: 480px;
  margin-top: 10%;
  margin-left: 40%;
  text-align: left;
  font-size: 50px;
  font-family: "jf";
  font-weight: bold;
  background-color: #ffffffd5;
  border: 8px solid #f29979;
  border-radius: 30px;
  color: black;
`;

export default function MatchSupplier({}) {
  let [matchStatus, setMatchStatus] = useState(false);
  let [matchText, setMatchText] = useState(
    matchStatus ? "匹配完成" : "匹配中..."
  );
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#f29979");
  let history = useHistory();
  let btnstyle = {
    position: "static",
    marginLeft: "80%",
    marginTop: "1%",
    fontWeight: "400",
    borderRadius: "10px",
  };
  setTimeout(function () {
    setLoading(false);
    setMatchStatus(true);
  }, 3000);

  useEffect(() => {
    renderSwitch(loading);
  }, [loading, matchStatus]);

  // handle 下一步 Btn
  function handleClick() {
    history.push("/bargainfirstsupplier");
  }

  //如果有match成功 則換成Tick畫面
  function renderSwitch(param) {
    switch (param) {
      case true:
        return (
          <Content>
            <SyncLoader
              color={color}
              loading={loading}
              css={override}
              size={20}
              speedMultiplier={0.5}
            />
          </Content>
        );
      case false:
        return (
          <>
            <Content>
              <Tick size={200} style={{ border: "2px solid black" }} />
            </Content>
            <Content>
              <Button
                variant="outline-secondary"
                style={btnstyle}
                onClick={handleClick}
              >
                {" "}
                下一步
              </Button>
            </Content>
          </>
        );
      default:
        return "foo";
    }
  }

  return (
    <>
      <Block>
        {" "}
        <Word>{matchStatus ? "匹配完成" : "匹配中..."}</Word>
        {renderSwitch(loading)}
      </Block>
    </>
  );
}
