var React = require('react');

const TabsLabels = (props) => {
    var click = function(index){
        props.onChange(index);
    }
    return (
        <ul className={ 'tabs-header ' + props.style }>
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
    children: React.PropTypes.any.isRequired,
    selected: React.PropTypes.number.isRequired,
    style   : React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
};
TabsLabels.defaultProps = {
    style: ''
};

module.exports = TabsLabels;
