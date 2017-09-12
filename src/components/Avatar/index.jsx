import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_style';
import ImgDef from '../../img/default/user.png';

const Avatar = props => (
    <div 
        style    ={{backgroundImage: `url(${props.src})`}}
        className={classNames(
            'avatar',
            props.size,
            props.state,
            props.className
        )}
    />
);


Avatar.propTypes = {
    src      : PropTypes.string.isRequired,
    size     : PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    state    : PropTypes.oneOf(['main', 'sec', 'success', 'danger', 'warning', 'disable']),
    className: PropTypes.string
};
Avatar.defaultProps = {
    //src: 'http://placeimg.com/200/200/people'
    src: ImgDef
};

module.exports = Avatar;
