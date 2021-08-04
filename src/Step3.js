import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link, useHistory } from "react-router-dom";
import Heading from "./heading";
import Back from "./images/back.png";
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
    marginLeft: "1%",
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
  backBtn: {
    width: "20px",
    position: "absolute",
    left: "30%",
    top: "20%",
    // cursor: "pointer";
  },
}));
const Step3 = (props) => {
  const { state } = props;
  const classes = useStyles();
  const history = useHistory();

  const onChange = (e, fieldName, value) => {
    let updatedState = { ...state };
    switch (fieldName) {
      case "moveType":
        if(value==='temporary'){
          updatedState.secondDate = value;
        }
        updatedState.moveType = value;
        break;
      default:
        break;
    }
    props.onChangeState(updatedState);
  };

  return (
    <div className={classes.start}>
      <Heading heading={"What best describes you Move?"} />
      <img
        src={Back}
        className={classes.backBtn}
        onClick={() => history.push(`/step2`)}
      ></img>
      <form>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Link to="/step4" style={{ textDecoration: "none" }}>
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                style={{ marginLeft: "12%" }}
                onClick={(e) => {
                  onChange(e, "moveType", "temporary");

                  history.push("/step4");
                }}
              >
                TEMPORARY
              </Button>
            </Link>

            <Link to="/step4" style={{ textDecoration: "none" }}>
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                onClick={(e) => {
                  onChange(e, "moveType", "permanent");
                  history.push("/step4");
                }}
              >
                PERMANENT
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Step3;
