import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style';

class AccordionGroup extends React.Component {
  render() {
    return (
      <div className={classNames('accordion-group', this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}

AccordionGroup.propTypes = {
  children : PropTypes.any,
  className: PropTypes.string
};

module.exports = AccordionGroup;
