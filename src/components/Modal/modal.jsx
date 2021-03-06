import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import IconClose  from '../IconBtn/close';
import './_style.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen
    };

    this.handleClose = this.handleClose.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.state.isOpen) {
      this.setState({isOpen: nextProps.isOpen});
    }
  }

  handleClose(){
    this.setState({
      isOpen: false
    });
  }
  
  render(){
    return (this.state.isOpen &&
      <div className={classNames('modal', this.props.className)}>
        <div className='modal__bg' />
        <div className='modal__container'>
          <IconClose onClick={this.handleClose} className="modal__container__closeIcon" />
          <div className='modal__container__content'>   
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
};

Modal.propTypes = {
  children : PropTypes.node.isRequired,
  className: PropTypes.string,
  isOpen   : PropTypes.bool
};

Modal.defaultProps = {
  isOpen: false
};

module.exports = Modal;
