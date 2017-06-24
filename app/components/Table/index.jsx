var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const Table = props => (
    <table className={classNames('table', props.type, props.size)}>
        {props.children}
    </table>
);

Table.propTypes = {
    children : PropTypes.node.isRequired,
    className: PropTypes.string
};

module.exports = Table;
