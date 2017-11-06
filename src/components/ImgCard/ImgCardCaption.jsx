import React      from 'react';
import PropTypes  from 'prop-types';

class ImgCardCaption extends React.PureComponent {
  render() {
    return this.props.text ? (
      <figcaption>{this.props.text}</figcaption>
    ) : null
  }
}

ImgCardCaption.propTypes = {
  text: PropTypes.string
};

module.exports = ImgCardCaption;