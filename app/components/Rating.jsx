var
React     = require('react'),
PropTypes = require('prop-types');

const Rating = props => {
    var
    highlights= (props.children > props.of) ? props.of : props.children,
    marks     = [];
    for (var i=0; i < props.of; i++) {
        if((i+1) > highlights){
            marks.push(<li className="o"></li>);
        }else{
            marks.push(<li></li>);
        }
    }

    return(
        <ul className={ 'rating ' + props.style }>
            { marks }
        </ul>
    );
};


Rating.propTypes = {
    children: PropTypes.number.isRequired,
    of      : PropTypes.number.isRequired,
    style   : PropTypes.string.isRequired
};
Rating.defaultProps = {
    children: 0,
    style   : '',       // info | success | danger | warning
    of      : 5
};

module.exports = Rating;
