var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames');

const Link = props =>(
    <a href={props.href} className={classNames('link', props.className)}>
        {props.children}
    </a>
);

Link.propTypes = {
    children : PropTypes.string.isRequired,
    href     : PropTypes.string.isRequired,
    className: PropTypes.oneOf(['arrowed', 'preview'])
};
Link.defaultProps = {
    href: '#'
};

module.exports = Link;
