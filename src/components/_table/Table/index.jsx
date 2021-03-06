import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './_style.scss';

class Table extends React.Component {
  render() {
    return(
      <table className={classNames(
        'table',
        {'table--striped'  : this.props.striped},
        {'table--bordered' : this.props.bordered},
        this.props.className,
      )}>
        {this.props.children}
      </table>
    )
  }
}

Table.propTypes = {
  children : PropTypes.node.isRequired,
  className: PropTypes.string,
  striped  : PropTypes.bool,
  bordered : PropTypes.bool
};
Table.defaultProps = {
  striped : true,
  bordered: false
};

module.exports = Table;
