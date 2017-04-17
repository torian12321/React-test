var
React     = require('react'),
PropTypes = require('prop-types');

class Switch extends React.Component {
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
            <div className={'form-switch ' + this.props.className}>
                <input
                    type   = "checkbox"
                    checked= {this.state.checked ? 'checked' : null}
                />
                <label onClick= {this.handleClick.bind(this)} />
            </div>
        );
    }
}


Switch.propTypes = {
    checked  : PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
};
Switch.defaultProps = {
    checked  : false,
    className: ''       // texted
};

module.exports = Switch;