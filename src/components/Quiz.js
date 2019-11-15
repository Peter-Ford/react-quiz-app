import React, {Component} from 'react';
import {Question} from './Question';
import {AnswerOptions} from './AnswerOptions';
import {Results} from './Results';
import {questions} from '../data/questions';

export class Quiz extends Component {
    constructor(props) {
        super(props);

        this.answerHandler = this.answerHandler.bind(this);
        this.state = {
            activeQuestion: 0,
            correctAnswers: 0
        }
    }

    answerHandler(givenAnswer, correctAnswer) {
        if (isNaN(givenAnswer) === false) {
            givenAnswer = parseInt(givenAnswer);
        }
        
        if (givenAnswer === correctAnswer) {
            this.setState({correctAnswers: this.state.correctAnswers + 1});
        }

        this.setState({activeQuestion: this.state.activeQuestion + 1});
    }

    render() {
        const question = questions[this.state.activeQuestion];

        if (question) {
            return (
                <div>
                    <Question questionText={question.text}/>
                    <AnswerOptions
                        answerOptions={question.answers}
                        correctAnswer={question.correctAnswer}
                        onClick={this.answerHandler}
                    />
                </div>
            )
        } else {
            return <Results correctAnswers={this.state.correctAnswers} totalQuestions={questions.length}/>
        }
    }
}
