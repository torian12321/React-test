var
React     = require('react'),
PropTypes = require('prop-types'),
styles    = require('./_style.less'),
Icon      = require('Icon');

const Quote = props =>(
    <div className="quote">
        {props.children}
        {props.author ? <span className="author">{ props.author }</span> : null}
        <Icon className="icon-open"  name="quote" />
        <Icon className="icon-close" name="quote" rotate={180} />
    </div>
);

Quote.propTypes = {
    children: PropTypes.string.isRequired,
    author  : PropTypes.string
};

module.exports = Quote;
