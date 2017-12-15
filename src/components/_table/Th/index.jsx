import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';

class Th extends React.Component {
  render() {
    return (
      <th className={classNames('table__th', this.props.className)}>
        {this.props.children}
      </th>
    )
  }
}

Th.propTypes = {
  children : PropTypes.node.isRequired,
  className: PropTypes.string
};

module.exports = Th;
