var React = require('react');

class Link extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a href={ this.props.href } className={ 'link ' + this.props.style }>
                { this.props.children }
            </a>
        );
    }
}


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
