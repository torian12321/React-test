var
React      = require('react'),
PropTypes  = require('prop-types'),
FontAwesome= require('react-icons/lib/fa'),
Octicons   = require('react-icons/lib/go'),
Ionicons   = require('react-icons/lib/io'),
Material   = require('react-icons/lib/md'),
Typicons   = require('react-icons/lib/ti'),
camelCase  = require('camelcase');


const SVGIcon = props => {
	let
	SVG = null,
	loader,
	loaders  = {
		'FontAwesome': {prefix: 'fa', loader: FontAwesome},
		'Octicons'   : {prefix: 'go', loader: Octicons},
		'Ionicons'   : {prefix: 'io', loader: Ionicons},
		'Material'   : {prefix: 'md', loader: Material},
		'Typicons'   : {prefix: 'ti', loader: Typicons}
	},
	_capitalizeFirstLetter = function(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	},
	_getName = function(txt){
		let name;
		name = camelCase(`${loaders[props.library].prefix}_${txt}`);
		name = _capitalizeFirstLetter(name);

		return name;
	};


	loader = loaders[props.library];

	if(!loader){
		console.warn(`${props.library} is not a valid fontIcon`);
	}else{
		SVG = loader.loader[_getName(props.name)];

		if(!SVG){
			console.warn(`Icon ${props.name} not found`);
		}
	}

	return SVG ? <SVG /> : null;

};


SVGIcon.propTypes = {
	name   : PropTypes.string.isRequired,
	library: PropTypes.oneOf([
		'FontAwesome',
		'Octicons',
		'Ionicons',
		'Material',
		'Typicons'
	]).isRequired
};

module.exports = SVGIcon;