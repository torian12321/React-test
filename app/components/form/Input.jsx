var
React     = require('react'),
PropTypes = require('prop-types');

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
    children   : PropTypes.string.isRequired,
    style      : PropTypes.string.isRequired,
    type       : PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange   : PropTypes.func,
    onFocusIn  : PropTypes.func,
    onFocusOut : PropTypes.func
};
Input.defaultProps = {
    children   : '',
    style      : '',
    type       : 'text',
    placeholder: ''
};

module.exports = Input;
