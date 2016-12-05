var React = require('react');

class Quote extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="quote">
                { this.props.children }
                <Quote_author author={ this.props.author }/>
            </div>
        );
    }
}
class Quote_author extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.author){
            return(
                <span className="author">
                    { this.props.author }
                </span>
            );
        }
        return null;
    }
}

Quote.propTypes = {
    children: React.PropTypes.string.isRequired,
    author  : React.PropTypes.string
};
Quote_author.propTypes = {
    author: React.PropTypes.string
};

module.exports = Quote;
