var
React     = require('react'),
PropTypes = require('prop-types');

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
    children: PropTypes.string,
    checked : PropTypes.bool.isRequired,
    style   : PropTypes.string.isRequired,
};
Checkbox.defaultProps = {
    checked: false,
    style  : ''       // texted
};

module.exports = Checkbox;
