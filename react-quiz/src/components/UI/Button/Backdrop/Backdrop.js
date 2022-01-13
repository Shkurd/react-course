import classes from "./Backdrop.module.scss"
import React from "react"

const Backdrop = props => {

    return (
      <div
       onClick = {props.onClick}
       className = {classes.Backdrop}
      >
        
      </div>
    )
}
  
export default Backdrop