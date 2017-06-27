var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const Panel = props => (
    <div className={classNames(
        'panel',
        props.className
    )}>
    {props.title ?
        <div className='panel-title'>
            <span>{props.title}</span>
        </div> :
        null
    }
        <div className='panel-body'>{props.children}</div>
    </div>
);

Panel.propTypes = {
    children : PropTypes.node.isRequired,
    className: PropTypes.string,
    title    : PropTypes.string
};

module.exports = Panel;
