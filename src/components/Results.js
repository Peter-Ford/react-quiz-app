import React from 'react';
import PropTypes from "prop-types";

export const Results = (props) => {
    return (
        <div className="quiz-message">
            <h2 className={props.className}>{props.message}</h2>
            <button className="button" onClick={props.onClick}>Retake Quiz</button>
        </div>
    )
};

Results.propTypes = {
    className: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};
