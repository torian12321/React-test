import React from 'react'
import Demo, {props as P} from 'react-demo'
import Panel from './index'


module.exports = () => (
	<div>
		<Demo
			target={Panel}
				props ={{
				children: P.string('Content')
			}}
		/>
		<Demo
			target={Panel}
			props ={{
				children: P.string('Any content'),
				type    : P.choices({
					info   : 'info',
					success: 'success',
					warning: 'warning',
					danger : 'danger'
				})
			}}
		/>
	</div>
);