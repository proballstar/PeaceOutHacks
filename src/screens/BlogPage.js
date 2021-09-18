import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class BlogPage extends React.Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        >
          <Marker position={{ lat: 48.0, lng: -122.0 }} />
        </Map>
        <div></div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDX5b2eROUXhaHcVDNiX4yAnipp3d7898Q"
})(BlogPage);

const mapStyles = {
  width: "80%",
  height: "50%"
};
