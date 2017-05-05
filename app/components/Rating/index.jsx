var
React     = require('react'),
PropTypes = require('prop-types');

const Rating = props => {
    let
    rate = (props.val > props.of) ? props.of : props.val,
    marks= [];

    for(let i=0, m=props.of; i < m; i++){
        marks.push(
            <li
                key      = {i}
                className= {(i+1) > rate ? 'o' : null}
            />
        );
    }

    return(
        <ul className='rating'>
            {marks}
        </ul>
    );
};


Rating.propTypes = {
    val: PropTypes.number.isRequired,
    of : PropTypes.number.isRequired
};
Rating.defaultProps = {
    val: 0,
    of : 5
};

module.exports = Rating;
