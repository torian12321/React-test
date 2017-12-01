import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class Divider extends React.PureComponent {
  render(){
    return (
      <hr
        data-content={this.props.text}
        className   ={classNames(
          'divider',
          this.props.text && 'divider--texted',
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
