import React      from 'react';
import PropTypes  from 'prop-types';
import uniqid     from 'uniqid';
import classNames from 'classnames';
import Icon       from '../../Icon';
import styles     from './_style';

const Add = props => (
  <div
    id       = {props.id || uniqid('add_')}
    className= {classNames('add', props.className)}
  >
    <Icon className='add-icon' />
    {props.children}
  </div>
);


Add.propTypes = {
  id       : PropTypes.string,
  children : PropTypes.string,
  className: PropTypes.string,
  accept   : PropTypes.string
};
Add.defaultProps = {
  children: 'Add'
};

module.exports = Add;
