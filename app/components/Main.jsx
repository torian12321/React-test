var
React      = require('react'),
Loader      = require('Loader'),
Link      = require('Link'),
Rating      = require('Rating'),
Img      = require('Img'),
ProgressBar      = require('ProgressBar'),
Panel      = require('Panel'),
Nav        = require('Nav');


const Main = props =>(
    <div>
        <h2>Main funcition</h2>

<Img />
<Img alt="testing"/>

        <Link>link test</Link>
        <ProgressBar val={33} />
        <Rating val={2}/>
        <Panel>Panelc content</Panel>
        <Img />
    </div>
);

module.exports = Main;
