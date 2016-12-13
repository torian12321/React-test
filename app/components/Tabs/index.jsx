var
React       = require('react'),
TabsLabels  = require('./TabsLabels.jsx'),
TabsBody    = require('./TabsBody.jsx');

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
    children : React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.element
    ]).isRequired,
    selected : React.PropTypes.number.isRequired,
    styleBody: React.PropTypes.string,
    styleTabs: React.PropTypes.string
};
Tabs.defaultProps = {
    selected: 0
};

Tabs.Panel       = require('./Pane.jsx');
Tabs.displayName = 'Tabs';
module.exports   = Tabs;
