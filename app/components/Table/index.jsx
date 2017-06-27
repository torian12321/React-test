var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const Table = props => (
    <table className={classNames(
        'table',
        props.className,
        {"striped"  : props.striped},
        {"bordered" : props.bordered}
    )}>
        {props.children}
    </table>
);

Table.propTypes = {
    children : PropTypes.node.isRequired,
    className: PropTypes.string,
    striped  : PropTypes.bool,
    bordered : PropTypes.bool
};
Table.defaultProps = {
    striped : true,
    bordered: false
};

module.exports = Table;
