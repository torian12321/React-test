import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import Icon       from '../Icon';
import './_style.less';

class Quote extends React.PureComponent {
  render(){
    return(
      <blockquote className={classNames('quote', this.props.className)} cite={this.props.cite}>
        {this.props.children}
        {this.props.author ? <span className="quote-author">{ this.props.author }</span> : null}
        <Icon className="icon-open"  name="quote" />
        <Icon className="icon-close" name="quote" rotate={180} />
      </blockquote>
    );
  }
}

Quote.propTypes = {
    children : PropTypes.string.isRequired,
    className: PropTypes.string,
    author   : PropTypes.string,
    cite     : PropTypes.string
};

module.exports = Quote;
