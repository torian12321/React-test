import React      from 'react';
import PropTypes  from 'prop-types';
import styles     from './_style';

class ProgressCircle extends React.PureComponent {
  render(){
    const offset = (( -parseFloat(this.props.val) /100) * 220) - 220;

    return(
      <div className={this.props.className}>
        <label>{`${this.props.val}%`}</label>
        <svg viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="35" />
          <circle cx="40" cy="40" r="35" className="fill" strokeDashoffset={offset} />
        </svg>
      </div>
    );
  }
}

ProgressCircle.propTypes = {
  val      : PropTypes.number.isRequired,
  className: PropTypes.string
};

module.exports = ProgressCircle;
