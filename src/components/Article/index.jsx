import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import styles     from './_style';
import Icon       from '../Icon';
import ImgDef     from '../../img/default/img.png';

import Date       from './article_date';
import More       from './article_more';

class Article extends React.PureComponent {
  render(){
    return(
      <article className={classNames('article', {'important': this.props.important})}>
        <div className="img" style={{backgroundImage: `url(${this.props.src})`}} />
        <div className="content">
          { this.props.title ? 
            <h3>{this.props.title}</h3> :
            null
          }
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
          <div className="info">
            <Date val='August 1st, 2017' />
            <More url="#" />
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
