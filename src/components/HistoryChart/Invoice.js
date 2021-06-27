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

export default function Invoice() {
  const [loan, setLoan] = useState([]);
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [amount, setAmount] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const data = [
    {
      invoiceId: "1",
      transactionDate: "借貸",
      deliveryDate: 8.3,
      paymentDate: "1/1",
      paymentDate: "3/9",
      amount: "尚未",
      unitPrice: 3,
      payable: 500,
      creditTerms: "母雞抖",
    },
  ];

  const columns = [
    { dataField: "invoiceId", text: "契約編號" },
    { dataField: "transactionDate", text: "交易日" },
    { dataField: "deliveryDate", text: "交貨日" },
    { dataField: "paymentDate", text: "交貨款日" },
    { dataField: "amount", text: "數量" },
    { dataField: "unitPrice", text: "單價" },
    { dataField: "payable", text: "應付款項" },
    { dataField: "creditTerms", text: "信用條件" },
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

  //get loan agreement api
  const getData = async () => {
    try {
      // const data = await axios.get("");
      // setLoan(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const ModalContent = () => {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.invoiceId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <ol>契約編號：{modalInfo.invoiceId}</ol>
            <ol>交易日：{modalInfo.transactionDate}</ol>
            <ol>交貨日：{modalInfo.deliveryDate}</ol>
            <ol>交貨款日：{modalInfo.paymentDate}</ol>
            <ol>數量：{modalInfo.amount}</ol>
            <ol>單價：{modalInfo.unitPrice}</ol>
            <ol>應付款項：{modalInfo.payable}</ol>
            <ol>信用條件：{modalInfo.creditTerms}</ol>
          </ul>
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
        data={data} //記得換成loan
        columns={columns}
        pagination={paginationFactory()}
        rowEvents={rowEvents}
      />
      <ModalPlace>{show ? <ModalContent /> : null}</ModalPlace>
    </>
  );
}
