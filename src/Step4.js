import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Heading from "./heading";
import { Grid, makeStyles } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Back from "./images/back.png";
import { useState } from "react";
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
  const [enableNext, setEnableNext] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const [datefrom, setDatefrom] = useState();
  const [dateto, setDateto] = useState();
  const onChange = (e, fieldName, value) => {
    let updatedState = { ...state };
    switch (fieldName) {
      case "forwardMailStartDate":
        updatedState.forwardMailStartDate = value;
        break;
      case "forwardMailEndDate":
        updatedState.forwardMailEndDate = value;

        break;
      case "secondDate":
        updatedState[fieldName] = value;
      default:
        break;
    }
    props.onChangeState(updatedState);
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
              value={state.forwardMailStartDate || null}
              className={classes.textfield}
              onChange={(e) => {
                onChange(e, "forwardMailStartDate", e.target.value);
                onChange(e, "secondDate", true);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            {console.log(state.secondDate, state.moveType)}
            {state.secondDate && state.moveType === "temporary" && (
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
                  onChange={(e) =>
                    onChange(e, "forwardMailEndDate", e.target.value)
                  }
                />
              </>
            )}
          </Grid>
          <Grid item xs={12}>
            <Link to="/step5" style={{ textDecoration: "none" }}>
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
              >
                NEXT
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Step4;
