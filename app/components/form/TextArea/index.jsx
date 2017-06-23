var
React     = require('react'),
PropTypes = require('prop-types'),
uniqid    = require('uniqid'),
Wrapper   = require('../_wrapper'),
styles    = require('../Input/_style.less');

class Textarea extends React.Component {
	constructor(props){
        super(props);
        this.state = {
            value : this.props.value,
			filled: false
        };

        this.handleChange  = this.handleChange.bind(this);
        this.handleFocusIn = this.handleFocusIn.bind(this);
        this.handleFocusOut= this.handleFocusOut.bind(this);
    }

	componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({ value: nextProps.value });
        }
    }

    handleChange(e){
        let v = e.target.value;

        this.setState({
			value : v,
			filled: !this.isEmpty(v)
		});
        this.props.onChange(v);
    }
    handleFocusIn(e) {this.props.onFocusIn(e.target.value);}
    handleFocusOut(e){this.props.onFocusOut(e.target.value);}

	isEmpty(str) {
		return (!str || 0 === str.length);
	}


	render(){
		const id = this.props.id || uniqid('textArea_');

		return(
			<Wrapper
				id        = {id}
				className = {this.props.className}
				label     = {this.props.placeholder}
			>
				<textarea
					id           = {id}
					className    = {this.state.filled ? 'filled': null}
					maxLength    = {this.props.maxlength}
					rows         = {this.props.rows}
					onChange     = {this.handleChange}
					defaultValue = {this.props.value}
					disabled     = {this.props.disabled ? 'disabled' : null}
				/>
			</Wrapper>
		);
	}
}

Textarea.propTypes = {
	id         : PropTypes.string,
	disabled   : PropTypes.bool,
	value      : PropTypes.string,
	className  : PropTypes.string,
	rows       : PropTypes.number,
	maxlength  : PropTypes.number,
	placeholder: PropTypes.string,
	onChange   : PropTypes.func,
    onFocusIn  : PropTypes.func,
    onFocusOut : PropTypes.func
};
Textarea.defaultProps = {
	disabled  : false,
	rows      : 4,
	onChange  : function(){},
    onFocusIn : function(){},
    onFocusOut: function(){}
};

module.exports = Textarea;