import React from 'react'
import Demo, {props as P} from 'react-demo'
import Quote from './index'


module.exports = () => (
	<div>
		<Demo
			target={Quote}
			props ={{
				children: P.string('Some nice quote')
			}}
		/>
		<Demo
			target={Quote}
			props ={{
				children: P.string('Some nice quote'),
				author  : P.string('Lady Gaga')
			}}
		/>
	</div>
);