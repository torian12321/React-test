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
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(require('../Col')),
      PropTypes.arrayOf(require('../Row')),
    ]).isRequired
};

module.exports = Grid;
