var React = require('react');

const ProgressBar = (props) =>(
    <div className={ 'progressBar ' + props.style }>
        <div className="bar" style={{ width: props.val + '%' }}>
            { props.children }
            { props.label ? <label>{ props.label }</label> : null }
        </div>
    </div>
);


ProgressBar.propTypes = {
    children: React.PropTypes.string,
    label   : React.PropTypes.string,
    val     : React.PropTypes.number.isRequired,
    style   : React.PropTypes.string.isRequired
};
ProgressBar.defaultProps = {
    val  : 50,
    style : ''      // underline | left | right | bordered
                    // blue | red | green
};

module.exports = ProgressBar;
