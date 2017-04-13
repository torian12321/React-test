var
React     = require('react'),
PropTypes = require('prop-types');

const Pane = props => (
    <div>{ props.children }</div>
);

Pane.displayName = 'Pane';
Pane.propTypes   = {
    children: PropTypes.any.isRequired,
    label   : PropTypes.string.isRequired
};
Pane.defaultProps = {
    label: 'View'
};

module.exports = Pane;
