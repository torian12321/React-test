// Wrapper for text inputs and textAreas
import React        from 'react';
import PropTypes    from 'prop-types';
import classNames   from 'classnames';
import './_style.scss';

class Wrapper extends React.Component {
  render() {
    return (
      <div className={classNames('styled-input', this.props.className)}>
        {this.props.children}
        {this.props.label &&
          <label htmlFor={this.props.id}>{this.props.label}</label>
        }
        <span />
      </div>
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
