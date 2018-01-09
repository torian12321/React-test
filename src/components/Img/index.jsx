import React      from 'react';
import PropTypes  from 'prop-types';
import ImgDef     from '../../img/default/img.png';

class Img extends React.PureComponent {
  render() {
    const { src, alt, presentational, ...other } = this.props;

    return (
      <img
        {...other}
        src ={src}
        alt ={alt}
        role={presentational ? 'presentation' : null}
      />
    )
  }
}

Img.propTypes = {
  src           : PropTypes.string.isRequired,
  presentational: PropTypes.bool,
  alt           : function(props, propName, componentName) {
    let
    errorMessage = null,
    alt          = props[propName];

    if (!alt && !props.presentational) {
      errorMessage = 'Missing `'+ propName +'` for image ' + props.src;
    } else if ((alt && !(typeof alt === 'string' || alt instanceof String))) {
      errorMessage = 'Invalid prop `'+ propName +'` of type `'+ (typeof alt) +'` supplied to `'+ componentName +'`, expected `string`.';
    }

    return errorMessage && new Error(errorMessage);
  }
};
Img.defaultProps = {
  src           : ImgDef,
  presentational: false
};

module.exports = Img;
