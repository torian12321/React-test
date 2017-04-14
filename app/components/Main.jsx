var
React      = require('react'),
Loader      = require('Loader'),
Link      = require('Link'),
Rating      = require('Rating'),
ProgressBar      = require('ProgressBar'),
Panel      = require('Panel'),
Card_user      = require('Card_user'),
Nav        = require('Nav');


const Main = props =>(
    <div>
        <h2>Main funcition 3337774</h2>

        <Card_user />
        <Link>link test</Link>
        <ProgressBar val={33} />
        <Rating val={2}/>
        <Panel>Panelc content</Panel>
    </div>
);

module.exports = Main;
