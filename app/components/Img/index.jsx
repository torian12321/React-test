var
React     = require('react'),
PropTypes = require('prop-types');

const Img = props => (
    <img 
        src      ={props.src}
        className={props.className}
        alt      ={props.alt}
        role     ={props.alt ? null : 'presentation'}
    />
);

Img.propTypes = {
    src      : PropTypes.string.isRequired,
    alt      : PropTypes.string,
    className: PropTypes.string
};
Img.defaultProps = {
    src: 'http://placehold.it/200x150'
};

module.exports = Img;
