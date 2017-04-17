var
React     = require('react'),
PropTypes = require('prop-types');

const Button = props => (
    <button
        className= {'btn ' + props.className}
        onClick  = {props.onClick}
        disabled = {props.disabled ? 'disabled' : null}
    >
        {props.children}
    </button>
);


Button.propTypes = {
    children : PropTypes.string.isRequired,
    disabled : PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    onClick  : PropTypes.func
};
Button.defaultProps = {
    children : 'Submit',
    disabled : false,
    className: ''
};

module.exports = Button;