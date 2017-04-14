var
React     = require('react'),
PropTypes = require('prop-types');

const Rating = props => {
    let
    rate = (props.value > props.of) ? props.of : props.value,
    marks= [];

    for (let i=0; i < props.of; i++) {
        marks.push(
            <li
                key      = {i}
                className= {(i+1) > rate ? 'o' : null}
            />
        );
    }

    return(
        <ul className={ 'rating ' + props.className }>
            { marks }
        </ul>
    );
};


Rating.propTypes = {
    value: PropTypes.number.isRequired,
    of   : PropTypes.number.isRequired,
    style: PropTypes.string                 // info | success | danger | warning
};
Rating.defaultProps = {
    value: 0,
    of   : 5
};

module.exports = Rating;
