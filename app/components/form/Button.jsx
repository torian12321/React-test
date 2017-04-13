var
React     = require('react'),
PropTypes = require('prop-types');

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
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    style   : PropTypes.string.isRequired,
    onClick : PropTypes.func
};
Button.defaultProps = {
    children: 'Submit',
    disabled: false,
    style   : ''
};

module.exports = Button;
