var
React     = require('react'),
PropTypes = require('prop-types'),
styles    = require('./_style.less');

const Avatar = props => {
    let className = classNames(
        'avatar',
        props.size,
        props.className
    );

    return(
        <div 
            style    ={{ backgroundImage: `url(${props.src})`}}
            className={className}
            alt      ={props.alt}
            role     ={props.alt ? null : 'presentation'}
        />
    );
}


Avatar.propTypes = {
    src      : PropTypes.string.isRequired,
    className: PropTypes.string
};
Avatar.defaultProps = {
    src: 'http://lorempixel.com/200/200/people'
};

module.exports = Avatar;
