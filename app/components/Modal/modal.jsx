var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');


const Modal = props => (props.isVisible ? (
    <div className={classNames('modal', props.className)}>
        <div className='modal-bg' />
        <div className='modal-container'>
            <div className='modal-content'>
                {props.children}
            </div>
        </div>
    </div>
) : null);

Modal.propTypes = {
    children : PropTypes.node.isRequired,
    className: PropTypes.string,
    onClose  : PropTypes.func,
    isVisible: PropTypes.bool
};

Modal.defaultProps = {
  isVisible: true
};

module.exports = Modal;
