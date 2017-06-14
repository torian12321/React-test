var
React     = require('react'),
PropTypes = require('prop-types'),
styles    = require('./_style.less');

class Range extends React.Component {
    constructor(props){
        super(props);
        if(this.props.min < this.props.max){
            this.min = this.props.min;
            this.max = this.props.max;
        }else{
            this.min = this.props.max;
            this.max = this.props.min;
        }

        this.handleChange  = this.handleChange.bind(this);
    }
    componentWillMount(){
        this.setStates(this.props.value);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({ value: nextProps.value });
        }
    }

    handleChange(e){
        var v = e.target.value;

        this.setStates(v);
        this.props.onChange(v);
    }
    setStates(v){
        var p = (v - this.min) * 100 / (this.max - this.min);

        this.setState({
            value     : v,
            percentage: p,
            style     : {
                backgroundSize: `${p}% 100%`
            },
            styleTxt  : {
                left     : `${p}%`,
                transform: `translate(-${p}%, 0%)`
            }
        });
    }
    render() {
        return (
            <div className="form-range">
                <input
                    type     = "range"
                    style    = {this.state.style}
                    disabled = {this.props.disabled ? 'disabled' : null}    
                    value    = {this.state.value}
                    step     = {this.props.step}
                    min      = {this.min}
                    max      = {this.max}
                    onChange = {this.handleChange}
                />
                {this.props.texted ? 
                    <span style = {this.state.styleTxt}>{this.state.value}</span> : 
                    null
                }
            </div>
        );
    }
}


Range.propTypes = {
    disabled: PropTypes.bool,
    value   : PropTypes.number,
    step    : PropTypes.number,
    min     : PropTypes.number,
    max     : PropTypes.number,
    texted  : PropTypes.bool,
    onChange: PropTypes.func
};
Range.defaultProps = {
    disabled: false,
    value   : 0,
    step    : 1,
    min     : 0,
    max     : 100,
    texted  : false,
    onChange: function(){}
};

module.exports = Range;