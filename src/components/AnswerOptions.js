import React, {Component} from 'react';
import PropTypes from "prop-types";

export class AnswerOptions extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.onClick(e.target.value, this.props.correctAnswer);
    }

    render() {
        const answerOptions = this.props.answerOptions;

        return (
            <ul className="answer-list">
                {answerOptions.map((answer, index) => (
                    <li key={index} className="answer-list__item">
                        <button className=" button" onClick={this.onClick}
                                value={answer.answer}><span>{answer.answer}</span></button>
                    </li>
                ))}
            </ul>
        );
    }
}

AnswerOptions.propTypes = {
    answerOptions: PropTypes.array.isRequired,
    // correctAnswer: PropTypes.oneOf(['number', 'string']).isRequired,
    onClick: PropTypes.func.isRequired
};
