import React, { Component } from "react";
import { connect } from "react-redux";

import "../App.css";
import { saveTravellerDetails } from "../actions/FlightAction";

class Traveller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      firstnameError: "",
      lastnameError: "",
      phoneError: "",
      emailError: "",
      firstName: "",
      lastName: "",
      email: "",
      PNO: "",
      gender: "",
      age: ""
    };
    this.pay = this.pay.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(email) {
    // const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
    // const result = pattern.test(email);
    // if (result === true) {
    this.setState({
      emailError: false,
      email: email
    });
    // } else {
    //   this.setState({
    //     emailError: true
    //   });
    // }
  }
  validatePhoNo(phNo) {
    // const pattern = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    // const result = pattern.test(phNo);
    // if (result === true) {
    this.setState({
      phoneError: false,
      PNO: phNo
    });
    // } else {
    //   this.setState({
    //     phoneError: true
    //   });
    // }
  }
  handleChange(e) {
    if (e.target.name === "firstName") {
      if (e.target.value === "" || e.target.value === null) {
        this.setState({
          firstnameError: true
        });
      } else {
        this.setState({
          firstnameError: false,
          firstName: e.target.value
        });
      }
    }
    if (e.target.name === "lastName") {
      if (e.target.value === "" || e.target.value === null) {
        this.setState({
          lastnameError: true
        });
      } else {
        this.setState({
          lastnameError: false,
          lastName: e.target.value
        });
      }
    }
    if (e.target.name === "email") {
      this.validateEmail(e.target.value);
    }
    if (e.target.name === "PNO") {
      this.validatePhoNo(e.target.value);
    }

    if (e.target.name === "gender") {
      this.setState({
        gender: e.target.value
      });
    }

    if (e.target.name === "age") {
      this.setState({
        age: e.target.value
      });
    }

    if (
      this.state.firstnameError === false &&
      this.state.lastnameError === false &&
      this.state.emailError === false
    ) {
      this.setState({
        isDisabled: false
      });
    }
  }

  pay(e) {
    const jsonData = {
      Name: this.state.firstName + " " + this.state.lastName,
      Email: this.state.email,
      MobileNumber: this.state.PNO,
      Age: this.state.age,
      Gender: this.state.gender,
      HasInsured: true
    };
    this.props.saveTravellerDetails(jsonData);
    this.props.history.push("/payment");
  }

  render() {
    return (
      <div className="App">
        <form>
          <div className="flightSection col-md-8 col-md-offset-2">
            <div className="blueBg homeWidgetWrap posRel" id="searchWidgetNew">
              <div className="errMsg width100 fl" id="gerr" />
              <h3 className="font30 white lh1-5">Traveller Details</h3>
              <div className="col-md-12 col-sm-12 col-xs-12 pad0 marginT10 form-inline" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-offset-2 col-md-4">
                <label htmlFor="From">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state["firstName"]}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="To">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state["lastName"]}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-2" />
            </div>
            <div className="form-row ">
              <div className="form-group col-md-offset-2 col-md-4">
                <label htmlFor="Depart">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={this.state["email"]}
                  onChange={this.handleChange}
                />
                {this.state.emailError ? (
                  <span style={{ color: "red" }}>
                    Please Enter valid email address
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="Return">Phone No</label>
                <input
                  type="text"
                  className="form-control"
                  id="PNO"
                  name="PNO"
                  placeholder="Phone Number"
                  value={this.state["PNO"]}
                  onChange={this.handleChange}
                />
                {this.state.phoneError ? (
                  <span style={{ color: "red" }}>
                    Please Enter valid phone number
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group col-md-2"> </div>
            </div>
            <div className="form-row ">
              <div className="form-group col-md-offset-2 col-md-4">
                <label htmlFor="Depart">Age</label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  name="age"
                  placeholder="Age"
                  value={this.state["age"]}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="Return">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  id="gender"
                  name="gender"
                  placeholder="Gender"
                  value={this.state["gender"]}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-2"> </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6 col-md-offset-3">
                <button className="btn" onClick={this.pay}>
                  Pay
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveTravellerDetails: value => {
      dispatch(saveTravellerDetails(value));
    }
  };
}

function mapStateToProps(state) {
  return {};
}

const Travellercontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Traveller);

export default Travellercontainer;
