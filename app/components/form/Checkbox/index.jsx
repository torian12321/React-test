var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
uniqid    = require('uniqid');

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
        const id = this.props.id || uniqid('checkBox_');

        return (
            <div className={classNames('form-check', this.props.className)}>
                <input
                    id      = {id}
                    type    = "checkbox"
                    checked = {this.state.checked ? 'checked' : null}
                    disabled= {this.props.disabled? 'disabled': null}
                />
                <label htmlFor={id}>{this.props.children}</label>
            </div>
        );
    }
}


Checkbox.propTypes = {
    id       : PropTypes.string,
    disabled : PropTypes.bool,
    children : PropTypes.string,
    checked  : PropTypes.bool,
    className: PropTypes.string
};
Checkbox.defaultProps = {
    disabled: false,
    checked : false
};

module.exports = Checkbox;
