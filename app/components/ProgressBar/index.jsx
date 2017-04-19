var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames');

const ProgressBar = (props) =>(
    <div className={classNames('progressBar', props.className)}>
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
    className: PropTypes.string             // underline | left | right | bordered
                                            // blue | red | green
};
ProgressBar.defaultProps = {
    val: 50
};

module.exports = ProgressBar;
