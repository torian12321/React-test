import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';

class Tfoot extends React.Component {
  render() {
    return (
      <tfoot className={classNames('table__tfoot', this.props.className)}>
        {this.props.children}
      </tfoot>
    )
  }
}

Tfoot.propTypes = {
  children : PropTypes.node.isRequired,
  className: PropTypes.string
};

module.exports = Tfoot;
