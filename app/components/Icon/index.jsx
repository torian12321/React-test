var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
//styles    = require('./styles'),
icons     = require('./icons');



>>>>>>> 03cc9d1255d0c912149ec0d1fd1faf616ed51d8d
const Icon = props => {
  const
  iconPaths = props.name ? icons[props.name] : props.paths,
  styles = {
      width : `${props.width}em`,
      height: props.height ? `${props.height}em` : null,
      fill  : props.color,
      ...props.styles
  };

  return (
    <svg
      viewBox  ={`0 0 ${props.viewBox} ${props.viewBox}`}
      style    ={styles}
      className={classNames(
        'icon2',
        props.className
      )}
    >
      {iconPaths && iconPaths.map((pathProps, i) => <path {...pathProps} key={i} />)}
    </svg>
  )
}

Icon.propTypes = {
  name     : PropTypes.string,
  className: PropTypes.string,
  color    : PropTypes.string,
  rotate   : PropTypes.number,
  viewBox  : PropTypes.number,

  /** Size in ems */
  width: PropTypes.number,

  /** Size in ems */
  height: PropTypes.number,

  /** The paths of a custom icon */
  paths : PropTypes.array,

  /** Aditional Styles */
  styles : PropTypes.object
}

Icon.defaultProps = {
  name   : 'home',
  paths  : [],
  rotate : 0,
  width  : 1,
  viewBox: 32,
}

module.exports = Icon;