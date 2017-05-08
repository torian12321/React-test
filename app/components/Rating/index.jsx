var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames');

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
        <ul className={classNames('rating', props.className)}>
            {marks}
        </ul>
    );
};


Rating.propTypes = {
    /** If val>of, then val=of. */
    val      : PropTypes.number,
    of       : PropTypes.number,
    className: PropTypes.oneOf(['info', 'success', 'danger', 'warning'])
};
Rating.defaultProps = {
    val: 0,
    of : 5
};

module.exports = Rating;
