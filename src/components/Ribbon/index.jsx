import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class Ribbon extends React.Component {
  render() {
    return(
      <div className={classNames(
        'ribbon',
        this.props.className
      )}>
        {this.props.children}
      </div>
    )
  }
}

Ribbon.propTypes = {
  children : PropTypes.node.isRequired,
  className: PropTypes.string
};

module.exports = Ribbon;
