import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_style';

const Loading = props => (
    <div className={classNames('loading', props.type, props.size)} />
);


Loading.propTypes = {
    type: PropTypes.oneOf(['spinner', 'pulse']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
};
Loading.defaultProps = {
    type: 'spinner'
};

module.exports = Loading;
