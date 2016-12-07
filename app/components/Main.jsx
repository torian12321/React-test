var
React      = require('react'),
Nav        = require('Nav'),
Toast      = require('Toast'),
GridLayout = require('./GridLayout.jsx');


var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <Toast>abc</Toast>
        <h2>Main Componentt</h2>
      </div>
    );
  }
});

module.exports = Main;
