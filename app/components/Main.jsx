var
React      = require('react'),
Loader      = require('Loader'),
Link      = require('Link'),
Rating      = require('Rating'),
ProgressBar      = require('ProgressBar'),
Panel      = require('Panel'),
Nav        = require('Nav');


const Main = props =>(
    <div>
        <h2>Main funcition</h2>

        <Link>link test</Link>
        <ProgressBar val={33} />
        <Rating val={2}/>
        <Panel>Panelc content</Panel>
    </div>
);

module.exports = Main;
