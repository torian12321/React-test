import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class MenuButton extends React.PureComponent {
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

MenuButton.propTypes = {
  isOpen : PropTypes.bool.isRequired,
  onClick: PropTypes.func
};
MenuButton.defaultProps = {
  isOpen: false
};

module.exports = MenuButton;