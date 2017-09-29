import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import styles     from './_style';
import Icon       from '../Icon';

class Rating extends React.PureComponent {
  render(){
    let
    rate  = this.props.val > this.props.of ? this.props.of : this.props.val,
    marks = [];

    for(let i=0, m=this.props.of; i < m; i++){
      marks.push(
        <Icon
          key      = {i}
          name     = {this.props.icon}
          color    = {(i+1) > rate ? null : this.props.color}
          className= {(i+1) > rate ? 'o'  : null}
        />
      );
    }

    return <div className={classNames('rating', this.props.className)}>{marks}</div>;
  }
};

Rating.propTypes = {
  /** If val>of, then val=of. */
  val  : PropTypes.number,
  of   : PropTypes.number,
  color: PropTypes.string,
  icon : PropTypes.oneOf(['star', 'chat', 'cog', 'heart', 'dollar'])
};
Rating.defaultProps = {
  val : 0,
  of  : 5,
  icon: 'star'
};

module.exports = Rating;
