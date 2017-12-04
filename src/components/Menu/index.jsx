import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import MenuButton from './MenuButton';
import './_style.scss';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: this.props.isVisible,
      isOpen   : this.props.isOpen            
    };
  }
  toggleSlide(){
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div className={classNames(
        'menu__wrap',
        !this.state.isVisible && 'menu__wrap--hidden',
        this.state.isOpen     && 'menu__wrap--active'
      )}>
        <MenuButton isOpen={this.state.isOpen} onClick={this.toggleSlide.bind(this)} />
        <div className={classNames('menu', (this.state.isOpen && 'menu--active'))}>
          <div className="menu__content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  children : PropTypes.any,
  isOpen   : PropTypes.bool.isRequired,
  isVisible: PropTypes.bool
};
Menu.defaultProps = {
  isOpen   : false,
  isVisible: true
};

module.exports = Menu;
