import axios from "axios";

export function listflightAction(jsonData) {
  return function(dispatch) {
    dispatch({ type: "FETCHING" });
    axios
      .post("http://localhost:7001/api/SearchFlight", jsonData)
      .then(response => {
        dispatch({ type: "FETCH_SUCCESS", flights: response.data });
      })
      .catch(error => {
        // handle error
        dispatch({ type: "FETCHING_ERROR", error: error.message });
      });
  };
}

export function saveTravellerDetails(jsonData) {
  return function(dispatch) {
    axios
      .post("http://localhost:7002/api/Traveller", jsonData)
      .then(response => {
        dispatch({ type: "UPDATE_TRAVELLER", bookingDetails: response.data });
      })
      .catch(error => {
        dispatch({ type: "FETCH_ERROR", error: error.message });
      });
  };
}

export function saveFlightId(id) {
  return function(dispatch) {
    dispatch({ type: "SAVE_FLIGHT_ID", flightId: id });
  };
}

export function payAndBook(jsonData) {
  return function(dispatch) {
    axios
      .post("http://localhost:7003/api/Payment", jsonData)
      .then(response => {
        dispatch({ type: "PAY_AND_BOOK", bookingStatus: response.data });
      })
      .catch(error => {
        dispatch({ type: "FETCH_ERROR", error: error.message });
      });
  };
}
