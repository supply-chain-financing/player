import axios from "axios";
import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

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
const LoginForm = styled.div`
  margin: 0 auto;
  margin-top: 10%;
  max-width: 320px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 15%,
    transparent 50%,
    transparent 85%,
    rgba(255, 255, 255, 0.3) 100%
  );
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  font-family: "jf";
`;

export default function Login() {
  const [classNum, setClassNum] = useState("");
  const [classPassword, setclassPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function tempSubmit(e) {
    e.preventDefault();
    if (classNum === "123") {
      history.push("/chooserole");
    } else {
      alert("要進入角色畫面請開窗大喊「我愛老金」");
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        "",
        { classNum, classPassword, email, password },
        { withCredentials: true }
      )
      .then(async (res) => {
        if (res.status === 200) {
          // setAccessToken(res.data.accessToken);
          // userlogin();
          // history.push("/dashboard");
        } else {
          alert("回傳錯誤");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          alert(err.response.data);
        } else if (err.response && err.response.status === 500) {
          alert("Internal Server Error");
        }
      });
  }

  return (
    <Background>
      <LoginForm>
        <Form onSubmit={tempSubmit}>
          <Form.Group size="lg" controlId="classNum">
            <Form.Label>教室</Form.Label>
            <Form.Control
              autoFocus
              autoComplete="on"
              type="classNum"
              style={{
                outline: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                padding: "8px 10px",
                borderRadius: "10px",
                color: "black",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: "inset 0 0 25px rgba(0,0,0,0.2)",
              }}
              value={classNum}
              onChange={(e) => setClassNum(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="classPassword">
            <Form.Label>教室密碼</Form.Label>
            <Form.Control
              type="classPassword"
              autoComplete="on"
              style={{
                outline: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                padding: "8px 10px",
                borderRadius: "10px",
                color: "black",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: "inset 0 0 25px rgba(0,0,0,0.2)",
              }}
              value={classPassword}
              onChange={(e) => setclassPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="email">
            <Form.Label>帳號</Form.Label>
            <Form.Control
              type="email"
              autoComplete="on"
              style={{
                outline: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                padding: "8px 10px",
                borderRadius: "10px",
                color: "black",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: "inset 0 0 25px rgba(0,0,0,0.2)",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>密碼</Form.Label>
            <Form.Control
              type="password"
              autoComplete="on"
              style={{
                outline: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                padding: "8px 10px",
                borderRadius: "10px",
                color: "black",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: "inset 0 0 25px rgba(0,0,0,0.2)",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            style={{
              fontWeight: "900",
              width: "5rem",
              margin: "10px 10px 10px 50px",
              border: "none",
              borderRadius: "30px",
              color: "#ee786c",
              backgroundColor: "#fff",
              transition: "all ease .5s",
              ":hover": {
                backgroundColor: "#ee786c",
                color: "#ffffff",
              },
            }}
            type="submit"
            disabled={!validateForm()}
          >
            登入
          </Button>
          <Button
            style={{
              position: "static",
              fontWeight: "900",
              border: "none",
              width: "5rem",
              margin: "0.5vw",
              borderRadius: "30px",
              color: "#ee786c",
              backgroundColor: "#fff",
              transition: "all ease .5s",
              ":hover": {
                backgroundColor: "#ee786c",
                color: "#ffffff",
              },
            }}
            type="submit"
            href="/register"
          >
            註冊
          </Button>
        </Form>
      </LoginForm>
    </Background>
  );
}
