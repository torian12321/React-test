import React      from 'react';
import PropTypes  from 'prop-types';

class ListItem extends React.PureComponent {
  render() {
    return <li>{this.props.children}aa</li>
  }
}

ListItem.propTypes = {
  item: PropTypes.any,
};

module.exports = ListItem;