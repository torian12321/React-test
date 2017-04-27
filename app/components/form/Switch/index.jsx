var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
uniqid    = require('uniqid');

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
        const id = this.props.id || uniqid('switch_');

        return (
            <div className={classNames('form-switch', this.props.style)}>
                <input
                    id     = {id}
                    type   = "checkbox"
                    checked= {this.state.checked ? 'checked' : null}
                />
                <label htmlFor={id} />
            </div>
        );
    }
}


Switch.propTypes = {
    id     : PropTypes.string,
    checked: PropTypes.bool.isRequired,
    style  : PropTypes.oneOf(['texted'])
};
Switch.defaultProps = {
    checked: false
};

module.exports = Switch;