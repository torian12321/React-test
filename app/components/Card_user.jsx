var React = require('react');

class Card_user extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={ 'card-user ' + this.props.style }>
                <div className="img" style={{ backgroundImage: 'url(' + this.props.img + ')' }}></div>
                <div className="text">
                    <h3>{ this.props.name }</h3>
                    <span>{ this.props.title }</span>
                </div>
            </div>
        );
    }
}


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
