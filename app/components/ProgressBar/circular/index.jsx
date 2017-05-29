var
React     = require('react'),
PropTypes = require('prop-types'),
styles    = require('./_style.less');

const ProgressCircle = (props) =>{
    const offset = (( -parseFloat(props.val) /100) * 220) - 220;

    return(
    	<div className={'pb-container ' + props.className}>
           <label>{props.val}%</label>
            <svg viewBox="0 0 80 80" className="pb-circular abs-center">
                <circle className="progress-background" cx="40" cy="40" r="35" />
                <circle className="progress-bar" cx="40" cy="40" r="35" strokeDasharray="220" strokeDashoffset={offset} />
            </svg>
        </div>
    );
};


ProgressCircle.propTypes = {
    val      : PropTypes.number.isRequired,
    className: PropTypes.string
};

module.exports = ProgressCircle;
