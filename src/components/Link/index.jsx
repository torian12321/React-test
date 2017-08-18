import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_style';

const Link = props =>(
    <a 
        href     ={props.href}
        className={classNames(
            'link',
            {'preview': props.preview}
        )}
    >
        {props.children}
    </a>
);

Link.propTypes = {
    children : PropTypes.string.isRequired,
    href     : PropTypes.string,
    preview  : PropTypes.bool
};
Link.defaultProps = {
    href   : '#',
    preview: false
};

module.exports = Link;
