import classes from "./ActiveQuiz.module.scss"
import React from "react"
import AnsweresList from "./AnsweresList/AnsweresList"

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>
                    2.
                </strong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLenght}</small>
        </p>
        <AnsweresList
            state = {props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveQuiz