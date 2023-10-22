import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAuKmIFMY5dyOJJKlpyjG4vIGNpr8dPL_w",
  });

  const google = window.google;
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="App">
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={10}
      >
        <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
      </GoogleMap>
    </div>
  );
};

export default App;
