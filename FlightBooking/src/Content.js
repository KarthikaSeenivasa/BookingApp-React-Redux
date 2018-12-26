import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Appcontainer from "./components/FlightSearch";
import "./App.css";
import Flightcontainer from "./components/Flights";
import Travellercontainer from "./components/Traveller";
import PaymentContainer from "./components/Payment";

class Content extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Appcontainer} />
          <Route path="/flights" component={Flightcontainer} />
          <Route path="/traveller" component={Travellercontainer} />
          <Route path="/payment" component={PaymentContainer} />
        </Switch>
      </div>
    );
  }
}

export default Content;
