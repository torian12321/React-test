var
React     = require('react'),
PropTypes = require('prop-types');

const Avatar = props => (
    <img 
        src      ={props.src}
        className={props.className}
        alt      ={props.alt}
        role     ={props.alt ? null : 'presentation'}
    />
);

Avatar.propTypes = {
    src      : PropTypes.string.isRequired,
    alt      : PropTypes.string,
    className: PropTypes.string
};
Avatar.defaultProps = {
    src: 'http://lorempixel.com/200/200/people'
};

module.exports = Avatar;
