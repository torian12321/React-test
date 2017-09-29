import React      from 'react';
import PropTypes  from 'prop-types';

class FieldsetTitle extends React.PureComponent {
  render() {
    return this.props.text ? (
      <legend>{this.props.text}</legend>
    ) : null
  }
}

FieldsetTitle.propTypes = {
  text: PropTypes.string
};

module.exports = FieldsetTitle;
