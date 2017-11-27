import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class Message extends React.Component {
  render(){
      return(
        <div className={classNames(
          'message',
          this.props.type      ? `message--${this.props.type}` : null,
          this.props.important ? 'message--important'          : null,
          this.props.className,
        )}>
          {this.props.children}
        </div>
    );
  }
}


Message.propTypes = {
  children : PropTypes.any.isRequired,
  className: PropTypes.string,
  type     : PropTypes.oneOf(['info', 'success', 'danger', 'warning']),
  important: PropTypes.bool
};
Message.defaultProps = {
  important: false
};

module.exports = Message;
