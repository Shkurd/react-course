import React from "react";
import classes from "./AnswereItem.module.scss";

const AnswereItem = props => {
    return (
        <li 
            className={classes.AnswerItem}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswereItem;