var
React      = require('react'),
Nav        = require('Nav'),
GridLayout = require('./GridLayout.jsx');


class Main extends React.Component {
    render(){
        return (
            <div>
                <Nav/>
                <h2>Main Componentt</h2>
            </div>
        );
    }
}

module.exports = Main;
