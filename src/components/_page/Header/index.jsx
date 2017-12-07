import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class Header extends React.Component {
  render(){
    return(
      <header className={classNames(
        'header',
        this.props.sticky && 'header--sticky',
        this.props.className
      )}>
        <nav className='header__nav'>
          {this.props.children}
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  children : PropTypes.any.isRequired,
  className: PropTypes.string,
  sticky   : PropTypes.bool
};
Header.defaultProps = {
  sticky: true
};

module.exports = Header;
