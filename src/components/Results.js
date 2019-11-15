import React, {Component} from 'react';

export class Results extends Component {
    render() {
        const correctAnswers = this.props.correctAnswers;

        if (correctAnswers > 0) {
            return (
                <h2>Congratulations, you scored {correctAnswers} out of {this.props.totalQuestions}!</h2>
            )
        } else {
            return (<h2>Sorry, you didn't get any questions correct, better luck next time!</h2>);
        }
    }
}
