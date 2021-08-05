import {Map,Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import PlacesAutocomplete ,{geocodeByAddress,getLatLng} from "react-google-places-autocomplete"
import { TextField } from '@material-ui/core';
import Location from "@material-ui/icons/LocationOn";
import InputAdornment from "@material-ui/core/InputAdornment";

// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '' ,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter:{
        lat:34.163093,
        lng:73.240098
      }
    };
  }
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng)
        this.setState({ address})
        this.setState({ mapCenter : latLng })
      })
      .catch(error => console.error('Error', error));
  }
  render() {
    return (
      <div>
        <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
          <TextField style={{ marginLeft: "12%",top:0,bottom:100,right:10,left:10 }}
                  {...getInputProps({
                    startAdornment: (
                      <InputAdornment position="start">
                        <Location />
                      </InputAdornment>
                    ),
                  })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Location />
                    </InputAdornment>
                  ),
                }}
                label="Address"
                halfwidth
                   />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                 
                 
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
            
          </div>
        )}
      </PlacesAutocomplete>


      <Map style={{position: "absolute",
    top: 0,
 
    left: 0,
 
    // right:"50%",
 
    bottom:100,
  height:100
}}
     google={this.props.google}
        initialCenter={{
          lat:this.state.mapCenter.lat,
          lng:this.state.mapCenter.lng
        }}
        center={{
          lat:this.state.mapCenter.lat,
          lng:this.state.mapCenter.lng
        }}
      >
        <Marker 
        position={{
          lat:this.state.mapCenter.lat,
          lng:this.state.mapCenter.lng
        }}
        
        />
      </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAhYZg5rq82zGh1bt8hBWs5tTSOROJcMhU')
})
(MapContainer)


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
