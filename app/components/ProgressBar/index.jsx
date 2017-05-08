var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames');

const ProgressBar = (props) =>(
    <div className={classNames(
        'progressBar',
        props.style,
        props.alignment ? 'pb-' + props.alignment : null,
        props.color
    )}>
        <div className="bar" style={{ width: props.val + '%' }}>
            {props.children}
            {props.label ? <label>{props.label}</label> : null}
        </div>
    </div>
);


ProgressBar.propTypes = {
    children : PropTypes.string,
    label    : PropTypes.string,
    val      : PropTypes.number,
    style    : PropTypes.oneOf(['underline', 'bordered']),
    alignment: PropTypes.oneOf(['left', 'right']),
    color    : PropTypes.oneOf(['main', 'sec', 'info', 'success', 'danger', 'warning'])
};
ProgressBar.defaultProps = {
    val: 50
};

module.exports = ProgressBar;
