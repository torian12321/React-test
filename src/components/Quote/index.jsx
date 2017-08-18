import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_style';
import Icon from '../Icon';

const Quote = props =>(
    <blockquote className={classNames('quote', props.className)} cite={props.cite}>
        {props.children}
        {props.author ? <span className="author">{ props.author }</span> : null}
        <Icon className="icon-open"  name="quote" />
        <Icon className="icon-close" name="quote" rotate={180} />
    </blockquote>
);

Quote.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    author  : PropTypes.string,
    cite    : PropTypes.string
};

module.exports = Quote;
