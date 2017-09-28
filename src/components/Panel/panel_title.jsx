import React      from 'react';
import PropTypes  from 'prop-types';

class PanelTitle extends React.PureComponent {
  render(){
    return this.props.text ? (
      <div className='panel-title'>
        <span>{this.props.text}</span>
      </div>
    ) : null
  }
}

PanelTitle.propTypes = {
  text: PropTypes.string
};

module.exports = PanelTitle;
