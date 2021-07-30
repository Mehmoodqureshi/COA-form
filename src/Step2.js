import { Grid,makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Heading from "./heading";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Back from "./images/back.png"
const useStyles =makeStyles ((theme) =>({
    start : {
       margin: theme.spacing(40),
       marginRight: theme.spacing(60),
       textAlign: "center",
       marginTop:"5%"
    },
    btn:{
        textDecoration: "none",
        margin: "50%",
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
       margin: "2%",
       
    },
    backBtn: {
      width: "20px",
      position: "absolute",
      left: "20%",
      top: "20%"
      // cursor: "pointer";
  }
}))
const Step2 = () => {
    const classes = useStyles()
    const history = useHistory()
    const [address ,setAddress] =useState()
    const [unitNumber ,setUnitnumber] =useState()
    return ( 
        <div className={classes.start}>
            <Heading heading={"Great To meet you a! What's the address you're moving from? "}/>
            <img src={Back} className={classes.backBtn} onClick={() => history.push(`/step1`)}></img>
            <form >
            <Grid container  spacing={1}  alignItems="center" >
                    <Grid item xs={12}>
                    <TextField onChange={(e)=>setAddress(e.target.value)} className={classes.textfield} style={{marginLeft:"12%"}} id="standard-basic" halfwidth label="Address" />
                    <TextField onChange={(e)=>setUnitnumber(e.target.value)}className={classes.textfield} id="standard-basic" label="Unit Number" />
                    </Grid>
                    <Grid item xs={12}><Link to="/step3" style={{textDecoration:"none"}}><Button className={classes.btn} variant="contained" color="primary">NEXT</Button></Link></Grid>
                    </Grid>
                </form>
        </div>
     );
}
 
export default Step2;