var
React     = require('react'),
PropTypes = require('prop-types');

class Radio extends React.Component {
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
            <div className={'form-radio ' + this.props.style}>
                <input
                    type   = "radio"
                    name   = {this.props.name}
                    checked= {this.state.checked ? 'checked' : null}
                />
                <label onClick= { this.handleClick.bind(this) }>
                    {this.props.children}
                </label>
            </div>
        );
    }
}


Radio.propTypes = {
    children: PropTypes.string,
    name    : PropTypes.string.isRequired,
    checked : PropTypes.bool.isRequired,
    style   : PropTypes.string.isRequired,
};
Radio.defaultProps = {
    checked: false,
    style  : ''
};

module.exports = Radio;
