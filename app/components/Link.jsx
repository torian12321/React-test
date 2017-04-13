var
React     = require('react'),
PropTypes = require('prop-types');

const Link = props =>(
    <a href={ props.href } className={ 'link ' + props.style }>
        { props.children }
    </a>
);

Link.propTypes = {
    children: PropTypes.string.isRequired,
    href    : PropTypes.string.isRequired,
    style   : PropTypes.string.isRequired
};
Link.defaultProps = {
    href : '#',
    style: ''       // arrowed | preview
};

module.exports = Link;
