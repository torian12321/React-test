import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';

class Td extends React.Component {
  render() {
    return (
      <td className={classNames('table__td', this.props.className)}>
        {this.props.children}
      </td>
    )
  }
}

Td.propTypes = {
  children : PropTypes.node.isRequired,
  className: PropTypes.string
};

module.exports = Td;
