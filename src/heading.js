import { makeStyles } from '@material-ui/core';
import React from 'react'
const useStyles =makeStyles ((theme) =>({
    start : {
       margin: theme.spacing(40),
       marginRight: theme.spacing(60),
       textAlign: "center"
    },
    h2 : {
        padding:" 0 0 60px",
        maxWidth: "760px",
        whiteSpace: "pre-wrap",
        color: "#4a4a4a",
        fontWeight: "400",
        fontFamily: "Merriweather,Georgia,serif",
        fontSize: "36px",
        lineHeight: "50px",
        textAlign: "center",
        marginLeft:theme.spacing(30)
    }
}))
function Heading (props){
    const classes = useStyles()
    return ( 
        <h2 className={classes.h2}>{props.heading}</h2>
     );
}

 
export default Heading;