var React = require('react');

const Pane = props => (
    <div>{ props.children }</div>
);

Pane.displayName = 'Pane';
Pane.propTypes   = {
    children: React.PropTypes.any.isRequired,
    label   : React.PropTypes.string.isRequired
};
Pane.defaultProps = {
    label: 'View'
};

module.exports = Pane;
