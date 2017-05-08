var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames');

const Link = props =>(
    <a href={props.href} className={classNames('link', props.arrowed, props.preview)}>
        {props.children}
    </a>
);

Link.propTypes = {
    children : PropTypes.string.isRequired,
    href     : PropTypes.string,
    arrowed  : PropTypes.bool,
    preview  : PropTypes.bool
};
Link.defaultProps = {
    href   : '#',
    arrowed: false,
    preview: false
};

module.exports = Link;
