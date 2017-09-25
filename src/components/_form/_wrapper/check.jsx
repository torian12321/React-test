// Wrapper for checkboxes and radioButtons
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_style-check';

const Wrapper = props => (
    <label className={classNames('wrapper-2', props.className)} htmlFor={props.id}>
        {props.children}
        <span>{props.label}</span>
    </label>
);


Wrapper.propTypes = {
    children : PropTypes.node.isRequired,
    label    : PropTypes.string,
    id       : PropTypes.string,
    className: PropTypes.string,
    type     : PropTypes.oneOf(['error', 'success', 'warning'])
};


module.exports = Wrapper;
