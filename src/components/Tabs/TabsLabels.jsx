import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';

const TabsLabels = (props) => {
  var click = function(index) {
    props.onChange(index);
  }
  return (
    <ul className={classNames('tabs__header', props.className)}>
    { props.children.map((child, index) =>
      <label
        className= {classNames(
          'tabs__header__tab',
          {'tabs__header__tab--active' : props.selected === index}
        )}
        key      = {index}
        onClick  = {click.bind(this, index)}>
        {child.props.label}
      </label>
    )}
    </ul>
  )
}


TabsLabels.propTypes = {
  children : PropTypes.any.isRequired,
  selected : PropTypes.number.isRequired,
  className: PropTypes.string,
  onChange : PropTypes.func.isRequired
};

module.exports = TabsLabels;
