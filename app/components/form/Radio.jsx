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
            <div className={ 'form-radio ' + this.props.style }>
                <input
                    type   = "radio"
                    name   = { this.props.name }
                    checked= { this.state.checked }
                />
                <label onClick= { this.click.bind(this) }>
                    { this.props.children }
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
