import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class SideMenuButton extends React.PureComponent {
  render() {
    return (
      <div
        onClick  ={this.props.onClick}
        className={classNames('menuButton', (this.props.isOpen && 'menuButton--active'))}
      >
        <div />
        <div />
        <div />
      </div>
    )
  }
};

SideMenuButton.propTypes = {
  isOpen : PropTypes.bool.isRequired,
  onClick: PropTypes.func
};
SideMenuButton.defaultProps = {
  isOpen: false
};

module.exports = SideMenuButton;