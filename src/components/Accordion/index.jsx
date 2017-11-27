import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

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
    const accContent_h = this.accContent.clientHeight;

    this.setState({
      isOpen    : !this.state.isOpen,
      body_style: {
        maxHeight: !this.state.isOpen ? accContent_h : 0
      }
    });
  }

  render() {
    return (
      <div className={classNames('accordion', {'accordion--active': this.state.isOpen}, this.props.className)}>
        <div className="accordion__header" onClick= {this.expand.bind(this)}>
          {this.props.title}
        </div>
        <div className="accordion__body" style={this.state.body_style}>
          <div className="accordion__body__content" ref={(c) => { this.accContent = c; }}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Accordion.propTypes = {
  children : PropTypes.any.isRequired,
  className: PropTypes.string,
  title    : PropTypes.string,
  isOpen   : PropTypes.bool
};
Accordion.defaultProps = {
  title : 'Show Details',
  isOpen: false
};

module.exports = Accordion;
