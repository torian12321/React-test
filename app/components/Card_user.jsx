var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames');

const Card_user = (props) =>(
    <div className={classNames('card-user', props.className)}>
        <div className="img" style={{ backgroundImage: 'url(' + props.img + ')' }} />
        <div className="text">
            {props.name  ? <h3>{props.name}</h3>      : null}
            {props.title ? <span>{props.title}</span> : null}
        </div>
    </div>
);

Card_user.propTypes = {
    children : PropTypes.any,
    className: PropTypes.oneOf(['polaroid']),
    name     : PropTypes.string,
    title    : PropTypes.string,
    img      : PropTypes.string.isRequired
};
Card_user.defaultProps = {
    href: '#',
    img : 'http://placehold.it/200x200'
};

module.exports = Card_user;
