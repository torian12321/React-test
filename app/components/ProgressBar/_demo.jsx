import React from 'react'
import Demo, {props as P} from 'react-demo'
import ProgressBar from './index'


module.exports = () => (
	<div>
		<Demo target={ProgressBar} />
		<Demo
			target={ProgressBar}
			props ={{
				children: P.string('Any content'),
				color   : P.choices({
					main   : 'main',
					sec    : 'sec',
					info   : 'info',
					success: 'success',
					danger : 'danger',
					warning: 'warning'
				}),
				alignment: P.choices({
					left : 'left',
					right: 'right'
				})
			}}
		/>
		<Demo
			target={ProgressBar}
			props ={{
				children: P.string('Any content'),
				style   : P.choices({
					underline: 'underline',
					bordered : 'bordered'
				}),
				alignment: P.choices({
					left : 'left',
					right: 'right'
				})
			}}
		/>
	</div>
);