var React = require('react');

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    click(){
        if(this.props.onClick)
            this.props.onClick();
    }
    render() {
        return (
            <button
                className= { 'btn ' + this.props.style }
                onClick  = { this.click.bind(this) }
                disabled = { this.props.disabled ? 'disabled' : null }
            >
                { this.props.children }
            </button>
        );
    }
}


Button.propTypes = {
    children: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool.isRequired,
    style   : React.PropTypes.string.isRequired,
    onClick : React.PropTypes.func
};
Button.defaultProps = {
    children: 'Submit',
    disabled: false,
    style   : ''
};

module.exports = Button;
