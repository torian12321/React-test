import './lorem.min.js';

var
React     = require('react'),
PropTypes = require('prop-types');

const Lorem = props => (
    <span data-lorem={`${props.length}${props.type}`} />
);

Lorem.propTypes = {
    length: PropTypes.number,
    type  : PropTypes.oneOf(['p', 's', 'w'])
};
Lorem.defaultProps = {
    length: 1,
    type  : 'p'
};

module.exports = Lorem;
