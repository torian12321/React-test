import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import Bar        from './bar';
import Circle     from './circular';

class Progress extends React.PureComponent {
  render(){
    let conf = {
        val      : this.props.val,
        className: classNames(
          'pb',
          `pb-${this.props.type}`,
          this.props.state,
          this.props.size,
          this.props.className
        )
    };

    if(this.props.type === 'circular'){
      return <Circle {...conf} />;
    }else{
      return <Bar {...conf} />;
    }
  }
}


Progress.propTypes = {
  type : PropTypes.oneOf(['bar', 'circular']),
  val  : PropTypes.number,
  label: PropTypes.string,    
  size : PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  state: PropTypes.oneOf(['main', 'sec', 'info', 'success', 'danger', 'warning'])
};
Progress.defaultProps = {
  type: 'bar',
  val : 50
};

module.exports = Progress;