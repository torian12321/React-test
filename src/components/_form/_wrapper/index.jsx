// Wrapper for text inputs and textAreas
import React        from 'react';
import PropTypes    from 'prop-types';
import classNames   from 'classnames';
import WrapperLabel from './wrapper_label';
import './_style.less';

class Wrapper extends React.Component {
  render() {
    return (
      <div className={classNames('styled-input', this.props.className)}>
        {this.props.children}
        <WrapperLabel id={this.props.id} text={this.props.label} />   
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
