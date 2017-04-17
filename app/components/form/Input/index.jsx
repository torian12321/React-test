var
React        = require('react'),
PropTypes    = require('prop-types'),
InputNumber  = require('./Input_number'),
InputPassword= require('./Input_password'),
InputText    = require('./Input_text');

const Input = props => {
    switch(props.type) {
        case 'num':
        case 'number':
        case 'numeric':
            return <InputNumber {...props} />
            break;
        case 'password':
        case 'key':
            return <InputPassword {...props} />
            break;
        case 'text':
        default:
            return <InputText {...props} />
    }
};


Input.propTypes = {
    type: PropTypes.string.isRequired
};
Input.defaultProps = {
    type: 'text'
};

module.exports = Input;
