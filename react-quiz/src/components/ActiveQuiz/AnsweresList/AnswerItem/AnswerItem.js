import React from "react";
import classes from "./AnswereItem.module.scss";

const AnswereItem = props => {

    const cls = [classes.AnswerItem];

    if (props.state) {
        cls.push(classes[props.state])
    }

    return (
        <li 
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswereItem;