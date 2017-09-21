import React    from 'react';
import Button   from 'Button';
import Icon     from 'Icon';
import Progress from 'Progress';
import Message  from 'Message';
import Avatar   from 'Avatar';
import Grid     from 'Grid';

const Main = props =>(
  <Grid>
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
  </Grid>
);


module.exports = Main;