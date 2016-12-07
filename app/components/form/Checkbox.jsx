var React = require('react');

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked   : this.props.checked ? 'checked' : null,
        };
    }
    click(){
        this.setState({
            checked: this.state.checked ? null : 'checked'
        });
    }
    render() {
        return (
            <div className={ 'form-check ' + this.props.style }>
                <input
                    type   = "checkbox"
                    checked= { this.state.checked }
                />
                <label onClick= { this.click.bind(this) }>
                    this.props.children
                </label>
            </div>
        );
    }
}


Checkbox.propTypes = {
    children: React.PropTypes.string,
    checked : React.PropTypes.bool.isRequired,
    style   : React.PropTypes.string.isRequired,
};
Checkbox.defaultProps = {
    checked: false,
    style  : ''       // texted
};

module.exports = Checkbox;
