import React, { Component } from "react";
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
import Bargain from "../Bargain/Bargain"; //1
import FinishPage from "../FinishPage/FinighPage"; //5

import styled from "styled-components";
import MultiStepProgressBarRetailer from "./MultiStepProgressBarRetailer";
//retailer components
import Merchandise from "../Merchandise/Merchandise"; //販賣商品3
import DeliveryPayment from "../DeliveryPayment/DeliveryPayment"; //繳交貨款4
import ReceiptDate from "../ReceiptDate/ReceiptDate"; //收貨2

class ProcessFormRetailer extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: "",
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`);
  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button color="secondary float-left" onClick={this._prev}>
          Previous
        </Button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 5) {
      return (
        <Button color="primary float-right" onClick={this._next}>
          Next
        </Button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 4) {
      return <Button color="primary float-right">Submit</Button>;
    }
    // ...else render nothing
    return null;
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Card>
            <CardHeader>交易流程</CardHeader>
            <CardBody>
              <CardTitle>
                <MultiStepProgressBarRetailer
                  currentStep={this.state.currentStep}
                />
              </CardTitle>
              <CardText />
              <Bargain
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                // email={this.state.email}
              />
              <ReceiptDate
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                // email={this.state.username}
              />
              <Merchandise
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                // email={this.state.password}
              />
              <DeliveryPayment
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
              />
              <FinishPage
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
              />
            </CardBody>

            <CardFooter>
              {this.previousButton}
              {this.nextButton}
              {this.submitButton}
            </CardFooter>
          </Card>
        </Form>
      </>
    );
  }
}

export default ProcessFormRetailer;
