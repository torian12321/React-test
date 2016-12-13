var React = require('react');

const TabsBody = props => (
    <div className={'tabs-body ' + props.style }>
        <input type="radio" checked="checked"/>
        <div>
            { props.children }
        </div>
    </div>
);


TabsBody.propTypes = {
    children: React.PropTypes.any.isRequired,
    style   : React.PropTypes.string.isRequired
};
TabsBody.defaultProps = {
    style: ''
};

module.exports = TabsBody;
