import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Heading from "./heading"
// import TextField from '@material-ui/core/TextField';
const useStyles =makeStyles ((theme) =>({
    start : {
       margin: theme.spacing(40),
       marginRight: theme.spacing(60),
       textAlign: "center"
    },
    btn:{
        margin: ".375rem",
        color: "inherit",
        textTransform: "uppercase",
        wordWrap: "break-word",
        whiteSpace: "normal",
        cursor: "pointer",
        border: 0,
        transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        padding: ".84rem 2.14rem",
        fontSize: ".81rem",
        backgroundColor: "#056aee!important",
        boxShadow: "0 10px 40px -10px #0350b4!important",
        borderRadius:" 5px!important",
        marginTop: "30px",
        color:"white"
    }
}))
const Step1 = () => {
    const classes = useStyles()
        return ( 
            <div className={classes.start}>
            <Heading heading={"What is the move for? "}/>
            <form>
             <Grid container   alignItems="center">
           <Grid item xs={12}>
               <Link to ="">
                <Button className={classes.btn} variant="contained" color="primary">
                  {"INDIVIDUAL"}
                </Button>
                </Link>
                 <Link to ="">
                <Button className={classes.btn} variant="contained" color="primary">
                  {"ENTIRE FAMILY"}
                </Button>
                </Link>
                <Link to ="">
                <Button className={classes.btn} variant="contained" color="primary">
                  {"BUSINESS"}
                </Button>
                </Link>
              </Grid>
            
              </Grid>
              </form>
        </div>
     );
}
 
export default Step1;