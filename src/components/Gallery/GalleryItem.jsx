import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = (props) =>(
    <div
        className= {'gallery_img ' + props.style }
        style    = {{ backgroundImage: 'url(' + props.src + ')' }}
    >
        { props.content }
    </div>
)

GalleryItem.propTypes = {
    style    : PropTypes.string.isRequired,
    src      : PropTypes.string.isRequired,
    content  : PropTypes.any
};
GalleryItem.defaultProps = {
    style    : '',
    src      : 'http://placehold.it/350x150'
};

module.exports = GalleryItem;
