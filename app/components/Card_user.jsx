var
React     = require('react'),
PropTypes = require('prop-types');

const Card_user = (props) =>(
    <div className={ 'card-user ' + props.style }>
        <div className="img" style={{ backgroundImage: 'url(' + props.img + ')' }}></div>
        <div className="text">
            <h3>{ props.name }</h3>
            <span>{ props.title }</span>
        </div>
    </div>
);

Card_user.propTypes = {
    children: PropTypes.any,
    style   : PropTypes.string.isRequired,
    name    : PropTypes.string.isRequired,
    title   : PropTypes.string,
    img     : PropTypes.string.isRequired,
    
};
Card_user.defaultProps = {
    href : '#',
    style: '',      // polaroid
    img  : 'http://placehold.it/200x200'
};

module.exports = Card_user;
