var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames');

const Panel = props => (
    <div className={classNames('panel', props.type)}>
        {props.children}
    </div>
);


Panel.propTypes = {
    children: PropTypes.any.isRequired,
    type    : PropTypes.oneOf(['info', 'success', 'danger', 'warning'])
};

module.exports = Panel;
