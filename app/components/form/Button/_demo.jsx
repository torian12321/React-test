import React from 'react'
import Demo, {props as P} from 'react-demo'
import Button from './index'


module.exports = () => (
  <div>
    <Demo target={Button} />
    <Demo
      target={Button}
      props ={{
        children: P.string('Colors'),
        large   : P.bool(),
        flat    : P.bool(true),
        disabled: P.bool(false),
        //onClick : P.callback.log(),
      }}
    />
    <Demo
      target={Button}
      props ={{
        children: P.string('Colors'),
        disabled: P.bool(false),
        color: P.choices({
          main : 'main',
          sec  : 'sec',
          green: 'greenn',
          blue : 'blue',
          white: 'white',
          grey : 'grey',
          black: 'black'
        }),
        flat    : P.bool(true),
        disabled: P.bool(false)
      }}
    />
    <Demo
      target={Button}
      props ={{
        children: P.string('Status'),
        type  : P.choices({
          success: 'success',
          danger : 'danger',
          warning: 'warning'
        }),
        flat    : P.bool(true),
        disabled: P.bool(false)
      }}
    />
  </div>
);