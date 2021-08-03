import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Heading from './heading'
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import Person from '@material-ui/icons/Person';


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
           
        }
    }))
    const Start = (props) => {
        const handleClick =()=>{
            console.log (fname , lname)
        }
        
        const {onChangeState,state} = props 
        const onChange = (e, fieldName, value) => {
            let updatedState = { ...state };
            switch (fieldName) {
              case "fname":
              case "lname":
                if(fieldName === "fname" || fieldName ==="lname"){
                  var regex=/^[0-9]+$/;
                  if(value.length){
                    if (value[value.length-1].match(regex))
                {
                    return
                }
                  }
                
                }
                updatedState.userInfo[fieldName] = value;
                break;
              default:
                break;
            }
            onChangeState(updatedState);
          };
        const classes = useStyles()
        const [fname , setFirstname]=useState()
        const [lname ,setLastname] =useState()
        return ( 
            <div className={classes.start}>
                <Heading heading={"Hey! I'm Madison. I'll help you complete your change of address in seconds. Ready to go?"}/>
                <form >
                <Grid container  spacing={1}  alignItems="center" >
                    <Grid item xs={12}>
                    <TextField 
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <Person />
                                </InputAdornment>
                            ),
                            }}
                            onChange={(e) => onChange(e, "fname", e.target.value)} value={state.userInfo.fname || ""} className={classes.textfield} id="standard-basic" style={{marginLeft:"12%"}} label="First Name"  />
            
            <TextField
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <Person />
                                </InputAdornment>
                            ),
                            }} onChange={(e) => onChange(e, "lname", e.target.value)} value={state.userInfo.lname || ""} className={classes.textfield} id="standard-basic" label="Last Name" />
                    </Grid>
                    <Grid item xs={12}><Link to ="/step1" style={{textDecoration:"none"}}><Button onClick={handleClick} className={classes.btn}  variant="contained" color="primary">NEXT</Button></Link></Grid>
                    </Grid>
                </form>

            </div>
        );
    }
    
    export default Start;