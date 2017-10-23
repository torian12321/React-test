// Wrapper for checkboxes and radioButtons
import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style-check.less';

class Wrapper extends React.Component {
  render() {
    return (
      <label
        htmlFor  = {this.props.id}
        className= {classNames(
          'wrapper-2',
          this.props.className
        )}
      >
        {this.props.children}
        <span>{this.props.label}</span>
      </label>
    )
  }
}

Wrapper.propTypes = {
  children : PropTypes.node.isRequired,
  label    : PropTypes.string,
  id       : PropTypes.string,
  className: PropTypes.string,
  type     : PropTypes.oneOf(['error', 'success', 'warning'])
};

module.exports = Wrapper;
