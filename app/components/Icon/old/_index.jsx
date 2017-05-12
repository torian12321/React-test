dvar
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
SVG       = require('./getSVG');


const Icon = props => (
	<i className={classNames('font-icon', props.className)}>
		<SVG name={props.name} library={props.library} />
	</i>
);


Icon.propTypes = {
	className: PropTypes.string,
	name     : PropTypes.string,
	library  : PropTypes.oneOf([
		'FontAwesome',
		'Octicons',
		'Ionicons',
		'Material',
		'Typicons'
	]),
};
Icon.defaultProps = {
    name   : 'home',
    library: 'FontAwesome'
};

module.exports = Icon;