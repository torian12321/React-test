var
React     = require('react'),
PropTypes = require('prop-types');

const Link = props =>(
    <a href={ props.href } className={ 'link ' + props.className }>
        {props.children}
    </a>
);

Link.propTypes = {
    children : PropTypes.string.isRequired,
    href     : PropTypes.string.isRequired,
    className: PropTypes.string             // arrowed | preview
};
Link.defaultProps = {
    href     : '#',
    className: ''
};

module.exports = Link;
