var
React  = require('react'),
Button = require('Button'),
Icon   = require('Icon'),
ProgressBar   = require('ProgressBar'),
Panel   = require('Panel'),
Avatar   = require('Avatar'),
Modal  = require('Modal');

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
        <Avatar />
    </div>
);


module.exports = Main;