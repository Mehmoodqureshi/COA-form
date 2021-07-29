import Heading from './heading'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import ValidationTextField from "@material-ui/core/TextField"
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
    }
}))
const Step8 = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.start}>
            <Heading heading={"Fantastic! That's everything I just need to collect your payment information. By submitting this application you understand that an application processing fee will be charged to the account provided for $39 dollars to complete this application alongside accept our Terms of Service . Please select I Agree to accept these terms or I Decline to decline."} />
            <form >
                <Grid container spacing={1}  alignItems="center" >

                <Grid item xs={12}><TextField variant="outlined" style={{width:"30%"}} id="standard-basic" halfwidth label="Card Number" /></Grid>
                
               <Grid item xs={12} spacing={1}> <ValidationTextField variant="outlined" style={{width:"30%"}} id="standard-basic" label="Card Holder Name " placeholder="Card Holder" /></Grid>
                <Grid item xs={12}><ValidationTextField variant="outlined"  id="standard-basic" style={{width:"30%"}} label="Billing Address" placeholder="Address" /></Grid>
               <Grid xs={12} > <Button className={classes.btn} variant="contained" color="primary">I AGREE</Button>
                <Button variant="contained" color="primary" className={classes.btn}>I DECLINE</Button></Grid>
                </Grid>
                </form>
        </div>
     );
}
 
export default Step8;