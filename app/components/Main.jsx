var
React      = require('react'),
Nav        = require('Nav'),
Toast      = require('Toast'),
GridLayout = require('./GridLayout.jsx');


class Main extends React.Component {
    render(){
        return (
            <div>
                <Nav/>
                <Toast>ABC</Toast>
                <h2>Main Componentt</h2>
            </div>
        );
    }
}

module.exports = Main;
