import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.less';

class Divider extends React.PureComponent {
  render(){
    return (
      <hr
        data-content={this.props.text}
        className   ={classNames(
          'divider',
          {'divider_texted': this.props.text},
          this.props.className
        )}
      />
    );
  }
};

Divider.propTypes = {
  text     : PropTypes.string,
  className: PropTypes.string
};

module.exports = Divider;
