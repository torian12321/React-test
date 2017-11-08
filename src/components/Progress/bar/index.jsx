import React      from 'react';
import PropTypes  from 'prop-types';
import './_style.less';

class ProgressBar extends React.PureComponent {
  render(){
    return(
      <div className={this.props.className}>
        <div style={{ width: `${this.props.val}%` }}>
          {`${this.props.val}%`}
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  val      : PropTypes.number.isRequired,
  className: PropTypes.string
};

module.exports = ProgressBar;
