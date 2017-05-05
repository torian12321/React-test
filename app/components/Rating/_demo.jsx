import React from 'react'
import Demo, {props as P} from 'react-demo'
import Rating from './index'


module.exports = () => (
	<div>
		<Demo target={Rating} />
		<Demo 
			target={Rating}
			props ={{
				val: P.number(3),
				of : P.number(10)
			}}
		/>
	</div>
);