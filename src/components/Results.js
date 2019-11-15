import React from 'react';
import PropTypes from "prop-types";

export const Results = (props) => {
    return <h2 className={props.className}>{props.message}</h2>
};

Results.propTypes = {
    className: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};
