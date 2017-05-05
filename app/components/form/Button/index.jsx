var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames');

const Button = props => (
    <button
        className= {classNames(
            'btn',
            props.flat  ? null : 'btn-3D',
            props.large ? 'btn-large' : null,
            props.color ? 'btn-' + props.color : null,
            props.type  ? 'btn-' + props.type  : null
        )}
        onClick  = {props.onClick}
        disabled = {props.disabled ? 'disabled' : null}
    >
        {props.children}
    </button>
);


Button.propTypes = {
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    flat    : PropTypes.bool.isRequired,
    large   : PropTypes.bool.isRequired,
    color   : PropTypes.oneOf(['main', 'sec', 'green', 'red', 'blue', 'white', 'grey', 'black']),
    type    : PropTypes.oneOf(['success', 'danger', 'warning']),
    onClick : PropTypes.func
};
Button.defaultProps = {
    children : 'Submit',
    disabled : false,
    large    : false,
    flat     : true
};

module.exports = Button;