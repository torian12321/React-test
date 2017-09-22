import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import Icon       from '../Icon';
import styles     from './_style';

const Add = props => (
  <div className={classNames('add', props.className)}>
    <Icon className='add-icon' />
    {props.children}
  </div>
);


Add.propTypes = {
  children : PropTypes.string,
  className: PropTypes.string
};
Add.defaultProps = {
  children: 'Add'
};

module.exports = Add;
