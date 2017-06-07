var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.isVisible
        };

        this.handleClose = this.handleClose.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isVisible !== this.state.isVisible) {
            this.setState({isVisible: nextProps.isVisible});
        }
    }

    handleClose(){
        this.setState({
            isVisible: false
        });
    }
    
    render(){
        return (this.state.isVisible ? (
            <div className={classNames('modal', this.props.className)}>
                <div className='modal-bg' />
                <div className='modal-container'>
                    <div className='modal-close' onClick={this.handleClose}>X</div>
                    <div className='modal-content'>
                        
                        {this.props.children}
                    </div>
                </div>
            </div>
        ) : null)
    }
};

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
