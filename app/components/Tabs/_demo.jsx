// https://toddmotto.com/creating-a-tabs-component-with-react/#component-design

import React from 'react'
import Demo, {props as P} from 'react-demo'
import Tabs from './index'

const Tabs_demo = props => (
	<Tabs selected={1}>
	    <Tabs.Panel label="Tab 1">
	        This is my tab 1 contents!!!!
	    </Tabs.Panel>
	    <Tabs.Panel label="Tab 2">
	        <div>This is my tab 2 contents!</div>
	    </Tabs.Panel>
	    <Tabs.Panel label="Tab 3">
	        <div>More content</div>
	    </Tabs.Panel>
	</Tabs>
);



module.exports = () => (
	<div>
		<Demo target={Tabs_demo} />
	</div>
);