import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import styles     from './_style';

const Col = props => (
    <div  className={classNames(
      'col',
      props.xs ? `xs-${props.xs}` : null,
      props.sm ? `sm-${props.sm}` : null,
      props.md ? `md-${props.md}` : null,
      props.lg ? `lg-${props.lg}` : null,

      // Pull
      props.xsPull ? `xs-pull-${props.xsPull}` : null,
      props.smPull ? `sm-pull-${props.smPull}` : null,
      props.mdPull ? `md-pull-${props.mdPull}` : null,
      props.lgPull ? `lg-pull-${props.lgPull}` : null,

      // Push
      props.xsPush ? `xs-push-${props.xsPush}` : null,
      props.smPush ? `sm-push-${props.smPush}` : null,
      props.mdPush ? `md-push-${props.mdPush}` : null,
      props.lgPush ? `lg-push-${props.lgPush}` : null,

      // Offset
      props.xsOffset ? `xs-offset-${props.xsOffset}` : null,
      props.smOffset ? `sm-offset-${props.smOffset}` : null,
      props.mdOffset ? `md-offset-${props.mdOffset}` : null,
      props.lgOffset ? `lg-offset-${props.lgOffset}` : null,
      
      props.className
    )}>
      {props.children}
    </div>
);

const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Col.propTypes = {
  children : PropTypes.any.isRequired,
  className: PropTypes.string,
  xs       : PropTypes.oneOf(sizes),
  sm       : PropTypes.oneOf(sizes),
  md       : PropTypes.oneOf(sizes),
  lg       : PropTypes.oneOf(sizes),

  xsPull  : PropTypes.oneOf(sizes),
  smPull  : PropTypes.oneOf(sizes),
  mdPull  : PropTypes.oneOf(sizes),
  lgPull  : PropTypes.oneOf(sizes),

  xsPush  : PropTypes.oneOf(sizes),
  smPush  : PropTypes.oneOf(sizes),
  mdPush  : PropTypes.oneOf(sizes),
  lgPush  : PropTypes.oneOf(sizes),

  xsOffset: PropTypes.oneOf(sizes),
  smOffset: PropTypes.oneOf(sizes),
  mdOffset: PropTypes.oneOf(sizes),
  lgOffset: PropTypes.oneOf(sizes)
};
Col.defaultProps = {
  xs: 12
};

module.exports = Col;
