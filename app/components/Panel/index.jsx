var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames');

const Panel = props => (
    <div className={classNames('panel', props.className)}>
        {props.children}
    </div>
);


Panel.propTypes = {
    children : PropTypes.any.isRequired,
    className: PropTypes.string.isRequired   // info | success | danger | warning
};

module.exports = Panel;
