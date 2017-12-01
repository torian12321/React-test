import React      from 'react';
import PropTypes  from 'prop-types';

class FieldsetTitle extends React.PureComponent {
  render() {
    return <legend>{this.props.text}</legend>
  }
}

FieldsetTitle.propTypes = {
  text: PropTypes.string
};

module.exports = FieldsetTitle;
