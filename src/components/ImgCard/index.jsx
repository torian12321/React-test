import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import Img        from '../Img';
import Caption    from './ImgCardCaption';
import './_style.scss';

class ImgCard extends React.PureComponent {
	render() {
    const captionString = this.props.caption || this.props.alt || null;

		return(
      <figure className={classNames('imageCard', this.props.className)}>
        <Img className='imageCard__img' src={this.props.src} alt={this.props.alt} />
        <Caption text={captionString} />
      </figure>
		);
	}
}

ImgCard.propTypes = {
  className: PropTypes.string,
  src      : PropTypes.string.isRequired,
  alt      : PropTypes.string,
  caption  : PropTypes.string
};

module.exports = ImgCard;