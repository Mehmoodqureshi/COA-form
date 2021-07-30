    import TextField from '@material-ui/core/TextField';
    import Button from "@material-ui/core/Button";
    import Heading from "./heading";
    import { Grid,makeStyles } from '@material-ui/core';
    import { Link, useHistory } from "react-router-dom";
    import Back from "./images/back.png"
import { useState } from 'react';
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
    const Step4 = () => {
        const classes = useStyles()
        const history = useHistory()
        const [datefrom ,setDatefrom] =useState()
        const [dateto ,setDateto]=useState( )
            return ( 
                <div className={classes.start}>
                <Heading heading={"When should we start forwarding mail to your new address?"} />
                <img src={Back} className={classes.backBtn} onClick={() => history.push(`/step3`)}></img>
                <form>
                    <Grid container spacing={1}  alignItems="center">
                            <Grid  item xs={12}><TextField
                                onChange={(e)=>setDatefrom(e.target.value)}
                                id="date"
                                style={{marginLeft:"12%"}}
                                label="Date From?*"
                                type="date"
                                className={classes.textfield}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            <TextField
                                onChange={(e)=>setDateto(e.target.value)}
                                id="date"
                                label="Date To?*"
                                type="date"
                                className={classes.textfield}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            /></Grid>
                            <Grid  item xs={12}><Link to="/step5" style={{textDecoration:"none"}}><Button className={classes.btn}  variant="contained" color="primary">NEXT</Button></Link></Grid>
                            </Grid>
    </form>
            </div>
        );
    }
    
    export default Step4;