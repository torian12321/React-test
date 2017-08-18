import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Bar from './bar';
import Circle from './circular';

const Progress = props =>{
    let conf = {
        val      : props.val,
        className: classNames(
            'pb',
            `pb-${props.type}`,
            props.state,
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
    type : PropTypes.oneOf(['bar', 'circular']),
    val  : PropTypes.number,
    label: PropTypes.string,    
    size : PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    state: PropTypes.oneOf(['main', 'sec', 'info', 'success', 'danger', 'warning'])
};
Progress.defaultProps = {
    type: 'bar',
    val : 50
};

module.exports = Progress;