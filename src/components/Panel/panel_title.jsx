import React      from 'react';
import PropTypes  from 'prop-types';

class PanelTitle extends React.PureComponent {
  render(){
    return (
      <div className='panel__title'>
        <span>{this.props.text}</span>
      </div>
    )
  }
}

PanelTitle.propTypes = {
  text: PropTypes.string
};

module.exports = PanelTitle;
