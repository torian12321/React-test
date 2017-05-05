import React from 'react'
import Demo, {props as P} from 'react-demo'
import Accordion from './index'


module.exports = () => (
	<div>
		<Demo
			target={Accordion}
				props ={{
				children: P.string('Accordion content')
			}}
		/>
		<Demo
			target={Accordion}
			props ={{
				children: P.string('Accordion content'),
				title   : P.string('Title'),
				isOpen  : P.bool(true),
			}}
		/>
	</div>
);