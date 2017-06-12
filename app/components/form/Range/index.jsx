// https://codepen.io/seanstopnik/pen/CeLqA
// https://codepen.io/wolthers/pen/LkOLQA

var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

class Range extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        };
        this.min = this.props.min;
        this.max = (
            this.min &&
            this.props.max &&
            this.min < this.props.max
            ) ? this.props.max : null;

        this.handleChange  = this.handleChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({ value: nextProps.value });
        }
    }

    handleChange(e){
        let v = e.target.value;

        this.setState({value: v});
        this.props.onChange(v);
    }
    render() {
        return (
            <div className="range-slider">
                <input
                    type     ="range"
                    className="range-slider__range"
                    disabled = {this.props.disabled ? 'disabled' : null}    
                    value    = {this.state.value}
                    step     = {this.props.step}
                    min      = {this.min}
                    max      = {this.max}
                    onChange = {this.handleChange}
                />
                <span className="range-slider__value">{this.state.value}</span>
            </div>
        );
    }
}


Range.propTypes = {
    disabled   : PropTypes.bool,
    value      : PropTypes.number,
    step       : PropTypes.number,
    min        : PropTypes.number,
    max        : PropTypes.number,
    texted     : PropTypes.bool,
    onChange   : PropTypes.func
};
Range.defaultProps = {
    disabled: false,
    value   : 0,
    step    : 1,
    min     : 0,
    max     : 100,
    onChange: function(){}
};

module.exports = Range;