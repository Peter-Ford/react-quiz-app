import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ProgressBar extends Component {
    render() {
        return (
            <div>
                <div className="progress-bar-container">
                    <span
                        className="progress-bar-label">{this.props.message}</span>
                    <div className="progress-bar"
                         style={{width: ((this.props.currentQuestion / this.props.totalQuestionAmount) * 100) + "%"}}/>
                </div>
            </div>
        );
    }
}

ProgressBar.propTypes = {
    message: PropTypes.string.isRequired,
    currentQuestion: PropTypes.number.isRequired,
    totalQuestionAmount: PropTypes.number.isRequired
};
