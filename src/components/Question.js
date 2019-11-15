import React, { Component } from 'react';

export class Question extends Component {
    render() {
        return (
            <h2>{this.props.questionText}</h2>
        );
    }
}
