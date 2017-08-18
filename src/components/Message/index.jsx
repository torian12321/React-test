import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_style';

const Message = props => (
    <div className={classNames('message', props.type, {"important" : props.important})}>
        {props.children}
    </div>
);


Message.propTypes = {
    children : PropTypes.any.isRequired,
    type     : PropTypes.oneOf(['info', 'success', 'danger', 'warning']),
    important: PropTypes.bool
};
Message.defaultProps = {
    important: false
};

module.exports = Message;
