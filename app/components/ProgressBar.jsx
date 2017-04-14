var
React     = require('react'),
PropTypes = require('prop-types');

const ProgressBar = (props) =>(
    <div className={ 'progressBar ' + props.className }>
        <div className="bar" style={{ width: props.val + '%' }}>
            { props.children }
            { props.label ? <label>{ props.label }</label> : null }
        </div>
    </div>
);


ProgressBar.propTypes = {
    children : PropTypes.string,
    label    : PropTypes.string,
    val      : PropTypes.number.isRequired,
    className: PropTypes.string.isRequired
};
ProgressBar.defaultProps = {
    val  : 50,
    className : ''      // underline | left | right | bordered
                    // blue | red | green
};

module.exports = ProgressBar;
