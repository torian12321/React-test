var React = require('react');

class Rating extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.children > this.props.of) return null;

        var marks = [];
        for (var i=0; i < this.props.of; i++) {
            if((i+1) > this.props.children){
                marks.push(<li className="o"></li>);
            }else{
                marks.push(<li></li>);
            }
        }
        return (
            <ul className={ 'rating ' + this.props.style }>
                { marks }
            </ul>
        );
    }
}


Rating.propTypes = {
    children: React.PropTypes.number.isRequired,
    of      : React.PropTypes.number.isRequired,
    style   : React.PropTypes.string.isRequired
};
Rating.defaultProps = {
    children: 0,
    style   : '',       // info | success | danger | warning
    of      : 5
};

module.exports = Rating;
