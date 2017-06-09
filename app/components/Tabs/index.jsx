var
React     = require('react'),
PropTypes = require('prop-types'),
TabsLabels= require('./TabsLabels.jsx'),
TabsBody  = require('./TabsBody.jsx'),
styles    = require('./_style.less');

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected > this.props.children.length ? 0 : this.props.selected
        };
    }
    handleClick(index) {
        this.setState({
            selected: index
        });
    }
    render() {
    return (
        <div className="tabs">
            <TabsLabels
                style   = { this.props.styleTabs }
                selected= { this.state.selected }
                onChange= { this.handleClick.bind(this) }>
                { this.props.children }
            </TabsLabels>
            <TabsBody style={ this.props.styleBody }>
                { this.props.children[this.state.selected] }
            </TabsBody>
        </div>
        );
    }
}



Tabs.propTypes = {
    children : PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ]).isRequired,
    selected : PropTypes.number,
    styleBody: PropTypes.string,
    styleTabs: PropTypes.string
};
Tabs.defaultProps = {
    selected: 0
};

Tabs.Panel       = require('./Pane.jsx');
Tabs.displayName = 'Tabs';
module.exports   = Tabs;
