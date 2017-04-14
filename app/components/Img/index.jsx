var
React     = require('react'),
PropTypes = require('prop-types');

const Img = props => (
    <img 
        src      ={props.src}
        className={props.className}
        alt      ={props.alt || null}
        role     ={props.alt ? null : 'presentation'}
    />
);

Img.propTypes = {
    src      : PropTypes.string.isRequired,
    alt      : PropTypes.string,
    className: PropTypes.string
};
Img.defaultProps = {
    src      : './src/img/default/def.png',
    className: null
};

module.exports = Img;
