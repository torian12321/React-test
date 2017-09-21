import React  		from 'react';
import PropTypes 	from 'prop-types';
import classNames from 'classnames';
import styles     from './_style';

const Container = props => (
    <div  className={classNames(
      props.fluid ? 'container-fluid' : 'container',
      props.className
    )}>
      {props.children}
    </div>
);

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
