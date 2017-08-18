import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_style';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen    : this.props.isOpen,
            body_style: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen !== this.state.isOpen) {
            this.setState({isOpen: nextProps.isOpen});
        }
    }
    
    expand(){
        let accContent_h = this.accContent.clientHeight;

        this.setState({
            isOpen    : !this.state.isOpen,
            body_style: {
                maxHeight: !this.state.isOpen ? accContent_h : 0
            }
        });
    }
    render() {
        return (
            <div className={classNames('accordion', {'active': this.state.isOpen})}>
                <div className="acc-header" onClick= {this.expand.bind(this)}>
                    {this.props.title}
                </div>
                <div className="acc-body" style={this.state.body_style}>
                    <div className="acc-body-content" ref={(c) => { this.accContent = c; }}>
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
