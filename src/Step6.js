import Heading from "./heading";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid, makeStyles } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import InputMask from "react-input-mask";

import Back from "./images/back.png";
import Phone from "@material-ui/icons/LocalPhone";
import InputAdornment from "@material-ui/core/InputAdornment";
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
    //  margin: "20%",
  },
  backBtn: {
    width: "20px",
    position: "absolute",
    left: "20%",
    top: "20%",
    // cursor: "pointer";
  },
}));
const Step6 = (props) => {
  const { state } = props;
  const classes = useStyles();
  const history = useHistory();
  const [Phonenumber, setPhonenumber] = useState();
  const [errorMsg, setErrorMsg] = useState({});

  const onChange = (e, fieldName, value) => {
    let updatedState = { ...state };
    let errors = { ...errorMsg };
    switch (fieldName) {
      case "phoneNumber":
        updatedState[fieldName] = value;
        if (errors.phnNumber) {
          setErrorMsg(
            fieldValidator(fieldName, updatedState, "phone", errors).error
          );
        }
        // }
        break;
      default:
        break;
    }
    props.onChangeState(updatedState);
  };

  const onNext = () => {
    let errors = { ...errorMsg };
    // let newForm;

    let newForm = fieldValidator("phoneNumber", state, "phone", errors);
    if (newForm.isValid) {
      history.push("/Step7");
    } else {
      setErrorMsg(newForm.error);
    }
    console.log(errors);

    // if (!errors.phoneNumber) {
    //   history.push("/step7");
    // }
  };

  return (
    <div className={classes.start}>
      <Heading
        heading={
          "What's the best phone number to reach you at if we have any questions?"
        }
      />
      <img
        src={Back}
        className={classes.backBtn}
        onClick={() => history.push(`/step5`)}
      ></img>
      <form>
        <Grid container spacing={1} alignItems="center">
          {/* <Grid item xs={12}>
                    <TextField
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <Phone />
                                </InputAdornment>
                            ),
                            }} id="standard-basic" onChange={(e) => onChange(e, "phoneNumber", e.target.value)} value={state.phoneNumber || ""}
                            style={{marginLeft:"12%"}} className={classes.textfield} label="Phone Number" /></Grid> */}
          <Grid item xs={12}>
            {/* <InputMask
              mask="(999)999-9999"
              id={`phoneNumber`}
              value={state.phoneNumber || ""}
              onChange={(e) => onChange(e, "phoneNumber", e.target.value)}
              onBlur={(e) => onChange(e, "phoneNumber", e.target.value)}
              maskChar="_"
            >
              {() => ( */}
            {/* <TextField
              style={{
                font: "600 0.9rem/1.3 Lato, Helvetica Neue, Arial, sans-serif",
                left: "7%",
              }}
              error={errorMsg.phoneNumber}
              helperText={errorMsg.phoneNumber}
              label="Phone Number"
              className={classes.textfield}
              placeholder={`Phone Number`}
              value={state.phoneNumber || ""}
              onChange={(e) => onChange(e, "phoneNumber", e.target.value)}
              onFocus
              required
              type="tel"
            >
              <InputMask mask="(999)999-9999" maskChar="" />
            </TextField> */}
            {/* )}
            </InputMask> */}
            <InputMask
              mask="(999)999-9999"
              value={state.phoneNumber || ""}
              onChange={(e) => onChange(e, "phoneNumber", e.target.value)}
            >
              {() => (
                <TextField
                  error={errorMsg.phoneNumber}
                  helperText={errorMsg.phoneNumber}
                  className={classes.textfield}
                  required
                  type="tel"
                />
              )}
            </InputMask>
          </Grid>
          <Grid item xs={12} style={{ color: "red" }}>
            {Object.keys(errorMsg).length > 0 && (
              <div style={{ marginLeft: "8%" }}>
                Please Fill out all the required fields
              </div>
            )}
            <Button
              onClick={() => onNext()}
              style={{ left: "2%" }}
              className={classes.btn}
              variant="contained"
              color="primary"
            >
              NEXT
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Step6;
