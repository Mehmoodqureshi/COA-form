// import React from "react";
// import {
//   GoogleMap,
//   Marker,
//   withGoogleMap,
//   withScriptjs,
// } from "react-google-maps";
// import Geocode from "react-geocode";
// Geocode.setApiKey = "AIzaSyAhYZg5rq82zGh1bt8hBWs5tTSOROJcMhU";

// class Map extends React.Component {
//   state = {
//     address: "",
//     city: "",
//     area: "",
//     state: "",
//     zoom: 15,
//     height: 400,
//     mapPosition: {
//       lat: 0,
//       lng: 0,
//     },
//     markerPosition: {
//       lat: 0,
//       lng: 0,
//     },
//   };
//   // onMarkerDragEnd = (event) => {
//   //   let newLat = event.latLng.lat();
//   //   let newLng = event.latLng.lng();
//   //   Geocode.fromLatLng(newLat, newLng).then((response) => {
//   //     console.log(response);
//   //   });
//   //  };
//   render() {
//     const MapWithAMarker = withScriptjs(
//       withGoogleMap((props) => (
//         <GoogleMap
//           defaultZoom={8}
//           defaultCenter={{ lat: -34.397, lng: 150.644 }}
//         >

//           <Marker
//             // draggable={true}
//             // onDragEnd={this.onMarkerDragEnd}
//             key={`{ lat: -34.397, lng: 150.644 }`}
//             position={{ lat: -34.397, lng: 150.644 }}
//           />
//         </GoogleMap>
//       ))
//     );
//     return (
//       <MapWithAMarker
//         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAhYZg5rq82zGh1bt8hBWs5tTSOROJcMhU&libraries=places"
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `400px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     );
//   }
// }
// export default Map;

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
