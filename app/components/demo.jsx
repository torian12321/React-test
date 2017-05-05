import React from 'react'
import Demo, {props as P} from 'react-demo'
import Button from './form/Button/_demo'
import Panel from  './Panel/_demo'
import Loader from  './Loader/_demo'
import Accordion from  './Accordion/_demo'
import ProgressBar from  './ProgressBar/_demo'
import Tabs from  './Tabs/_demo'
import Quote from  './Quote/_demo'
import Rating from  './Rating/_demo'


module.exports = () => (
  <div>
	<Rating />
	<Quote />
  	<Tabs />
	<ProgressBar />
	<Accordion />
	<Loader />
	<Panel />
    <Button />
  </div>
);