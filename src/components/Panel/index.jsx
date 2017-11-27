import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import Title      from './panel_title';
import './_style.scss';

class Panel extends React.Component {
  render() {
    return(
      <div className={classNames(
        'panel',
        this.props.className
      )}>
        <Title text={this.props.title} />
        <div className='panel__body'>{this.props.children}</div>
      </div>
    )
  }
}

Panel.propTypes = {
  children : PropTypes.node.isRequired,
  className: PropTypes.string,
  title    : PropTypes.string
};

module.exports = Panel;
