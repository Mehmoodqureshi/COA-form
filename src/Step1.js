import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link, useHistory } from "react-router-dom";
import Heading from "./heading";
import Back from "./images/back.png";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
// import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  start: {
    margin: theme.spacing(40),
    marginRight: theme.spacing(60),
    textAlign: "center",
    marginTop: "5%",
  },
  btn: {
    textDecoration: "none",
    // margin: ".375em",
    margin: "2%",
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
    left:"1%"
  },
  backBtn: {
    width: "20px",
    position: "absolute",
    left: "20%",
    top: "20%",
    // cursor: "pointer";
  },
  textfield: {
    width: "30%",
    marginL: "4%",
    left:"7%"
  },
}));
const Step1 = (props) => {
  const { handleChangeField, state } = props;
   const classes = useStyles();
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState({});

  const onNext = () => {
    if (state.businessName.length) {
      history.push("/step2");
    } else {
      setErrorMsg({msg:"Please Provide Business Name"});
      console.log(errorMsg)
    }
  };

  return (
    <div className={classes.start}>
      <Heading heading={"What is the move for? "} />
      <img
        src={Back}
        className={classes.backBtn}
        onClick={() => history.push(`/`)}
      ></img>
      <form>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Link to="/step2" style={{ textDecoration: "none" }}>
              <Button
              style={{width:"18%"}}
                className={classes.btn}
                variant="contained"
                color="primary"
                style={{ marginLeft: "12%" }}
                onClick={(e) => {
                  handleChangeField(e, "move", "individual");
                  handleChangeField(e, "businessName", "");
                  history.push("/step2");
                }}
              >
                INDIVIDUAL
              </Button>
            </Link>
            <Link to="/step2" style={{ textDecoration: "none" }}>
              <Button
              style={{width:"20%"}}
                className={classes.btn}
                variant="contained"
                color="primary"
                onClick={(e) => {
                  handleChangeField(e, "move", "Entire Family");
                  handleChangeField(e, "businessName", "");
                  history.push("/step2");
                }}
              >
                ENTIRE FAMILY
              </Button>
            </Link>
            <Button
            style={{width:"22%"}}
              className={classes.btn}
              variant="contained"
              color="primary"
              onClick={(e) => {
                handleChangeField(e, "move", "Business");
                handleChangeField(e, "businessName", "");
              }}
            >
              BUSINESS
            </Button>
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          {state.move === "Business" && (
            <>
              <Grid item xs={12}>
                {" "}
                <TextField
                  className={classes.textfield}
                  label="Business Name"
                  type="text"
                  error={!!errorMsg.businessName}
                    helperText={errorMsg.businessName}
                  value={state.businessName}
                  placeholder="name of the business"
                  onChange={(e) =>
                    handleChangeField(e, "businessName", e.target.value)
                  }
                />
              </Grid>
              <Grid  item xs={12} style={{color:"red",marginLeft:"4%"}}>
                {errorMsg && (
                <div>{errorMsg.msg}</div>
              )}
              <Grid    item xs={12}><Button style={{left:"6%"}}  onClick={() => onNext()} className={classes.btn}  variant="contained" color="primary">NEXT</Button></Grid>
              </Grid>
            </>
          )}
        </Grid>
      </form>
    </div>
  );
};

export default Step1;
