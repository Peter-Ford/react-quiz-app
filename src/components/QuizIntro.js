import React, {Component} from 'react';

export class QuizIntro extends Component {
    render() {
        return (
            <div className="quiz-intro">
                <h1>{this.props.message}</h1>
                <button className="button" onClick={this.props.onClick}><span>Start</span></button>
            </div>
        );
    }
}

QuizIntro.propTypes = {};
