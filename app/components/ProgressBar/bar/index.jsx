var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const ProgressBar = (props) =>(
    <div className={props.className}>
        <div className="bar" style={{ width: props.val + '%' }}>
            {props.children}
            {props.label ? <label>{props.label}</label> : null}
        </div>
    </div>
);


ProgressBar.propTypes = {
    children : PropTypes.string,
    label    : PropTypes.string,
    val      : PropTypes.number.isRequired,
    className: PropTypes.string
};

module.exports = ProgressBar;
