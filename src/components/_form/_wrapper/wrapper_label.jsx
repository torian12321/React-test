import React      from 'react';
import PropTypes  from 'prop-types';

class WrapperLabel extends React.PureComponent {
  render() {
    return this.props.text ? (
      <label htmlFor={this.props.id}>{this.props.text}</label>
    ) : null
  }
}

WrapperLabel.propTypes = {
  text: PropTypes.string,
  id  : PropTypes.string,
};

module.exports = WrapperLabel;
