var
React     = require('react'),
PropTypes = require('prop-types');

const Panel = props => (
    <div className={ 'panel ' + this.props.style }>
        { this.props.children }
    </div>
);


Panel.propTypes = {
    children: PropTypes.any.isRequired,
    style   : PropTypes.string.isRequired
};
Panel.defaultProps = {
    style: ''        // info | success | danger | warning
};

module.exports = Panel;
