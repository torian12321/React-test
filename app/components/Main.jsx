var
React  = require('react'),
Button = require('Button'),
Icon   = require('Icon'),
ProgressBar   = require('ProgressBar'),
Message   = require('Message'),
Avatar   = require('Avatar'),
Modal  = require('Modal');

const Main = props =>(
    <div>
        Hello world
        <Icon />
        <ProgressBar />
        <ProgressBar type='circular' />
        
        <Message>
            hello world
        </Message>
        <Message>
            hello world
        </Message>
        <Avatar />
    </div>
);


module.exports = Main;