var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames');

const Button = props => (
    <button
        className= {classNames('btn', props.className)}
        onClick  = {props.onClick}
        disabled = {props.disabled ? 'disabled' : null}
    >
        {props.children}
    </button>
);


Button.propTypes = {
    children : PropTypes.string.isRequired,
    disabled : PropTypes.bool.isRequired,
    className: PropTypes.string,
    onClick  : PropTypes.func
};
Button.defaultProps = {
    children : 'Submit',
    disabled : false
};

module.exports = Button;