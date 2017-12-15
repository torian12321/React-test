import React          from 'react';
import PropTypes      from 'prop-types';
import classNames     from 'classnames';
import SideMenuButton from './SideMenuButton';
import './_style.scss';

class SideMenu extends React.Component {
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
        !this.state.isVisible && 'sidemenu__wrap--hidden',
        this.state.isOpen     && 'menu__wrap--active'
      )}>
        {this.props.btnShow &&
          <SideMenuButton isOpen={this.state.isOpen} onClick={this.toggleSlide.bind(this)} />
        }
        <div className={classNames('menu', (this.state.isOpen && 'menu--active'))}>
          <div className="menu__content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

SideMenu.propTypes = {
  children : PropTypes.any,
  isOpen   : PropTypes.bool,
  isVisible: PropTypes.bool,
  btnShow  : PropTypes.bool
};
SideMenu.defaultProps = {
  isOpen   : false,
  isVisible: true,
  btnShow  : true
};

module.exports = SideMenu;
