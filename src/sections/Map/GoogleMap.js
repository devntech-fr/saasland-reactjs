import React from "react";
import { GoogleApiWrapper } from "google-maps-react";
import {MapContainer} from "sections/Map";

export default GoogleApiWrapper({
    apiKey: "AIzaSyBCB4y0SztfLo236n4JECwTvIQd-VecF2Y",
})(MapContainer);
