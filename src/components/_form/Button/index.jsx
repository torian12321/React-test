import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import styles     from './_style';

class Button extends React.Component {
  render(){
    const props = this.props;
    
    return(
      <button
        className= {classNames(
          'btn',
          !props.flat ? 'btn-3D'             : null,
          props.large ? 'btn-large'          : null,
          props.color ? `btn-${props.color}` : null,
          props.type  ? `btn-${props.type}`  : null,
          props.className
        )}
        onClick  = {props.onClick}
        disabled = {props.disabled}
      >
        {props.children}
      </button>
    )
  }
}


Button.propTypes = {
    children : PropTypes.any,
    className: PropTypes.string,
    disabled : PropTypes.bool,
    flat     : PropTypes.bool,
    large    : PropTypes.bool,
    color    : PropTypes.oneOf(['main', 'sec', 'green', 'red', 'blue', 'white', 'grey', 'black']),
    type     : PropTypes.oneOf(['success', 'danger', 'warning']),
    onClick  : PropTypes.func
};
Button.defaultProps = {
    children : 'Submit',
    disabled : false,
    large    : false,
    flat     : true
};

module.exports = Button;