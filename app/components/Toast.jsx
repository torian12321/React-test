var React = require('react');

class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lifeTime : this.props.lifeTime
        };
    }
    countdown() {
        this.setState((prevState) => ({
            lifeTime: prevState.lifeTime - 1
        }));
        if(this.state.lifeTime < 0){
            this.destroy();
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.countdown(), 1000);
    }
    componentWillUnmount() {
        //clearInterval(this.interval);
    }
    destroy(){
        console.log('destroy this');
    }
    render() {
        var
        title = this.props.title      ? <h1>{ this.props.title }</h1> : null;
        close = this.props.allowClose ? <div className="close" onClick={ this.destroy }></div> : null;
        
        return (
            <div className={ 'toast ' + this.props.style }>
                { close }
                { title }
                { this.state.lifeTime }
                { this.props.children }
            </div>
        );
    }
}

Toast.propTypes = {
    children  : React.PropTypes.string.isRequired,
    title     : React.PropTypes.string,
    style     : React.PropTypes.string.isRequired,
    allowClose: React.PropTypes.bool.isRequired,
    lifeTime  : React.PropTypes.number.isRequired
};
Toast.defaultProps = {
    lifeTime  : 2,
    allowClose: true,
    style     : ''  // lg | md
                    // sec | white | black
                    // info | warning | success | danger
};

module.exports = Toast;
