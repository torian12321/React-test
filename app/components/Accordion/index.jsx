var
React     = require('react'),
PropTypes = require('prop-types');

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen !== this.state.isOpen) {
            this.setState({ isOpen: nextProps.isOpen });
        }
    }
    
    expand(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className={ "accordion " + (this.state.isOpen ? 'active' : '') }>
                <div className="acc-header" onClick= { this.expand.bind(this) }>
                    {this.props.header}
                </div>
                <div className="acc-body">
                    <div className="acc-body-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Accordion.propTypes = {
    header  : PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    isOpen  : PropTypes.bool.isRequired
};
Accordion.defaultProps = {
    header: 'Show Details',
    isOpen: false
};

module.exports = Accordion;
