import React, {Component} from "react"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import classes from "./Quiz.module.scss"



class Quiz extends Component {

    state = {
        activeQuestion: 0,
        answerState: null, // {[id]: 'success' 'error'}
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswer: 2,
                id: 1,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленый', id: 4}
                ]
            },
            {
                question: 'В каком году основали Санкт-Петербург?',
                rightAnswer: 3,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1702', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4}
                ]
            },
        ]
    }

    isQuizFifnished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
    };

    onAnswerClickHandler = (answerId) => {
        console.log('answerId', answerId)

        const question = this.state.quiz[this.state.activeQuestion];
        if (question.rightAnswer === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeOut = window.setTimeout(() => {
                if (this.isQuizFifnished()) {
                    console.log('все...')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeOut)
            }, 1000)

           

        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }

    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers = {this.state.quiz[this.state.activeQuestion].answers}
                        question = {this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLenght={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state = {this.state.answerState}

                    />
                </div> 
            </div>
        )
    }
}

export default Quiz