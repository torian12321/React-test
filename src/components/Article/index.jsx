import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_style';
import Icon from '../Icon';
import ImgDef from '../../img/default/img.png';

const Article = props => (
<article className={classNames('article', {'important': props.important})}>
    <div className="img" style={{backgroundImage: `url(${props.src})`}}/>
    <div className="content">
        <h3>Article #2</h3>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        <div className="info">
            <span className="date">
                <Icon className="icon-open" name="calendar" />
                August 1st, 2017
            </span>
            <a className="more" href="#">
                More
            </a>
        </div>
    </div>
</article>
);


Article.propTypes = {
    src      : PropTypes.string,
    className: PropTypes.string,
    children : PropTypes.string.isRequired,
    title    : PropTypes.string,
    date     : PropTypes.string,
    important: PropTypes.bool
};
Article.defaultProps = {
    //src: 'http://placeimg.com/400/400/nature'
    src      : ImgDef,
    important: false
};

module.exports = Article;
