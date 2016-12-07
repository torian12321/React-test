var React = require('react');

class Toast extends React.Component {
    constructor(props) {
        super(props);
    }
    close(){
        console.log('destroy this');
    }
    render() {
        var
        title = this.props.title      ? <h1>{ this.props.title }</h1> : null;
        close = this.props.allowClose ? <div className="close" onClick={ this.close }></div> : null;
        
        return (
            <div className={ 'toast ' + this.props.style }>
                { close }
                { title }
                { this.props.children }
            </div>
        );
    }
}

Toast.propTypes = {
    children  : React.PropTypes.string.isRequired,
    title     : React.PropTypes.string,
    style     : React.PropTypes.string.isRequired,
    allowClose: React.PropTypes.bool.isRequired
};
Toast.defaultProps = {
    allowClose: true,
    style     : ''  // lg | md
                    // sec | white | black
                    // info | warning | success | danger
};

module.exports = Toast;
