var
React     = require('react'),
PropTypes = require('prop-types');

const TabsBody = props => (
    <div className={'tabs-body ' + props.style }>
        <input type="radio" checked="checked"/>
        <div>
            { props.children }
        </div>
    </div>
);


TabsBody.propTypes = {
    children: PropTypes.any.isRequired,
    style   : PropTypes.string.isRequired
};
TabsBody.defaultProps = {
    style: ''
};

module.exports = TabsBody;
