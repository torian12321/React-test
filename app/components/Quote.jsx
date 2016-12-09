var React = require('react');

const Quote = props =>(
    <div className="quote">
        { props.children }
        { props.author ? <span className="author">{ props.author }</span> : null }
    </div>
);

Quote.propTypes = {
    children: React.PropTypes.string.isRequired,
    author  : React.PropTypes.string
};

module.exports = Quote;
