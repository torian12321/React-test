var
React     = require('react'),
PropTypes = require('prop-types');

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        };
        this.min = this.props.min;
        this.max = (
            this.min &&
            this.props.max &&
            this.min < this.props.max
            ) ? this.props.max : null;


        this.handleChange  = this.handleChange.bind(this);
        this.handleFocusIn = this.handleFocusIn.bind(this);
        this.handleFocusOut= this.handleFocusOut.bind(this);
    }

    handleChange(e){
        let v = e.target.value;

        this.setState({value: v});
        this.props.onChange(v);
    }
    handleFocusIn(e) {this.props.onFocusIn(e.target.value);}
    handleFocusOut(e){this.props.onFocusOut(e.target.value);}


    render() {
        return (
            <input 
                type       = "number"
                disabled   = {this.props.disabled ? 'disabled' : null}
                value      = {this.state.value}
                step       = {this.props.step}
                min        = {this.min}
                max        = {this.max}
                placeholder= {this.props.placeholder}
                onChange   = {this.handleChange}
                onFocus    = {this.handleFocusIn}
                onBlur     = {this.handleFocusOut}
            />
        );
    }
}


Input.propTypes = {
    disabled   : PropTypes.bool.isRequired,
    value      : PropTypes.number,
    step       : PropTypes.number.isRequired,
    min        : PropTypes.number,
    max        : PropTypes.number,
    placeholder: PropTypes.string,
    onChange   : PropTypes.func.isRequired,
    onFocusIn  : PropTypes.func.isRequired,
    onFocusOut : PropTypes.func.isRequired
};
Input.defaultProps = {
    disabled  : false,
    value     : 0,
    step      : 1,
    onChange  : function(){},
    onFocusIn : function(){},
    onFocusOut: function(){}
};

module.exports = Input;
