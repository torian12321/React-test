import React      from 'react';
import PropTypes  from 'prop-types';
import './_style.scss';

class ProgressBar extends React.PureComponent {
  render(){
    return(
      <div className={this.props.className}>
        <div className='pb-bar__bar' style={{ width: `${this.props.val}%` }}>
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
