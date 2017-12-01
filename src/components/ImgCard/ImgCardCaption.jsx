import React      from 'react';
import PropTypes  from 'prop-types';

class ImgCardCaption extends React.PureComponent {
  render() {
    return this.props.text &&
      <figcaption className='imageCard__caption'>{this.props.text}</figcaption>
  }
}

ImgCardCaption.propTypes = {
  text: PropTypes.string
};

module.exports = ImgCardCaption;