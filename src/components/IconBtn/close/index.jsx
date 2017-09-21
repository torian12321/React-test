import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_style';
import Icon from '../../Icon';

const IconBtnClose = props =>(
    <div className={classNames('icon-btn', props.className)} onClick={props.onClick}>
        <Icon name='close'/>
    </div>  
);

IconBtnClose.propTypes = {
    className: PropTypes.string,
    onClick  : PropTypes.func
};
IconBtnClose.defaultProps = {
    onClick: () => null
};

module.exports = IconBtnClose;
