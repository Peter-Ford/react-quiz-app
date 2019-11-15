import React, {Component} from 'react';
import PropTypes from "prop-types";

export class Results extends Component {
    render() {
        return <h2 className={this.props.className}>{this.props.message}</h2>
    }
}

Results.propTypes = {
    className: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};
