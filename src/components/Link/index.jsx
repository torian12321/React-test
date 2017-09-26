import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import styles     from './_style';

class Link extends React.PureComponent {
  render(){
    return(
      <a 
        href     ={this.props.href}
        className={classNames(
          'link',
          {'preview': this.props.preview}
        )}
      >
        {this.props.children}
      </a>
    );
  }
};

Link.propTypes = {
  children : PropTypes.string.isRequired,
  href     : PropTypes.string,
  preview  : PropTypes.bool
};
Link.defaultProps = {
  href   : '#',
  preview: false
};

module.exports = Link;
