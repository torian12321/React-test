var React = require('react');

const Link = props =>(
    <a href={ props.href } className={ 'link ' + props.style }>
        { props.children }
    </a>
);

Link.propTypes = {
    children: React.PropTypes.string.isRequired,
    href    : React.PropTypes.string.isRequired,
    style   : React.PropTypes.string.isRequired
};
Link.defaultProps = {
    href : '#',
    style: ''       // arrowed | preview
};

module.exports = Link;
