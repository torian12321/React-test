var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const Avatar = props => (
    <div 
        style    ={{backgroundImage: `url(${props.src})`}}
        className={classNames = classNames('avatar', props.size, props.className)}
        alt      ={props.alt}
        role     ={props.alt ? null : 'presentation'}
    />
);


Avatar.propTypes = {
    src      : PropTypes.string.isRequired,
    className: PropTypes.string
};
Avatar.defaultProps = {
    src: 'http://lorempixel.com/200/200/people'
};

module.exports = Avatar;
