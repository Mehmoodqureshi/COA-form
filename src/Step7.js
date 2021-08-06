import Heading from "./heading";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid, makeStyles } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Back from "./images/back.png";
import Email from "@material-ui/icons/AlternateEmail";
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
const Step7 = (props) => {
  const { state } = props;
  const classes = useStyles();
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState({});
  const [Emailaddress, setEmailaddress] = useState();
  const onChange = (e, fieldName, value) => {
    let updatedState = { ...state };
    let errors = errorMsg;
    switch (fieldName) {
      case "email":
        updatedState[fieldName] = value;
        // if (errors.email) {
        setErrorMsg(
          fieldValidator(fieldName, updatedState, "email", errors).error
        );
        // }
        break;
      default:
        break;
    }
    props.onChangeState(updatedState);
  };

  const onNext = () => {
    let errors = { ...errorMsg };
    let newForm;

    newForm = fieldValidator("email", state, "email", errors);
    // console.log(newForm, "a");
    // console.log(errorMsg);
    // if (!errorMsg.email) {
    //   history.push("/Step8");
    // }
    if(newForm.isValid){
      history.push("/Step8")
    }
    else {
    setErrorMsg({ msg: "Enter a valid Email" });
    }
  };

  return (
    <div className={classes.start}>
      <Heading
        heading={
          "What's the best email address for us to email you confirmation of your change of address?"
        }
      />
      <img
        src={Back}
        className={classes.backBtn}
        onClick={() => history.push(`/step6`)}
      ></img>
      <form>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              error={!!errorMsg.email}
              helperText={errorMsg.email}
              onChange={(e) => onChange(e, "email", e.target.value)}
              value={state.email || ""}
              style={{ marginLeft: "14%" }}
              type="email"
              id="standard-basic"
              className={classes.textfield}
              label="Email Address"
            />
          </Grid>
          <Grid item xs={12} style={{ color: "red" }}>
            {console.log(errorMsg, "errorMsg")}
            {errorMsg && <div >{errorMsg.msg}</div>}
            <Button
              style={{ left: "2%" }}
              onClick={() => onNext()}
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

export default Step7;
