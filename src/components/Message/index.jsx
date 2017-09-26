import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import styles     from './_style';

class Message extends React.Component {
  render(){
      return(
        <div className={classNames('message', this.props.type, {"important" : this.props.important})}>
          {this.props.children}
        </div>
    );
  }
}


Message.propTypes = {
  children : PropTypes.any.isRequired,
  type     : PropTypes.oneOf(['info', 'success', 'danger', 'warning']),
  important: PropTypes.bool
};
Message.defaultProps = {
  important: false
};

module.exports = Message;
