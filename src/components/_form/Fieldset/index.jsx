import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class Fieldset extends React.Component {
  render() {
    return (
      <fieldset
        disabled ={this.props.disabled}
        className={classNames('fieldset', this.props.className)}>
        {this.props.title &&
          <legend>{this.props.title}</legend>
        }
        {this.props.children}
      </fieldset>
    )
  }
}

Fieldset.propTypes = {
  /** Fieldset content. */
  children: PropTypes.any.isRequired,
  /** Fieldset legend. */
  title   : PropTypes.string,
  disabled: PropTypes.bool
};
Fieldset.defaultProps = {
  disabled: false
};

module.exports = Fieldset;
