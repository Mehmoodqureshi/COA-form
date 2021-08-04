import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Heading from "./heading";
import { Grid, makeStyles } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Back from "./images/back.png";
import { useState } from "react";
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
const Step4 = (props) => {
  const { state } = props;
  const [secondDate, setSecondDate] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState({});
  const onChange = (e, fieldName, value) => {
    let updatedState = { ...state };
  let errors = { ...errorMsg };
    switch (fieldName) {
      case "forwardMailStartDate":
        updatedState[fieldName] = value;
        setSecondDate(true);
        setErrorMsg(
          fieldValidator(fieldName, updatedState, "required", errors).error
        );
        break;
      case "stopForwardingMail":
        updatedState[fieldName] = value;
        setErrorMsg(
          fieldValidator(fieldName, updatedState, "required", errors).error
        );
        break;
      default:
        break;
    }
    props.onChangeState(updatedState);
  };

  const onNext = () => {
    let errors = { ...errorMsg };

    let newForm = fieldValidator(
      "forwardMailStartDate",
      state,
      "required",
      errors
    );

    if (state.moveType === "temp") {
      newForm = fieldValidator(
        "stopForwardingMail",
        state,
        "required",
        newForm.error
      );
      if (state.forwardMailStartDate < state.stopForwardingMail) {
        props.history.push("/Step5");
      } else {
        errors = {
          ...errors,
          stopForwardingMail:
            "This date value not allowed to be before or same the stopping date!",
        };
        setErrorMsg(errors);
      }
    }

    if (newForm.isValid) {
      props.history.push("/Step5");
    } else {
      setErrorMsg(newForm.error);
    }
  };

  return (
    <div className={classes.start}>
      <Heading
        heading={"When should we start forwarding mail to your new address?"}
      />
      <img
        src={Back}
        className={classes.backBtn}
        onClick={() => history.push(`/step3`)}
      ></img>
      <form>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <TextField
              id="date"
              style={{ marginLeft: "12%" }}
              // label="Date From?*"
              format="MM/dd/yyyy"
              type="date"
              error={!!errorMsg.forwardMailStartDate}
                helperText={errorMsg.forwardMailStartDate}
                disablePast={true}
              value={state.forwardMailStartDate || null}
              className={classes.textfield}
              onChange={(e) => {
                onChange(e, "forwardMailStartDate", e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            {console.log(state.secondDate , state.moveType )}
            {state.secondDate && state.moveType === "temporary" && state.forwardMailStartDate && (
              <>
                <Heading
                  heading={
                    "When do you want to stop the Mails being forwarded to your Temporary Address?"
                  }
                />

                <TextField
                  id="date"
                  // label="Date To?*"
                  type="date"
                  format="MM/dd/yyyy"
                  className={classes.textfield}
                  value={state.forwardMailEndDate || null}
                  error={!!errorMsg.stopForwardingMail}
                    helperText={errorMsg.stopForwardingMail}
                    autoOk={true}
                    disablePast={true}
                  onChange={(e) =>
                    onChange(e, "forwardMailEndDate", e.target.value)
                  }
                />
              </>
            )}
          </Grid>
          <Grid item xs={12}>
          {errorMsg > 0 && (
                <div className="text-danger mb-2">
                  Please Fill out all the required fields
                </div>
              )}
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                onClick={() => onNext()}
              >
                NEXT
              </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Step4;
