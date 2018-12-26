import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { listflightAction } from "../actions/FlightAction";
import DatePicker from "react-16-bootstrap-date-picker";

class FlightSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValues: {
        Source: "",
        Destination: "",
        Departure: "",
        Return: "",
        FleetType: "Economy",
        navigation: false
      },
      formErrors: { SourceMessage: "", destMessage: "", departMessage: "" }
    };

    this.submitSearch = this.submitSearch.bind(this);
    this.EventChanged = this.EventChanged.bind(this);
    this.EventDepartDateChanged = this.EventDepartDateChanged.bind(this);
    this.EventReturnDateChanged = this.EventReturnDateChanged.bind(this);
  }
  EventDepartDateChanged(event) {
    let stateDepart = Object.assign({}, this.state);
    stateDepart.inputValues["Departure"] = event;
    this.setState(stateDepart);
  }
  EventReturnDateChanged(event) {
    let stateReturn = Object.assign({}, this.state);
    stateReturn.inputValues["Return"] = event;
    this.setState(stateReturn);
  }
  EventChanged(event) {
    switch (event.target.name) {
      case "From":
        let stateFrom = Object.assign({}, this.state);
        stateFrom.inputValues["Source"] = event.target.value;
        this.setState(stateFrom);
        break;
      case "To":
        let stateTo = Object.assign({}, this.state);
        stateTo.inputValues["Destination"] = event.target.value;
        this.setState(stateTo);
        break;
      default:
        return;
    }
  }

  submitSearch(event) {
    event.preventDefault();
    if (this.state.inputValues.From === "") {
      this.setState({
        formErrors: { SourceMessage: "Please Enter Source value" }
      });
    } else if (this.state.inputValues.To === "") {
      this.setState({
        formErrors: { destMessage: "Please Enter Destination value" }
      });
    } else if (this.state.inputValues.Depart === "") {
      this.setState({
        formErrors: { departMessage: "Please Enter Departure Date value" }
      });
    } else {
      //this.props.dispatch(listflightAction(this.state.inputValues));
      this.props.searchFlight(this.state.inputValues);
      //console.log(this.props);
      this.props.history.push("/flights");
    }
  }

  render() {
    return (
      <div className="App">
        <form>
          <div className="flightSection col-md-8 col-md-offset-2">
            <div className="blueBg homeWidgetWrap posRel" id="searchWidgetNew">
              <div className="errMsg width100 fl" id="gerr" />
              <h3 className="font30 white lh1-5">Book Flight</h3>
              <div className="col-md-12 col-sm-12 col-xs-12 pad0 marginT10 form-inline" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-offset-2 col-md-4">
                <label htmlFor="From">Source</label>
                <input
                  type="text"
                  className="form-control"
                  id="From"
                  name="From"
                  placeholder="From : City Or Airport "
                  value={this.state.inputValues["From"]}
                  onChange={this.EventChanged}
                />
                <span style={{ color: "red" }}>
                  {this.state.formErrors.SourceMessage}
                </span>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="To">Destination</label>
                <input
                  type="text"
                  className="form-control"
                  id="To"
                  name="To"
                  placeholder="TO : City Or Airport"
                  value={this.state.inputValues["To"]}
                  onChange={this.EventChanged}
                />
                <span style={{ color: "red" }}>
                  {this.state.formErrors.destMessage}
                </span>
              </div>
              <div className="form-group col-md-2" />
            </div>
            <div className="form-row ">
              <div className="form-group col-md-offset-2 col-md-4">
                <label htmlFor="Depart">Depart</label>
                <DatePicker
                  className="form-control"
                  id="Depart"
                  name="Depart"
                  placeholder="Choose Date"
                  value={this.state.inputValues["Departure"]}
                  onChange={this.EventDepartDateChanged}
                />
                <span style={{ color: "red" }}>
                  {this.state.formErrors.departMessage}
                </span>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="Return">Return</label>
                <DatePicker
                  className="form-control"
                  id="Return"
                  name="Return"
                  placeholder="Choose Date"
                  value={this.state.inputValues["Return"]}
                  onChange={this.EventReturnDateChanged}
                />
              </div>
              <div className="form-group col-md-2"> </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6 col-md-offset-3">
                <button className="btn" onClick={this.submitSearch}>
                  Search
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

function mapStateToProps(state) {
  return {
    flights: state.flights,
    error: state.error,
    fetching: state.fetching
  };
}
function mapDispatchToProps(dispatch) {
  return {
    searchFlight: value => {
      dispatch(listflightAction(value));
    }
  };
}

const Appcontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightSearch);

export default Appcontainer;
