import React      from 'react';
import PropTypes  from 'prop-types';

class ArticleMore extends React.PureComponent {
  render() {
    return this.props.url ? (
      <a className="more" href="#">More</a>
    ) : null
  }
}

ArticleMore.propTypes = {
  url: PropTypes.string
};

module.exports = ArticleMore;
