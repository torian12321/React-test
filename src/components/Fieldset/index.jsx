var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const Fieldset = props => (
    <fieldset disabled={props.disabled} className={classNames('fieldset', props.className)}>
        {props.title ?
            <legend>{props.title}</legend> : 
            null
        }
        {props.children}
    </fieldset>
);

Fieldset.propTypes = {
    /** Fieldset content. */
    children: PropTypes.any.isRequired,
    /** Fieldset legend. */
    title   : PropTypes.string,
    disabled: PropTypes.bool
};
Fieldset.defaultProps = {
    disabled: false
};

module.exports = Fieldset;
