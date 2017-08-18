import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_style';

const Table = props => (
    <table className={classNames(
        'table',
        props.className,
        {"striped"  : props.striped},
        {"bordered" : props.bordered}
    )}>
        {props.children}
    </table>
);

Table.propTypes = {
    children : PropTypes.node.isRequired,
    className: PropTypes.string,
    striped  : PropTypes.bool,
    bordered : PropTypes.bool
};
Table.defaultProps = {
    striped : true,
    bordered: false
};

module.exports = Table;
