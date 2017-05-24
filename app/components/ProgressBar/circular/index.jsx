var
React     = require('react'),
PropTypes = require('prop-types'),
styles    = require('./_style.less');

const ProgressCircle = (props) =>{
    const offset = (( -parseFloat(props.val) /100) * 220) - 220;

    return(
        <svg viewBox="0 0 80 80" className="abs-center rad-progress">
            <circle className="progress-background" cx="40" cy="40" r="35" />
            <circle className="progress-bar" cx="40" cy="40" r="35" strokeDasharray="220" strokeDashoffset={offset} />
            <div className="abs-center progress-label">{props.val}%</div>
        </svg>
    );
};


ProgressCircle.propTypes = {
    val: PropTypes.number.isRequired
};

module.exports = ProgressCircle;
