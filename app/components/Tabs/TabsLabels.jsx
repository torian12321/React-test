var
React     = require('react'),
PropTypes = require('prop-types');

const TabsLabels = (props) => {
    var click = function(index){
        props.onChange(index);
    }
    return (
        <ul className={ 'tabs-header ' + props.className }>
        { props.children.map((child, index) =>
            <label
                className= { props.selected === index ? 'active' : '' }
                key      = { index }
                onClick  = { click.bind(this, index) }>
                { child.props.label }
            </label>
        )}
        </ul>
    )
}


TabsLabels.propTypes = {
    children : PropTypes.any.isRequired,
    selected : PropTypes.number.isRequired,
    className: PropTypes.string,
    onChange : PropTypes.func.isRequired
};
TabsLabels.defaultProps = {
    className: ''
};

module.exports = TabsLabels;
