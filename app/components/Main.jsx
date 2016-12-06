var
React      = require('react'),
Nav        = require('Nav'),
Link       = require('Link'),
ProgressBar= require('ProgressBar'),
Rating     = require('Rating'),
GridLayout = require('./GridLayout.jsx');


var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <Rating>{0}</Rating>
        <ProgressBar style='underline'>test</ProgressBar>

        <h2>Main Componentt</h2>
      </div>
    );
  }
});

module.exports = Main;
