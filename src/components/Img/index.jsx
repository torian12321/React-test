import React from 'react';
import PropTypes from 'prop-types';
import ImgDef from '../../img/default/img.png';

const Img = (props) => {
    const { src, alt, ...other } = props;

    return (
        <img
            {...other}
            src ={src}
            alt ={alt}
            role={alt ? null : 'presentation'}
        />
    );
};

Img.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};
Img.defaultProps = {
    src: ImgDef
};

module.exports = Img;
