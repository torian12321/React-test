var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.css');

//import './test.less';
//import './_style.css';


const Panel = props => (
    <div className={'panel ' + classNames(props.type)}>
        {props.children}
    </div>
);


Panel.propTypes = {
    children: PropTypes.any.isRequired,
    type    : PropTypes.oneOf(['info', 'success', 'danger', 'warning'])
};

module.exports = Panel;
