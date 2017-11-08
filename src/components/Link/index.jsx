import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.less';

class Link extends React.PureComponent {
  render() {
    return (
      <a 
        href     ={this.props.href}
        className={classNames(
          'link',
          {'preview': this.props.preview},
          this.props.className
        )}
      >
        {this.props.children}
      </a>
    )
  }
}

Link.propTypes = {
  children : PropTypes.string.isRequired,
  className: PropTypes.string,
  href     : PropTypes.string,
  preview  : PropTypes.bool
};
Link.defaultProps = {
  href   : '#',
  preview: false
};

module.exports = Link;
