import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import styles     from './_style';

const Row = props => (
    <div  className={classNames('grid-row', props.className)}>
      {props.children}
    </div>
);

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(require('../Col')),
    ]).isRequired
};

module.exports = Row;
