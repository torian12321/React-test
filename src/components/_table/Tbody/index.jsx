import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';

class Tbody extends React.Component {
  render() {
    return (
      <tbody className={classNames('table__tbody', this.props.className)}>
        {this.props.children}
      </tbody>
    )
  }
}

Tbody.propTypes = {
  children : PropTypes.node.isRequired,
  className: PropTypes.string
};

module.exports = Tbody;
