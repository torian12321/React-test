var
React     = require('react'),
PropTypes = require('prop-types'),
uniqid    = require('uniqid'),
styles    = require('../Input/_style.less');

class Input extends React.Component {
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
		return(
			<div className="styled-input">
				<input
					id           = {this.props.id}
					className    = {this.state.filled ? 'filled': null}
					maxLength    = {this.props.maxlength}
					onChange     = {this.handleChange}
					defaultValue = {this.props.value}
					disabled     = {this.props.disabled ? 'disabled' : null}
				/>
				<label htmlFor={this.props.id}>{this.props.placeholder}</label>
				<span />
			</div>
		);
	}
}

Input.propTypes = {
	id         : PropTypes.string,
	disabled   : PropTypes.bool,
	value      : PropTypes.string,
	className  : PropTypes.string,
	maxlength  : PropTypes.number,
	placeholder: PropTypes.string,
	onChange   : PropTypes.func,
    onFocusIn  : PropTypes.func,
    onFocusOut : PropTypes.func
};
Input.defaultProps = {
	disabled  : false,
	onChange  : function(){},
    onFocusIn : function(){},
    onFocusOut: function(){}
};

module.exports = Input;