import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
