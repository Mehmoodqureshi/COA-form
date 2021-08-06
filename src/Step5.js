import Heading from "./heading";
import Map from "./Map";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid, makeStyles } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Back from "./images/back.png";
import Location from "@material-ui/icons/LocationOn";
import InputAdornment from "@material-ui/core/InputAdornment";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
} from "react-google-places-autocomplete";
import { fieldValidator } from "./validator";
const useStyles = makeStyles((theme) => ({
  start: {
    margin: theme.spacing(40),
    marginRight: theme.spacing(60),
    textAlign: "center",
    marginTop: "5%",
  },
  btn: {
    textDecoration: "none",
    margin: "50%",
    color: "inherit",
    textTransform: "uppercase",
    wordWrap: "break-word",
    whiteSpace: "normal",
    cursor: "pointer",
    border: 0,
    transition:
      "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    padding: ".84rem 2.14rem",
    fontSize: ".81rem",
    backgroundColor: "#056aee!important",
    boxShadow: "0 10px 40px -10px #0350b4!important",
    borderRadius: " 5px!important",
    marginTop: "30px",
    color: "white",
  },
  textfield: {
    width: "30%",
    margin: "2%",
  },
  backBtn: {
    width: "20px",
    position: "absolute",
    left: "20%",
    top: "20%",
    // cursor: "pointer";
  },
}));
const Step5 = (props) => {
  const { state } = props;
  const classes = useStyles();
  const history = useHistory();
  const [address, setAddress] = useState();
  const [Unitnumber, setUnitnumber] = useState();
  const [errorMsg, setErrorMsg] = useState({});
  const [mapLocation, setMapLocation] = useState(state.ltLngNew);

  useEffect(() => {
    setMapLocation(props.state.ltLngNew)
  }, [props.state]);

  const onChange = (e, fieldName, value) => {
    let updatedState = { ...state };
    let errors = { ...errorMsg };

    switch (fieldName) {
      case "address":
        updatedState.newAddressStreetDisplay= value.street
        updatedState.newAddressStreetDisplay= value
        // var newValue ={}
        // try{
        //   const myArr =value.street.split(",");
        //   newValue.street = myArr[0]
        //   newValue.city = myArr[1]
        //   newValue.country = myArr[3]
        //   const stateZip = myArr[2].split(" ")
        //   try{
        //     newValue.zipCode = myArr[2].split(" ")[2]  ||"N/A"
        //     newValue.state = myArr[2].split(" ")[1] || "N/A"
        //   }catch(err){
        //     newValue.zipCode = myArr[2].split(" ")[1] ||"N/A"
        //     newValue.state = myArr[2].split(" ")[0] || "N/A"
        //   }
        //   newValue.latLng = value.latLng;
        //   updatedState.newAddress = newValue;
        // }catch(error){
        //   updatedState.newAddress = value;
        // }
        updatedState.ltLngNew = value.latLng;
        setErrorMsg(
          fieldValidator("street", updatedState.newAddress, "required", errors)
            .error
        );
        break;
      case 'unitNumber5':
        updatedState.unitNumber5 = value
      break;
      default:
        break;
    }
    props.onChangeState(updatedState);
  };

  const onNext = () => {
    let errors = { ...errorMsg };
    let newForm = fieldValidator(
      "street",
      state.newAddress,
      "required",
      errors
    );

    if (state.newAddress.street === state.currentAddress.street) {
      setErrorMsg({
        ...newForm.error,
        street: "Should not be same as Current Address",
      });
    } else {
      if (newForm.isValid) {
        history.push("/Step6");
      } else {
        setErrorMsg(newForm.error);
      }
    }
  };
  return (
    <div className={classes.start}>
      <Heading
        heading={"What is the new address you want to forward your mails to?"}
      />
      <img
        src={Back}
        className={classes.backBtn}
        onClick={() => history.push(`/step4`)}
      ></img>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}
          style={{
                display: state.ltLngNew ? "block" : "none",
              }}
            >
              <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAhYZg5rq82zGh1bt8hBWs5tTSOROJcMhU&libraries=places"
                loadingElement={<div style={{ height: `200px` }} />}
                mapLocation={mapLocation}
                containerElement={
                  <div
                    className="google-map-container"
                    style={{ height: `200px`, width: "100%" }}
                  />
                }
                mapElement={<div style={{ height: `200px` }} />}
              />
              </Grid>
              <Grid style={{marginTop:'1%'}}>
                <GooglePlacesAutocomplete
                  renderInput={(props) => (
                    <div className="custom-wrapper">
                      <Grid
                        container
                        spacing={1}
                        alignItems="center"
                        className={"d-flex w-100"}
                      >
                         <TextField
                          error={!!(errorMsg || {}).street}
                          helperText={(errorMsg || {}).street}
                          label="New Address Street Address, City, State"
                          style={{font:"600 0.9rem/1.3 Lato, Helvetica Neue, Arial, sans-serif"}}
                          type="text"
                          id={`streetAddress`}
                          name="streetAddress"
                          classes={{ root: "mb-0" }}
                          style={{ width: "100%" }}
                          classes={{ root: "custom-text-input" }}
                          InputProps={{
                            startAdornment:(
                              <InputAdornment position="start">
                               <Location/>
                              </InputAdornment>)
                            
                          }}
                          
                          {...props}
                          required={true}
                          style={{paddingTop:"8px"}}
                        />
                      </Grid>
                    </div>
                  )}
                  initialValue={state.newAddressStreetDisplay || ""}
                  onSelect={({ description }) => {
                    geocodeByAddress(description).then((result) => {
                      let state = "N/A";
                      let city = "N/A";
                      let zipCode = "N/A";
                      for (let component in result[0]["address_components"]) {
                        for (let i in result[0]["address_components"][
                          component
                        ]["types"]) {
                          if (
                            result[0]["address_components"][component]["types"][
                              i
                            ] === "postal_code"
                          ) {
                            zipCode =
                              result[0]["address_components"][component][
                                "long_name"
                              ];
                          }

                          if (
                            result[0]["address_components"][component]["types"][
                              i
                            ] === "administrative_area_level_1"
                          ) {
                            state =
                              result[0]["address_components"][component][
                                "short_name"
                              ];
                            city =
                              result[0]["address_components"][1]["long_name"];
                          }
                        }
                      }

                      const { lat, lng } = result[0].geometry.location;
                      const latLng = {
                        lat: lat(),
                        lng: lng(),
                      };
                      let addressObj = {
                        street: description,
                        state: state,
                        city: city,
                        zipCode: zipCode,
                        latLng: latLng,
                      };
                      onChange({}, "address", addressObj);
                      setMapLocation(latLng);
                    });
                  }}
                />







            {/* <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Location />
                  </InputAdornment>
                ),
              }}
              style={{ marginLeft: "12%" }}
              className={classes.textfield}
              id="standard-basic"
              halfwidth
              label="Address"
              
              onChange={(e) => onChange(e, "Address", e.target.value)}
              value={state.Address5 || ""}
            /> */}
            <Grid  style={{marginTop:'2%',paddingTop:"8px"}}>
                <TextField
                  label="Unit Number"
                  type="tel"
                  id={`unitNumber5`}
                  name="unitNumber5"
                  value={state.unitNumber5|| ""}
                  classes={{ root: "custom-text-input" }}
                  onChange={(e) => onChange(e, "unitNumber5", e.target.value)}
                  onBlur={(e) => onChange(e, "unitNumber5", e.target.value)}
                  required
                />
            </Grid>
          <Grid item xs={12}>
          {errorMsg && (
                <div >
                  Please Input new Address details distinct from current Address
                </div>
              )}
            {/* <Link to="/step6" style={{ textDecoration: "none" }}> */}
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                onClick={() => onNext()}
              >
                NEXT
              </Button>
            {/* </Link> */}
          </Grid>
        </Grid>
        </Grid>
        
    </div>
  );
          }
export default Step5;
