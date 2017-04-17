var
React     = require('react'),
PropTypes = require('prop-types');

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.state.checked) {
            this.setState({ checked: nextProps.checked });
        }
    }

    handleClick(){
        this.setState({
            checked: !this.state.checked
        });
    }
    render() {
        return (
            <div className={'form-check ' + this.props.className}>
                <input
                    type   = "checkbox"
                    checked= {this.state.checked ? 'checked' : null}
                />
                <label onClick= {this.handleClick.bind(this)}>
                    {this.props.children}
                </label>
            </div>
        );
    }
}


Checkbox.propTypes = {
    children : PropTypes.string,
    checked  : PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
};
Checkbox.defaultProps = {
    checked  : false,
    className: ''
};

module.exports = Checkbox;
