import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Question extends Component {
    render() {
        return (
            <h2 className="question">{this.props.questionText}</h2>
        );
    }
}

Question.propTypes = {
    questionText: PropTypes.string.isRequired
};
