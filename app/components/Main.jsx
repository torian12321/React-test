var
React  = require('react'),
Button = require('Button'),
Icon   = require('Icon'),
ProgressBar   = require('ProgressBar'),
Panel   = require('Panel');

const Main = props =>(
    <div>
        Hello world
        <Icon />

        <ProgressBar />
        <ProgressBar type='circular' />
        
        <Panel>
            hello world
        </Panel>
        <Panel>
            hello world
        </Panel>
    </div>
);


module.exports = Main;