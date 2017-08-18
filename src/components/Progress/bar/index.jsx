import React from 'react';
import PropTypes from 'prop-types';
import styles from './_style';

const ProgressBar = (props) =>(
    <div className={props.className}>
        <div style={{ width: `${props.val}%` }}>
            {`${props.val}%`}
        </div>
    </div>
);


ProgressBar.propTypes = {
    val      : PropTypes.number.isRequired,
    className: PropTypes.string
};

module.exports = ProgressBar;
