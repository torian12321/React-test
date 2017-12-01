import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import uniqid     from 'uniqid';
import './_style.scss';

class Switch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    this.setState({
      checked : !this.state.checked
    }, () => this.props.onChange(this.state.checked));
  }
  render() {
    const id = this.props.id || uniqid('switch_');

    return (
      <div className={classNames(
        'form-switch',
        this.state.checked  && 'form-switch--checked',
        this.props.texted   && 'form-switch--texted',
        this.props.disabled && 'form-switch--disabled',
        this.props.className
      )}>
        <input
          id       = {id}
          className= 'form-switch__cb'
          type     = "checkbox"
          checked  = {this.state.checked}
          disabled = {this.props.disabled}
          onChange = {this.handleChange}
        />
        <label htmlFor={id} className= 'form-switch__ball' />
      </div>
    );
  }
}


Switch.propTypes = {
  id       : PropTypes.string,
  className: PropTypes.string,
  checked  : PropTypes.bool,
  texted   : PropTypes.bool,
  disabled : PropTypes.bool,
  onChange : PropTypes.func
};
Switch.defaultProps = {
  checked : false,
  texted  : false,
  disabled: false,
  onChange: () => null
};

module.exports = Switch;