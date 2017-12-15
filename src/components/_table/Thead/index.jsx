import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';

class Thead extends React.Component {
  render() {
    return (
      <thead className={classNames('table__thead', this.props.className)}>
        {this.props.children}
      </thead>
    )
  }
}

Thead.propTypes = {
  children : PropTypes.node.isRequired,
  className: PropTypes.string
};

module.exports = Thead;
