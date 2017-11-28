import React      from 'react';
import PropTypes  from 'prop-types';

class RangeTextBall extends React.Component {
  shouldComponentUpdate(nextProps) {
    return(
      nextProps.show === true ||
      nextProps.show !== this.props.show
    );
  }

  render() {
    return this.props.show ? (
      <span 
        className= 'form-range__textedBall'
        style    = {{
          left     : `${this.props.percentage}%`,
          transform: `translate(-${this.props.percentage}%, 0%)`
        }}
      >{this.props.value}</span>
    ) : null
  }
}

RangeTextBall.propTypes = {
  show: PropTypes.bool
};
RangeTextBall.defaultProps = {
  show: false
};

module.exports = RangeTextBall;
