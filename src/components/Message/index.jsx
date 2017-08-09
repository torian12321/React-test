var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const Message = props => (
    <div className={classNames('message', props.type, {"important" : props.important})}>
        {props.children}
    </div>
);


Message.propTypes = {
    children : PropTypes.any.isRequired,
    type     : PropTypes.oneOf(['info', 'success', 'danger', 'warning']),
    important: PropTypes.bool
};
Message.defaultProps = {
    important: false
};

module.exports = Message;
