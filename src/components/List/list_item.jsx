var
React     = require('react'),
PropTypes = require('prop-types');

const ListItem = props => (
    <li>{props.children}aa</li>
);

ListItem.propTypes = {
  item: React.PropTypes.any,
};

module.exports = ListItem;