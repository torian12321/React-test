import React          from 'react';
import PropTypes      from 'prop-types';
import RangeTextBall  from './range_text_ball';
import './_style.scss';

class Range extends React.PureComponent {
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
    const v = e.target.value;

    this.setStates(v);
    this.props.onChange(v);
  }
  setStates(v){
    const p = (v - this.min) * 100 / (this.max - this.min);

    this.setState({
      value     : v,
      percentage: p,
      style     : {
        backgroundSize: `${p}% 100%`
      }
    });
  }

  render() {
    return (
      <div className="form-range">
        <input
          className= 'form-range__input'
          type     = "range"
          style    = {this.state.style}
          disabled = {this.props.disabled}    
          min      = {this.min}
          max      = {this.max}
          value    = {this.state.value}
          step     = {this.props.step}
          onChange = {this.handleChange}
        />
        <RangeTextBall
          show      = {this.props.texted}
          value     = {this.state.value}
          percentage= {this.state.percentage}
        />
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
  onChange: () => null
};

module.exports = Range;