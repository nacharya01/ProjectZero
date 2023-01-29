import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const MAPS_API_KEY = process.env.REACT_APP_GOGLE_MAPS_API_KEY

function Maps ({ google }) {
  return (
      <Map google={google} />
  );
};

export default GoogleApiWrapper({
  apiKey: MAPS_API_KEY,
})(Maps);