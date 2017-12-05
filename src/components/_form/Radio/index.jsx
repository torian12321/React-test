import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqid from 'uniqid';
import './_style.scss';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.state.checked) {
      this.setState({ checked: nextProps.checked });
    }
  }
  handleChange(){
    this.setState({
			checked : !this.state.checked
		}, () => this.props.onChange(this.state.checked));
  }

  render() {
    const
    id   = this.props.id   || uniqid('rb_'),
    name = this.props.name || id;

    return (
      // <label
      //   htmlFor  = {id}
      //   className= {classNames(
      //     'form-rb',
      //     this.state.checked  && 'form-rb--checked',
      //     this.props.disabled && 'form-rb--disabled',
      //     this.props.className
      //   )}
      // >
      //   <input
      //     id      = {id}
      //     name    = {name}
      //     type    = "radio"
      //     checked = {this.state.checked}
      //     disabled= {this.props.disabled}
      //     //onChange= {this.handleChange}
      //   />
      //   <label className='form-rb__text radio'>
      //     {this.props.label}
      //   </label>
      // </label>

      <label htmlFor={id} className='form-rb'>
        <input
          type     = 'radio'
          id       = {id}
          name     = {name}
          checked  = {this.state.checked}
          disabled = {this.props.disabled}
        />
        <label htmlFor={id} className='form-rb__text'>
          {this.props.label}
        </label>
      </label>
    );
  }
}


const Radio = props => (
  <div className='radioGroup'>
    <RadioButton id='test_1' name='radio-group' label='Apple' />
    <RadioButton id='test_2' name='radio-group' label='Peach' />
    <RadioButton id='test_3' name='radio-group' label='Kiwi' checked/>
    <RadioButton id='test_4' name='radio-group' label='Pineapple' />
    <RadioButton id='test_5' name='radio-group' label='Strawberry' disabled />
  </div>
);

module.exports = Radio;