// import React, { Component } from "react";
import React from "react";
import {
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";
import Bargain from "../Bargain/Bargain";
import MadeProduct from "../MadeProduct/MadeProduct";
import Delivery from "../Delivery/Delivery";
import MarginTrading from "../MarginTrading/MarginTrading";
import FinishPage from "../FinishPage/FinighPage";

import styled from "styled-components";
import MultiStepProgressBar from "./MultiStepProgressBar";
import { useSelector, useDispatch } from "react-redux";
import { setStatus, setDisabled, reset } from "../../redux/processSlice";
import { setCurrentTime } from "../../redux/gameSlice";
import axios from "axios";
import { RefreshAuthLogic } from "../../refreshAuthLogic";
import createAuthRefreshInterceptor from 'axios-auth-refresh';
export default function ProcessForm() {
  const dispatch = useDispatch()
  const { status, disabled, finish } = useSelector(state => state.process)
  const { accessToken } = useSelector(state => state.accessToken)
  const { user: { userId } } = useSelector(state => state.user)
  const { user: { flow: { creditRating, cash, inventory, liability } } } = useSelector(state => state.user)
  // const { pair: { currentTime, pairId, supplierId, retailerId } } = useSelector(state => state.game)
  const { pair } = useSelector(state => state.game)
  //auto handle request when accessToken was expired
  const instance = axios.create({
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  //auto handle request when accessToken was expired
  const refreshAuthLogic = RefreshAuthLogic()
  createAuthRefreshInterceptor(instance, refreshAuthLogic)
  const handleNext = async () => {
    dispatch(setStatus(status + 1))
    dispatch(setDisabled(true))
  }
  const handleFinish = async () => {
    instance
      .post("http://localhost:3300/records", { userId, creditRating, cash, inventory, liability, recordDate: pair.currentTime }
      )
      .then(res => {
        dispatch(setCurrentTime(new Date(new Date().setMonth(new Date(pair.currentTime).getMonth() + 1)).toISOString().slice(0, 10)))
        instance
          .patch("http://localhost:3300/pairs/me", pair
          )
          .then(res => {
            dispatch(reset())
            dispatch(setStatus(1))
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      })
  };
  return (
    <>
      <Form onSubmit={handleNext}>
        <Card>
          <CardHeader>交易流程</CardHeader>
          <CardBody>
            <CardTitle>
              <MultiStepProgressBar currentStep={status} />
            </CardTitle>
            <CardText />
            <Bargain
              currentStep={status}
            />
            <MarginTrading
              currentStep={status}
            />
            <MadeProduct
              currentStep={status}
            />
            <Delivery
              currentStep={status}
            />
            <FinishPage
              currentStep={status}
            />
          </CardBody>
          <CardFooter>
            {finish ? (<Button color="primary float-right" onClick={handleFinish}>完成</Button>) : (<Button color="primary float-right" disabled={disabled} onClick={handleNext}>下一步</Button>)}
          </CardFooter>
        </Card>
      </Form>
    </>
  );
};

// class ProcessForm extends Component {
//   constructor(props) {
//     super(props);

//     // Set the intiial input values
//     this.state = {
//       currentStep: 1,
//       email: "",
//       username: "",
//       password: "",
//     };

//     // Bind the submission to handleChange()
//     this.handleChange = this.handleChange.bind(this);

//     // Bind new functions for next and previous
//     this._next = this._next.bind(this);
//     this._prev = this._prev.bind(this);
//   }

//   // Use the submitted data to set the state
//   handleChange(event) {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   }

//   // Trigger an alert on form submission
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { email, username, password } = this.state;
//     alert(`Your registration detail: \n 
//       Email: ${email} \n 
//       Username: ${username} \n
//       Password: ${password}`);
//   };

//   // Test current step with ternary
//   // _next and _previous functions will be called on button click
//   _next() {
//     let currentStep = this.state.currentStep;

//     // If the current step is 1 or 2, then add one on "next" button click
//     currentStep = currentStep >= 4 ? 5 : currentStep + 1;
//     this.setState({
//       currentStep: currentStep,
//     });
//   }

//   _prev() {
//     let currentStep = this.state.currentStep;
//     // If the current step is 2 or 3, then subtract one on "previous" button click
//     currentStep = currentStep <= 1 ? 1 : currentStep - 1;
//     this.setState({
//       currentStep: currentStep,
//     });
//   }

//   // The "next" and "previous" button functions
//   get previousButton() {
//     let currentStep = this.state.currentStep;

//     // If the current step is not 1, then render the "previous" button
//     if (currentStep !== 1) {
//       return (
//         <Button color="secondary float-left" onClick={this._prev}>
//           Previous
//         </Button>
//       );
//     }

//     // ...else return nothing
//     return null;
//   }

//   get nextButton() {
//     let currentStep = this.state.currentStep;
//     // If the current step is not 3, then render the "next" button
//     if (currentStep < 5) {
//       return (
//         <Button color="primary float-right" onClick={this._next}>
//           Next
//         </Button>
//       );
//     }
//     // ...else render nothing
//     return null;
//   }

//   get submitButton() {
//     let currentStep = this.state.currentStep;

//     // If the current step is the last step, then render the "submit" button
//     if (currentStep > 4) {
//       return <Button color="primary float-right">Submit</Button>;
//     }
//     // ...else render nothing
//     return null;
//   }

//   render() {
//     return (
//       <>
//         <Form onSubmit={this.handleSubmit}>
//           <Card>
//             <CardHeader>交易流程</CardHeader>
//             <CardBody>
//               <CardTitle>
//                 <MultiStepProgressBar currentStep={this.state.currentStep} />
//               </CardTitle>
//               <CardText />
//               <Bargain
//                 currentStep={this.state.currentStep}
//                 handleChange={this.handleChange}
//               // email={this.state.email}
//               />
//               <MarginTrading
//                 currentStep={this.state.currentStep}
//                 handleChange={this.handleChange}
//               // email={this.state.username}
//               />
//               <MadeProduct
//                 currentStep={this.state.currentStep}
//                 handleChange={this.handleChange}
//               // email={this.state.password}
//               />
//               <Delivery
//                 currentStep={this.state.currentStep}
//                 handleChange={this.handleChange}
//               />
//               <FinishPage
//                 currentStep={this.state.currentStep}
//                 handleChange={this.handleChange}
//               />
//             </CardBody>

//             <CardFooter>
//               {this.previousButton}
//               {this.nextButton}
//               {this.submitButton}
//             </CardFooter>
//           </Card>
//         </Form>
//       </>
//     );
//   }
// }
