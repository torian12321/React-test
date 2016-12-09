var React = require('react');

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
    children: React.PropTypes.any,
    style   : React.PropTypes.string.isRequired,
    name    : React.PropTypes.string.isRequired,
    title   : React.PropTypes.string,
    img     : React.PropTypes.string.isRequired,
    
};
Card_user.defaultProps = {
    href : '#',
    style: '',      // polaroid
    img  : 'http://placehold.it/200x200'
};

module.exports = Card_user;
