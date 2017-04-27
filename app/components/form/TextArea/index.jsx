var
React     = require('react'),
PropTypes = require('prop-types'),
uniqid    = require('uniqid');

const Textarea = props => {
	const id = props.id || uniqid('textArea_');
	return(
		<textarea
			id           = {id}
			maxLength    = {props.maxlength}
			placeholder  = {props.placeHolder}
			className    = 'form-control'
			onChange     = {props.onChange}
			defaultValue = {props.value}
			disabled     = {props.disabled ? 'disabled' : null}
		/>
	);
}

Textarea.propTypes = {
	id         : PropTypes.string,
	disabled   : PropTypes.bool.isRequired,
	value      : PropTypes.string,
	onChange   : PropTypes.func.isRequired,
	maxlength  : PropTypes.number,
	placeHolder: PropTypes.string
};
Textarea.defaultProps = {
	disabled: false,
	onChange: function(){}
};

module.exports = Textarea;