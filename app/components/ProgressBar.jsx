var React = require('react');

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: this.props.val
        };
    }
    render() {
        var label = this.props.label ? <label>{ this.props.label }</label> : null;
                        
        return (
            <div className={ 'progressBar ' + this.props.style }>
                <div className="bar" style={{ width: this.state.val + '%' }}>
                    { this.props.children }
                    { label }
                </div>
            </div>
        );
    }
}


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
