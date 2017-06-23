var
React        = require('react'),
PropTypes    = require('prop-types'),
InputNumber  = require('./Input_number'),
InputPassword= require('./Input_password'),
InputText    = require('./Input_text'),
uniqid       = require('uniqid'),
styles       = require('./_style.less');

const Input = props => {
    const id = props.id || uniqid('input_');

    switch(props.type) {
        case 'num':
        case 'number':
        case 'numeric':
            return <div className="styled-input"><InputNumber {...props} /></div>
            break;
        case 'password':
        case 'key':
            return <InputPassword {...props} />
            break;
        case 'text':
        default:
            return <div className="styled-input"><InputText {...props} /></div>
    }
};


Input.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'password'])
};
Input.defaultProps = {
    type: 'text'
};

module.exports = Input;
