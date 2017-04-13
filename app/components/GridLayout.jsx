var
React           = require('react'),
ReactGridLayout = require('react-grid-layout'),
PropTypes       = require('prop-types');

var GridLayout = React.createClass({
  render: function() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key={'a'}></div>
        <div key={'b'}></div>
        <div key={'c'}></div>
      </ReactGridLayout>
    )
  }
});


module.exports = GridLayout;
