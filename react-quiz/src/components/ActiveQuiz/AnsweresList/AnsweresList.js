import React from "react";
import classes from "./AnsweresList.module.scss";
import AnswereItem from "./AnswerItem/AnswerItem"; 

const AnsweresList = props => (
    <ul className= {classes.AnsweresList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswereItem
                    key = {index}
                    answer = {answer}
                    onAnswerClick={props.onAnswerClick}
                />
            )
        })}
    </ul>
)

export default AnsweresList
