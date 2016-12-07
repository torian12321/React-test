var
React      = require('react'),
Nav        = require('Nav'),
GridLayout = require('./GridLayout.jsx');


var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h2>Main Componentt</h2>
      </div>
    );
  }
});

module.exports = Main;
