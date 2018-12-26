import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { saveFlightId } from "../actions/FlightAction";

class Flights extends Component {
  constructor(props) {
    super(props);
    this.bookFlight = this.bookFlight.bind(this);
  }

  componentWillMount() {}

  bookFlight(flightId) {
    alert(flightId);
    this.props.saveFlightId(flightId);
    this.props.history.push("/traveller");
  }

  render() {
    var jsxtableData = this.props.flights.map(flight => (
      <tr key={flight.flightId}>
        <td>{flight.airlinesName}</td>
        <td>{flight.source}</td>
        <td>{flight.destination}</td>
        <td>{flight.departure}</td>
        <td>{flight.arrival}</td>
        <td>{flight.return}</td>
        <td>{flight.duration}</td>
        <td>{flight.price}</td>
        <td>{flight.fleetType}</td>
        <td>
          <button
            className="btn"
            key={flight.flightId}
            onClick={() => this.bookFlight(flight.flightId)}
          >
            Book
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <div className="col-md-offset-1 col-md-10 flightSection">
          <div
            className="blueBg homeWidgetWrap posRel headerone"
            id="searchWidgetNew"
          >
            <div className="errMsg width100 fl" id="gerr" />
            <h3 className="font30 white lh1-5">Flight Search Results</h3>
            <div className="col-md-12 col-sm-12 col-xs-12 pad0 marginT10 form-inline" />
          </div>
          <table className="table d-flex flex-wrap table-striped">
            <thead>
              <tr>
                <th>Airlines</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Return</th>
                <th>Duration</th>
                <th>Price</th>
                <th>FleetType</th>
              </tr>
            </thead>

            <tbody>{jsxtableData}</tbody>
          </table>
        </div>
        <div className="col-md-1" />
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
    saveFlightId: value => {
      dispatch(saveFlightId(value));
    }
  };
}

const Flightcontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Flights);
export default Flightcontainer;
