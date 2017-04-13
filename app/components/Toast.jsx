var
React     = require('react'),
PropTypes = require('prop-types');

class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {´
            lifeTime : this.props.lifeTime
        };
    }
    countdown() {
        this.setState((prevState) => ({
            lifeTime: prevState.lifeTime - 1
        }));
        if(this.state.lifeTime < 0){
            this.destroy();
        }´´
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
    children  : PropTypes.string.isRequired,
    title     : PropTypes.string,
    style     : PropTypes.string.isRequired,
    allowClose: PropTypes.bool.isRequired,
    lifeTime  : PropTypes.number.isRequired
};
Toast.defaultProps = {
    lifeTime  : 2,
    allowClose: true,
    style     : ''  // lg | md
                    // sec | white | black
                    // info | warning | success | danger
};

module.exports = Toast;
