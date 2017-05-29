var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen !== this.state.isOpen) {
            this.setState({isOpen: nextProps.isOpen});
        }
    }
    
    expand(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className={classNames('accordion', {'active': this.state.isOpen})}>
                <div className="acc-header" onClick= {this.expand.bind(this)}>
                    {this.props.title}
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
    /** Accordion content. */
    children: PropTypes.any.isRequired,
    title   : PropTypes.string,
    isOpen  : PropTypes.bool
};
Accordion.defaultProps = {
    title : 'Show Details',
    isOpen: false
};

module.exports = Accordion;
