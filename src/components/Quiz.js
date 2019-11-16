import React, {Component} from 'react';
import {questions} from '../data/questions';
import {QuizIntro} from './QuizIntro';
import {Question} from './Question';
import {AnswerOptions} from './AnswerOptions';
import {Results} from './Results';
import {ProgressBar} from './ProgressBar';

export class Quiz extends Component {
    constructor(props) {
        super(props);
        this.introHandler = this.introHandler.bind(this);
        this.answerHandler = this.answerHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
        this.state = {
            quizActive: false,
            activeQuestion: 0,
            correctAnswers: 0
        }
    }

    introHandler() {
        this.setState({quizActive: true});
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

    resetHandler() {
        this.setState({
            activeQuestion: 0,
            correctAnswers: 0
        });
    }

    getQuiz(question) {
        return (
            <div className={'quiz-container'}>
                <Question questionText={question.text}/>
                <AnswerOptions
                    answerOptions={question.answers}
                    correctAnswer={question.correctAnswer}
                    onClick={this.answerHandler}/>
                <ProgressBar
                    message={'Question ' + (this.state.activeQuestion + 1) + ' of ' + questions.length}
                    currentQuestion={this.state.activeQuestion}
                    totalQuestionAmount={questions.length}/>
            </div>
        )
    }

    getResults() {
        let resultMessage = "Congratulations, you scored " + this.state.correctAnswers + " out of " + questions.length;

        if (this.state.correctAnswers === 0) {
            resultMessage = "Oh no! You scored 0, better luck next time";
        }

        return (
            <div>
                <Results
                    message={resultMessage}
                    className={this.state.correctAnswers > 0 ? "result-message" : "result-message result-message--fail"}
                    onClick={this.resetHandler}
                />
                <ProgressBar
                    message="Quiz Complete!"
                    currentQuestion={this.state.activeQuestion}
                    totalQuestionAmount={questions.length}/>
            </div>
        )
    }

    render() {
        const question = questions[this.state.activeQuestion];

        if (!this.state.quizActive) {
            return <QuizIntro message="Hello! Click 'Start' to begin the Quiz" onClick={this.introHandler}/>
        } else {
          return (question) ? this.getQuiz(question) : this.getResults();
        }
    }
}
