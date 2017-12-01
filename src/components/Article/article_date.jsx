import React      from 'react';
import PropTypes  from 'prop-types';
import Icon       from '../Icon';

class ArticleDate extends React.PureComponent {
  render() {
    return this.props.val &&
      <span className="article__info__date">
        <Icon className="icon-open" name="calendar" />
        {this.props.val}
      </span>
  }
}

ArticleDate.propTypes = {
  val : PropTypes.string,
};

module.exports = ArticleDate;
