import React, {Component} from 'react';

export class AnswerOptions extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.onClick(e.target.value, this.props.correctAnswer);
    }

    render() {
        var answerOptions = this.props.answerOptions;

        return (
            <ul>
                {answerOptions.map((answer, index) => (
                    <li key={index}>
                        <button onClick={this.onClick} value={answer.answer}>{answer.answer}</button>
                    </li>
                ))}
            </ul>
        );
    }
}
