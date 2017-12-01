import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import ImgDef     from '../../img/default/user.png';
import './_style.scss';

class Avatar extends React.PureComponent {
  render() {
    return (
      <div 
        style    ={{backgroundImage: `url(${this.props.src})`}}
        className={classNames(
          'avatar',
          this.props.size  && `avatar--${this.props.size}`,
          this.props.state && `avatar--${this.props.state}`,
          this.props.className
        )}
      />
    )
  }
}

Avatar.propTypes = {
  src      : PropTypes.string.isRequired,
  size     : PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  state    : PropTypes.oneOf(['main', 'sec', 'success', 'danger', 'warning', 'disable']),
  className: PropTypes.string
};
Avatar.defaultProps = {
  src: ImgDef
};

module.exports = Avatar;
