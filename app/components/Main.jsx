var
React  = require('react'),
Button = require('Button'),
Icon   = require('Icon'),
Progress   = require('Progress'),
Message   = require('Message'),
Avatar   = require('Avatar'),
Modal  = require('Modal');

const Main = props =>(
    <div>
        Hello world
        <Icon />
        <Progress />
        <Progress type='circular' />
        
        <Message>
            hello world
        </Message>
        <Message>
            hello world
        </Message>
        <Avatar />


        <Modal>AA</Modal>
    </div>
);


module.exports = Main;