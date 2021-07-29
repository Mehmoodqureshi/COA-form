import Heading from './heading'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { Grid, makeStyles } from '@material-ui/core';
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
    },
    textfield : {
       width:"30%",
       margin: "2%"
    }
}))
const Step7 = () => {
    const classes = useStyles()
        return ( 
            <div className={classes.start}>
            <Heading heading ={"What's the best email address for us to email you confirmation of your change of address?"} />
            <form>
                <Grid container  spacing={1}  alignItems="center" >
                    <Grid item xs={12}>
            <TextField id="standard-basic" className={classes.textfield} label="Email Address" /></Grid>
                <Grid item xs={12}><Button className={classes.btn} variant="contained" color="primary">NEXT</Button></Grid>
                </Grid>
            </form>
        </div>
     );
}
 
export default Step7;