import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import Icon       from '../Icon';
import ImgDef     from '../../img/default/img.png';

import Date       from './article_date';
import './_style.scss';

class Article extends React.PureComponent {
  render() {
    return (
      <article className={classNames('article', {'article--important': this.props.important})}>
        <div className="article__img" style={{backgroundImage: `url(${this.props.src})`}} />
        <div className="article__content">
          { this.props.title &&
            <h3>{this.props.title}</h3>
          }
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
          <div className="article__info">
            <Date val='August 1st, 2017' />
            { this.props.src &&
              <a className="article__info__more" href="this.props.src">More</a>
            }
          </div>
        </div>
      </article>
    )
  }
}


Article.propTypes = {
  children : PropTypes.string.isRequired,
  src      : PropTypes.string,
  className: PropTypes.string,  
  title    : PropTypes.string,
  date     : PropTypes.string,
  important: PropTypes.bool
};
Article.defaultProps = {
  src      : ImgDef,
  important: false
};

module.exports = Article;
