import React      from 'react';
import PropTypes  from 'prop-types';
import uniqid     from 'uniqid';
import classNames from 'classnames';
import Icon       from '../../Icon';
import './_style';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text  : this.props.text,
      filled: false
  };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(files) {
    const fl = files.length;

    this.setState({
      filled: fl !== 0,
      text  : fl === 1 ?
        `File ${files[0].name} selected` :
        `${fl} files selected`
    });

    this.props.onChange(files);
  }

  render() {
    const props = this.props;
    const id    = props.id || uniqid('add_');

    return (
      <div className={classNames(
        'add',
        {'add-filled': this.state.filled},
        props.className,
      )}>
        <input 
          id      = {id}
          name    = {id}
          type    = "file"
          accept  = {props.accept}
          multiple= {props.multiple}
          disabled= {props.disabled}
          onChange= {(e) => this.handleChange(e.target.files)}
        />
        <label htmlFor={id}>
          <div className='add-icon'><Icon name="plus" /></div>
          <span>{this.state.text}</span>
        </label>
      </div>
    )
  };
};


Add.propTypes = {
  id       : PropTypes.string,
  className: PropTypes.string,
  disabled : PropTypes.bool,
  text     : PropTypes.string,
  accept   : PropTypes.string,
  multiple : PropTypes.bool,
  onChange : PropTypes.func,
};
Add.defaultProps = {
  disabled: false,
  text    : 'Add',
  multiple: false,
  onChange: () => null,
};

module.exports = Add;
