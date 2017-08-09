var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
uniqid    = require('uniqid'),
styles    = require('./_style.less');

class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
        };

        this.handleChange  = this.handleChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.state.checked) {
            this.setState({ checked: nextProps.checked });
        }
    }

    handleChange(){
        this.setState({
			checked : !this.state.checked
		}, () => this.props.onChange(this.state.checked));
    }
    render() {
        const id = this.props.id || uniqid('switch_');

        return (
            <div className={classNames('form-switch', {'texted': this.props.texted})}>
                <input
                    id      = {id}
                    type    = "checkbox"
                    checked = {this.state.checked}
                    disabled= {this.props.disabled}
                    onChange= {this.handleChange}
                />
                <label htmlFor={id} />
            </div>
        );
    }
}


Switch.propTypes = {
    id      : PropTypes.string,
    checked : PropTypes.bool,
    texted  : PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};
Switch.defaultProps = {
    checked: false,
    texted : false,
    disabled: false,
    onChange: function(){}
};

module.exports = Switch;