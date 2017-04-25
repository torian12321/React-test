var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames');

const TabsBody = props => (
	<div className={classNames('tabs-body', props.style)}>
        <input type="radio" checked="checked"/>
        <div>
            {props.children}
        </div>
    </div>
);


TabsBody.propTypes = {
    children: PropTypes.any.isRequired,
    style   : PropTypes.string
};

module.exports = TabsBody;
