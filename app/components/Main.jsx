var
React      = require('react'),
Nav        = require('Nav'),
GridLayout = require('./GridLayout.jsx');


var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        <GridLayout />
      </div>
    );
  }
});

module.exports = Main;
