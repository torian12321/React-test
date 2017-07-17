var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const ProgressBar = (props) =>(
    <div className={props.className}>
        <div style={{ width: `${props.val}%` }}>
            {`${props.val}%`}
        </div>
    </div>
);


ProgressBar.propTypes = {
    val      : PropTypes.number.isRequired,
    className: PropTypes.string
};

module.exports = ProgressBar;
