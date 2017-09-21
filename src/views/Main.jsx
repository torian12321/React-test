import React      from 'react';
import Button     from 'Button';
import Icon       from 'Icon';
import Progress   from 'Progress';
import Message    from 'Message';
import Avatar     from 'Avatar';
import Container  from 'Container';
import Row        from 'Row';

const Main = props =>(
  <Container>
  abc
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
  </Container>
);


module.exports = Main;