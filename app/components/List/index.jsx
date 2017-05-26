var
React     = require('react'),
PropTypes = require('prop-types'),
ListItem  = require('./list_item'),
classNames= require('classnames');

function List(props) {
  const ComponentToRender = props.component;
  let content = (<div>hello</div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return <ul>{content}</ul>;
}

List.propTypes = {
  component: React.PropTypes.func,
  items    : React.PropTypes.array,
};

List.defaultProps = {
  component: ListItem,
};

module.exports = List;