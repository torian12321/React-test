var
React     = require('react'),
PropTypes = require('prop-types');

const Quote = props =>(
    <div className="quote">
        {props.children}
        {props.author ? <span className="author">{ props.author }</span> : null}
    </div>
);

Quote.propTypes = {
    children: PropTypes.string.isRequired,
    author  : PropTypes.string
};

module.exports = Quote;
