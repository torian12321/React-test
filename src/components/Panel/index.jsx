import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_style';

const Panel = props => (
    <div className={classNames(
        'panel',
        props.className
    )}>
    {props.title ?
        <div className='panel-title'>
            <span>{props.title}</span>
        </div> :
        null
    }
        <div className='panel-body'>{props.children}</div>
    </div>
);

Panel.propTypes = {
    children : PropTypes.node.isRequired,
    className: PropTypes.string,
    title    : PropTypes.string
};

module.exports = Panel;
