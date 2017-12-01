import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class MessageBar extends React.Component {
  render(){
      return(
        <div className={classNames(
          'messageBar',
          this.props.type && `messageBar--${this.props.type}`,
          this.props.className,
        )}>
          {this.props.children}
        </div>
    );
  }
}

MessageBar.propTypes = {
  children : PropTypes.any.isRequired,
  className: PropTypes.string,
  type     : PropTypes.oneOf(['info', 'success', 'danger', 'warning'])
};

module.exports = MessageBar;
