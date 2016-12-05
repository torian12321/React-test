var React = require('react');

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen    : this.props.isOpen,
            wrappClass: this.props.isOpen ? 'accordion active' : 'accordion'
        };
    }
    expand(){
        this.setState({
            isOpen    : !this.state.isOpen,
            wrappClass: !this.state.isOpen ? 'accordion active' : 'accordion'
        });
    }
    render() {
        return (
            <div className={this.state.wrappClass}>
                <div className="acc-header" onClick= { this.expand.bind(this) }>
                    { this.props.header }
                </div>
                <div className="acc-body">
                    <div className="acc-body-content">
                        { this.props.children }
                    </div>
                </div>
            </div>
        );
    }
}

Accordion.propTypes = {
    header  : React.PropTypes.string.isRequired,
    children: React.PropTypes.any.isRequired,
    isOpen  : React.PropTypes.bool.isRequired
};
Accordion.defaultProps = {
    header: 'Show Details',
    isOpen: false
};

module.exports = Accordion;
