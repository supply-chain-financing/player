import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { useState, useEffect } from "react";
import axios from "axios";
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationFactory,
} from "react-bootstrap-table2-paginator";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Form from "react-bootstrap/Form";

const ModalPlace = styled.div`
  margin-top: 1vh;
  //border: 2px solid black;
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

export default function Investment() {
  const [stock, setStock] = useState([]);
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [amount, setAmount] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const data = [
    {
      stockId: "1",
      stockName: "大宇資訊",
      sharePrice: 8.3,
      expectedReturn: 10.65,
      riskFactor: 2,
    },
    {
      stockId: "2",
      stockName: "SM榨乾機",
      sharePrice: 8.3,
      expectedReturn: 10.65,
      riskFactor: 2,
    },
    {
      stockId: "3",
      stockName: "JPY cody悲慘事業",
      sharePrice: 8.3,
      expectedReturn: 10.65,
      riskFactor: 2,
    },
  ];

  const getData = async () => {
    try {
      // const data = await axios.get("");
      // setStock(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const columns = [
    { dataField: "stockId", text: "代碼" },
    { dataField: "stockName", text: "公司名稱" },
    { dataField: "sharePrice", text: "買進價格" },
    { dataField: "expectedReturn", text: "預期收益" },
    { dataField: "riskFactor", text: "風險因子" },
  ];

  const rowEvents = {
    onClick: (e, row) => {
      setModalInfo(row);
      toggleTrueFalse();
    },
  };

  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };
  //買進的dropdownlist
  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  //買進 api
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
    alert("數量：" + amount);
  }
  function validateForm() {
    return amount != "";
  }

  const ModalContent = () => {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.stockName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={tempSubmit}>
            <ul>
              <ol>股票編號：{modalInfo.stockId}</ol>
              <ol>股價（一股）：{modalInfo.sharePrice}</ol>
              <ol>預期收益：{modalInfo.expectedReturn}</ol>
              <ol>風險因子：{modalInfo.riskFactor}</ol>
              <ol>
                買進：
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
                  <option aria-label="選擇產業" value="" />
                  <option value={1}>1 </option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </NativeSelect>
                <Button
                  variant="primary"
                  onClick={tempSubmit}
                  disabled={!validateForm()}
                  style={{ marginLeft: "1vw" }}
                >
                  買！
                </Button>
              </ol>
            </ul>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      <BootStrapTable
        keyField="stockId"
        data={data}
        columns={columns}
        pagination={paginationFactory()}
        rowEvents={rowEvents}
      />
      <ModalPlace>{show ? <ModalContent /> : null}</ModalPlace>
    </>
  );
}
