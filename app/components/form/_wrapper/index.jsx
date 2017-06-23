var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const Wrapper = props => (
    <div className="styled-input">
        {props.children}
        {props.label ?
            <label htmlFor={props.id}>{props.label}</label> :
            null
        }        
        <span />
    </div>
);


Wrapper.propTypes = {
    children : PropTypes.node.isRequired,
    label    : PropTypes.string,
    id       : PropTypes.string,
    className: PropTypes.string,
    type     : PropTypes.oneOf(['error', 'success', 'warning'])
};


module.exports = Wrapper;
