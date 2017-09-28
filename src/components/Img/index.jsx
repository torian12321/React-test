import React      from 'react';
import PropTypes  from 'prop-types';
import ImgDef     from '../../img/default/img.png';

class Img extends React.PureComponent {
  render() {
    const { src, alt, ...other } = this.props;

    return (
      <img
        {...other}
        src ={src}
        alt ={alt}
        role={alt ? null : 'presentation'}
      />
    );
  }
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
Img.defaultProps = {
  src: ImgDef
};

module.exports = Img;
