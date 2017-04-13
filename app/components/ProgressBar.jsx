var
React     = require('react'),
PropTypes = require('prop-types');

const ProgressBar = (props) =>(
    <div className={ 'progressBar ' + props.style }>
        <div className="bar" style={{ width: props.val + '%' }}>
            { props.children }
            { props.label ? <label>{ props.label }</label> : null }
        </div>
    </div>
);


ProgressBar.propTypes = {
    children: PropTypes.string,
    label   : PropTypes.string,
    val     : PropTypes.number.isRequired,
    style   : PropTypes.string.isRequired
};
ProgressBar.defaultProps = {
    val  : 50,
    style : ''      // underline | left | right | bordered
                    // blue | red | green
};

module.exports = ProgressBar;
