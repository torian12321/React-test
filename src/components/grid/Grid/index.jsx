import React  		from 'react';
import PropTypes 	from 'prop-types';
import classNames from 'classnames';
import styles     from './_style';

const Grid = props => (
    <div  className={classNames('grid', props.className)}>
        {props.children}
    </div>
);

Grid.propTypes = {
    children : PropTypes.any.isRequired,
    className: PropTypes.string
};

module.exports = Grid;
