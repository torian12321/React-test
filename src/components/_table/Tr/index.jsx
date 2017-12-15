import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';

class Tr extends React.Component {
  render() {
    return (
      <tr className={classNames('table__tr', this.props.className)}>
        {this.props.children}
      </tr>
    )
  }
}

Tr.propTypes = {
  children : PropTypes.node.isRequired,
  className: PropTypes.string
};

module.exports = Tr;
