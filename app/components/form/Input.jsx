var React = require('react');

class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    focusIn(){
        if(this.props.onFocusIn)
            this.props.onFocusIn(this.refs.field.value);
    }
    focusOut(){
        if(this.props.onFocusOut)
            this.props.onFocusOut(this.refs.field.value);
    }
    change(){
        if(this.props.onChange)
            this.props.onChange(this.refs.field.value);
    }
    render() {
        return (
            <input
                ref         = "field"
                onBlur      = { this.focusOut.bind(this) }
                onFocus     = { this.focusIn.bind(this) }
                onChange    = { this.change.bind(this) }
                className   = { this.props.sytle }
                type        = { this.props.type }
                placeholder = { this.props.placeholder }
                defaultValue= { this.props.children }
            />
        );
    }
}


Input.propTypes = {
    children   : React.PropTypes.string.isRequired,
    style      : React.PropTypes.string.isRequired,
    type       : React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    onChange   : React.PropTypes.func,
    onFocusIn  : React.PropTypes.func,
    onFocusOut : React.PropTypes.func
};
Input.defaultProps = {
    children   : '',
    style      : '',
    type       : 'text',
    placeholder: ''
};

module.exports = Input;
