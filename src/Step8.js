import Heading from "./heading";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ValidationTextField from "@material-ui/core/TextField";
import { Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Back from "./images/back.png";
import InputAdornment from "@material-ui/core/InputAdornment";
import Person from "@material-ui/icons/PersonAdd";
import Location from "@material-ui/icons/LocationOn";
import Dial from "@material-ui/icons/Dialpad";
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
    margin: ".375em",
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
const Step8 = (props) => {
  const { state, handleChangeField } = props;
  const classes = useStyles();
  const history = useHistory();
  const [Address, setAddress] = useState();
  const [errorMsg, setErrorMsg] = useState({});
  const [btnCheck, setBtnCheck] = useState(false);
  const onChange = (e, name, value) => {
    let updatedState = { ...state };
    let errors = { ...errorMsg };
    switch (name) {
      //
      case "Address":
        updatedState.Address8 = value;
        break;
      case "cardNumber":
        updatedState.cardDetails["cardNumber"] = value;
        if (errors.cardNumber) {
          setErrorMsg(
            fieldValidator(
              "cardNumber",
              updatedState.cardDetails,
              "cardNumber",
              errors
            ).error
          );
        }
        break;
      case "name":
        updatedState.cardDetails["name"] = value;
        if (errors.name) {
          setErrorMsg(
            fieldValidator(
              "name",
              updatedState.cardDetails,
              "requiredWithSpace",
              errors
            ).error
          );
        }
        break;
      default:
        break;
    }
    props.onChangeState(updatedState);
  };
  console.log(errorMsg);
  useEffect(() => {
    if (Object.keys(props.state.cardDetails).length >= 2) {
      if (
        props.state.cardDetails.cardNumber !== "" &&
        props.state.Address8 !== "" &&
        props.state.cardDetails.name !== ""
      ) {
        setBtnCheck(true);
      } else {
        setBtnCheck(false);
      }
    }
  }, [props.state.cardDetails, props.state.Address8]);
  const onNext = () => {
    let updatedState = { ...state };
    let errors = { ...errorMsg };
    console.log("on next ma hy", errors);
    let newForm = fieldValidator(
      "cardNumber",
      updatedState.cardDetails,
      "cardNumber",
      errors
    ).error;

    newForm = fieldValidator(
      "name",
      updatedState.cardDetails,
      "name",
      errors
    ).error;
    if (newForm.isValid) {
      const data = {
        cardNumber: state.cardDetails.cardNumber,
        name: state.cardDetails.name,
      };
    } else {
      setErrorMsg(newForm.error);
      console.log(errors);
    }
  };
  return (
    <div className={classes.start}>
      <Heading
        heading={
          "Fantastic! That's everything I just need to collect your payment information. By submitting this application you understand that an application processing fee will be charged to the account provided for $39 dollars to complete this application alongside accept our Terms of Service . Please select I Agree to accept these terms or I Decline to decline."
        }
      />
      <img
        src={Back}
        className={classes.backBtn}
        onClick={() => history.push(`/step7`)}
      ></img>
      <form>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Dial />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => onChange(e, "cardNumber", e.target.value)}
              style={{ marginLeft: "12%" }}
              variant="outlined"
              className={classes.textfield}
              id="standard-basic"
              halfwidth
              value={state.cardDetails.cardNumber || ""}
              label="Card Number"
              inputProps={{ maxLength: 16 }}
              placeholder="Card Number"
            />
          </Grid>

          <Grid item xs={12} spacing={1}>
            {" "}
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => onChange(e, "name", e.target.value)}
              style={{ marginLeft: "12%" }}
              value={state.cardDetails.name || ""}
              className={classes.textfield}
              variant="outlined"
              id="standard-basic"
              label="Card Holder Name "
              placeholder="Card Holder"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Location />
                  </InputAdornment>
                ),
              }}
              style={{ marginLeft: "12%" }}
              variant="outlined"
              onChange={(e) => onChange(e, "Address", e.target.value)}
              value={state.Address8}
              className={classes.textfield}
              id="standard-basic"
              label="Billing Address"
              placeholder="Address"
            />
          </Grid>
          {btnCheck && Object.keys(errorMsg).length > 0 && (
            <div style={{ marginLeft: "40%", color: "red" }}>
              Please Fill Correct Details
            </div>
          )}
          <Grid xs={12}>
            <Button
              className={classes.btn}
              variant="contained"
              color="primary"
              onClick={() => onNext()}
              style={{ marginLeft: "12%" }}
            >
              I AGREE
            </Button>
            <Button variant="contained" color="primary" className={classes.btn}>
              I DECLINE
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Step8;
