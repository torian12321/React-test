import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_style';

const Fieldset = props => (
    <fieldset disabled={props.disabled} className={classNames('fieldset', props.className)}>
        {props.title ?
            <legend>{props.title}</legend> : 
            null
        }
        {props.children}
    </fieldset>
);

Fieldset.propTypes = {
    /** Fieldset content. */
    children: PropTypes.any.isRequired,
    /** Fieldset legend. */
    title   : PropTypes.string,
    disabled: PropTypes.bool
};
Fieldset.defaultProps = {
    disabled: false
};

module.exports = Fieldset;
