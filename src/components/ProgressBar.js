import React from 'react';
import PropTypes from 'prop-types';

export const ProgressBar = (props) => {
    return (
        <div>
            <div className="progress-bar-container">
                    <span
                        className="progress-bar-label">{props.message}</span>
                <div className="progress-bar"
                     style={{width: ((props.currentQuestion / props.totalQuestionAmount) * 100) + "%"}}/>
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    message: PropTypes.string.isRequired,
    currentQuestion: PropTypes.number.isRequired,
    totalQuestionAmount: PropTypes.number.isRequired
};
