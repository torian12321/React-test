import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class GithubCorner extends React.PureComponent {
  render() {
    return (
      <a href={this.props.url} className={classNames('github-corner', this.props.className)}>
        <svg width={this.props.size} height={this.props.size} viewBox="0 0 250 250">
          <path d="M0 0l115 115h15l12 27 108 108V0z"/>
          <path className="octo-arm" d="M128.3 109c-14.5-9.3-9.3-19.4-9.3-19.4 3-7 1.5-11 1.5-11-1.3-6.6 3-2.3 3-2.3 3.8 4.6 2 11 2 11-2.6 10.3 5 14.6 9 16" fill="currentColor"/>
          <path d="M115 115s3.7 1.5 4.8.4l14-13.8c3-2.4 6-3.2 8.4-3-8.4-10.6-14.7-24.2 1.6-40.6 4.7-4.6 10.2-6.8 16-7 .5-1.6 3.4-7.4 11.6-11 0 0 4.7 2.5 7.4 16.2 4.3 2.4 8.4 5.6 12 9.2 3.7 3.6 7 7.8 9.3 12.2 14 2.6 16.6 7.3 16.6 7.3-3.6 8-9.4 11-11 11.3-.2 5.8-2.3 11.2-7 16-16.4 16.3-30 10-40.6 1.5 0 3-1 7-5 11l-12 11.4c-1.2 1.2.6 5.4.8 5.3z" fill="currentColor"/>
        </svg>
      </a>
    )
  }
}


GithubCorner.propTypes = {
  url      : PropTypes.string.isRequired,
  className: PropTypes.string,
  size     : PropTypes.number
};
GithubCorner.defaultProps = {
  size: 80
};

module.exports = GithubCorner;
