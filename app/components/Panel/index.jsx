var
React     = require('react'),
PropTypes = require('prop-types');

const Panel = props => (
    <div className={ 'panel ' + props.className }>
        { props.children }
    </div>
);


Panel.propTypes = {
    children : PropTypes.any.isRequired,
    className: PropTypes.string.isRequired   // info | success | danger | warning
};
Panel.defaultProps = {
    className: ''       
};

module.exports = Panel;
