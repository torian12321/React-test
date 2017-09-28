import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import styles     from './_style';
import Icon       from '../../Icon';

class IconBtnClose extends React.PureComponent {
  render() {
    return (
      <div className={classNames('icon-btn', this.props.className)} onClick={this.props.onClick}>
        <Icon name='close'/>
      </div>  
    );
  }
}

IconBtnClose.propTypes = {
  className: PropTypes.string,
  onClick  : PropTypes.func
};
IconBtnClose.defaultProps = {
  onClick: () => null
};

module.exports = IconBtnClose;
