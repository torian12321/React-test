import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import ListItem   from './list_item';

class List extends React.PureComponent {
  render() {
    const ComponentToRender = this.props.component;
    let content = (<div>hello</div>);

    // If we have items, render them
    if (this.props.items) {
      content = this.props.items.map((item, index) => (
        <ComponentToRender key={`item-${index}`} item={item} />
      ));
    } else {
      // Otherwise render a single component
      content = (<ComponentToRender />);
    }

    return <ul>{content}</ul>
  }
}

List.propTypes = {
  component: React.PropTypes.func,
  items    : React.PropTypes.array,
};

List.defaultProps = {
  component: ListItem,
};

module.exports = List;