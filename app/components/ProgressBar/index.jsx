var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
Bar       = require('./bar'),
Circle    = require('./circular');

const Progress = (props) =>{
    let conf = {
        val      : props.val,
        className: classNames(
            'pb',
            `pg-${props.type}`,
            props.size,
            props.className
        )
    };


    if(props.type === 'circular'){
        return <Circle {...conf} />
    }else{
        return <Bar {...conf} />
    }
};


Progress.propTypes = {
    type     : PropTypes.oneOf(['bar', 'circular']),
    label    : PropTypes.string,
    val      : PropTypes.number,
    style    : PropTypes.oneOf(['underline', 'bordered']),
    size     : PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    alignment: PropTypes.oneOf(['left', 'right']),
    color    : PropTypes.oneOf(['main', 'sec', 'info', 'success', 'danger', 'warning'])
};
Progress.defaultProps = {
    type: 'bar',
    val : 50
};

Progress.displayName = 'ProgressBar';
module.exports = Progress;