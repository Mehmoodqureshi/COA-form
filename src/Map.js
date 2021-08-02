import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap((props) => {
    const { mapLocation } = props;
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={mapLocation}
        center={mapLocation}
      >
        <Marker key={`${mapLocation}`} position={mapLocation} />
      </GoogleMap>
    );
  })
);

export default Map;