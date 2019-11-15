import React from 'react';
import PropTypes from 'prop-types';

export const Question = (props) => {
    return (
        <h2 className="question">{props.questionText}</h2>
    );
};

Question.propTypes = {
    questionText: PropTypes.string.isRequired
};
