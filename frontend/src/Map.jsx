import GoogleMapReact from "google-map-react";

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      ></GoogleMapReact>
    </div>
  </div>
);

export default Map;
