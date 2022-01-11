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
                    state = {props.state ? props.state[answer.id] : null}
                />
            )
        })}
    </ul>
)

export default AnsweresList
