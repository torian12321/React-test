var React = require('react');

const GalleryItem = (props) =>(
    <div
        className= {'gallery_img ' + props.style }
        style    = {{ backgroundImage: 'url(' + props.src + ')' }}
    >
        { props.content }
    </div>
)

GalleryItem.propTypes = {
    style    : React.PropTypes.string.isRequired,
    src      : React.PropTypes.string.isRequired,
    content  : React.PropTypes.any
};
GalleryItem.defaultProps = {
    style    : '',
    src      : 'http://placehold.it/350x150'
};

module.exports = GalleryItem;
