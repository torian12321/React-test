import React  		from 'react';
import PropTypes 	from 'prop-types';
import classNames from 'classnames';
import styles     from './_style';

class Container extends React.Component {
  render() {
    return (
      <div  className={classNames(
        this.props.fluid ? 'container-fluid' : 'container',
        this.props.className
      )}>
        {this.props.children}
      </div>
    )
  }
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(require('../Col')),
    PropTypes.arrayOf(require('../Row')),
  ]).isRequired,  
  className: PropTypes.string,
  fluid    : PropTypes.bool
};
Container.defaultProps = {
  fluid: false
};

module.exports = Container;
