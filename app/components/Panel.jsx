var React = require('react');

const Panel = props => (
    <div className={ 'panel ' + this.props.style }>
        { this.props.children }
    </div>
);


Panel.propTypes = {
    children: React.PropTypes.any.isRequired,
    style   : React.PropTypes.string.isRequired
};
Panel.defaultProps = {
    style: ''        // info | success | danger | warning
};

module.exports = Panel;
