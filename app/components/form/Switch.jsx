var
React     = require('react'),
PropTypes = require('prop-types');

class Radio extends React.Component {
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
            <div className={ 'form-switch ' + this.props.style }>
                <input
                    type   = "checkbox"
                    checked= { this.state.checked }
                />
                <label onClick= { this.click.bind(this) }></label>
            </div>
        );
    }
}


Radio.propTypes = {
    checked : PropTypes.bool.isRequired,
    style   : PropTypes.string.isRequired,
};
Radio.defaultProps = {
    checked: false,
    style  : ''       // texted
};

module.exports = Radio;
