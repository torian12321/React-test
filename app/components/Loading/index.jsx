var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const Loading = props => (
    <div className={classNames('loading', props.type, props.size)} />
);


Loading.propTypes = {
    type: PropTypes.oneOf(['spinner', 'pulse']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
};
Loading.defaultProps = {
    type: 'spinner'
};

module.exports = Loading;
