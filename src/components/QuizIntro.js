import React from 'react';

export const QuizIntro = (props) => {
    return (
        <div className="quiz-message">
            <h1>{props.message}</h1>
            <button className="button" onClick={props.onClick}><span>Start</span></button>
        </div>
    );
};

QuizIntro.propTypes = {};
