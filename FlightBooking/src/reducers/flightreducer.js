export default function flightReducer(
  prevState = {
    fetching: false,
    flights: [],
    bookingDetails: {},
    flightId: "",
    bookingStatus: "",
    error: ""
  },
  action
) {
  let newState;
  switch (action.type) {
    case "FETCHING":
      newState = { ...prevState, fetching: true, flights: [], error: "" };
      break;
    case "FETCH_SUCCESS":
      newState = {
        ...prevState,
        fetching: false,
        flights: action.flights,
        bookingDetails: {},
        error: ""
      };
      break;
    case "FETCH_ERROR":
      newState = {
        ...prevState,
        fetching: false,
        flights: [],
        error: action.error
      };
      break;

    case "UPDATE_TRAVELLER":
      newState = {
        ...prevState,
        bookingDetails: action.bookingDetails,
        error: ""
      };
      break;

    case "SAVE_FLIGHT_ID":
      newState = {
        ...prevState,
        flightId: action.flightId,
        error: ""
      };
      break;

    case "PAY_AND_BOOK":
      newState = {
        ...prevState,
        bookingStatus: action.bookingStatus,
        error: ""
      };
      break;

    default:
      newState = { ...prevState };
      break;
  }

  return newState;
}
