import React from 'react';
import PropTypes from 'prop-types';
import './lorem.min';

const Lorem = props => (
    <span data-lorem={`${props.length}${props.type}`} />
);

Lorem.propTypes = {
    length: PropTypes.number,
    /** p->paragraph w->word s->sentence */
    type  : PropTypes.oneOf(['p', 's', 'w'])
};
Lorem.defaultProps = {
    length: 1,
    type  : 's'
};

module.exports = Lorem;
