import axios from "axios";
import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

//radio 單選按鈕 import
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

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
  margin-top: 10%;
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
  margin-top: 7%;
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
    border: "1px solid #ced4da",
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

const BeautifulButton = styled.button`
position: static;
margin: 10px 10px 10px 330px;
color: #494949;
width:80px;
height: 40px;
text-transform: uppercase;
background: #ffffff;
padding: 5px;
font-size: 15px;
border: 1px solid #494949;
border-radius: 10px;
display: inline-block;
  border-radius: 30px,
  transition: all 0.2s ease 0s;
  &:hover {
    color: #ffffff;
    background: #f29979;
    border-color: #f29979;
    transition: all 0.2s ease 0s;
  }
`;
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function BasicInfoSupplier({}) {
  const classes = useStyles();
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = (event) => {
    setIndustry(event.target.value);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  let history = useHistory();
  //下一步btn
  let btnstyle = {
    position: "static",
    marginLeft: "80%",
    marginTop: "10%",
    fontWeight: "400",
    borderRadius: "10px",
  };

  function tempSubmit(e) {
    e.preventDefault();
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
    alert(companyName);
    history.push("/explanationsupplier");
  }
  function validateForm() {
    return companyName != "" && industry != "";
  }
  return (
    <>
      <Block>
        <Form onSubmit={tempSubmit}>
          <Word>基本資料</Word>
          <Content>
            <ContentWord>請替您的公司取名</ContentWord>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="demo-customized-textbox"
                style={{ fontFamily: "jf", color: "#f29979" }}
              >
                CompanyName
              </InputLabel>
              <BootstrapInput
                id="demo-customized-textbox"
                value={companyName}
                style={{ width: "200px" }}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </FormControl>
          </Content>
          <Content>
            <ContentWord>選擇產業類別</ContentWord>
            <FormControl className={classes.margin}>
              <InputLabel
                id="demo-customized-select-native"
                style={{
                  fontFamily: "jf",
                  color: "#f29979",
                }}
              >
                Industry
              </InputLabel>
              <NativeSelect
                id="demo-customized-select-native"
                value={industry}
                onChange={handleChange}
                input={<BootstrapInput />}
                onFocus={handleFocus}
                style={{
                  borderBottomColor: isFocused ? "#f29979" : "#f29979",
                  width: "200px",
                }}
              >
                <option aria-label="選擇產業" value="" />
                <option value={1}>科技業 (前置時間短) </option>
                <option value={2}>食品業(前置時間中)</option>
                <option value={3}>農業(前置時間常)</option>
              </NativeSelect>
            </FormControl>
          </Content>

          {/* <BeautifulButton
            onClick={() => handleClick()}
            disabled={!validateForm()}
          >
            下一步
          </BeautifulButton> */}
          <Button
            variant="outline-secondary"
            style={btnstyle}
            onClick={tempSubmit}
            disabled={!validateForm()}
          >
            {" "}
            下一步
          </Button>
        </Form>
      </Block>
    </>
  );
}
