var
React       = require('react'),
Loader      = require('Loader'),
Link        = require('Link'),
Rating      = require('Rating'),
Radio       = require('Radio'),
Img         = require('Img'),
Input       = require('Input'),
TextArea    = require('TextArea'),
ProgressBar = require('ProgressBar'),
Panel       = require('Panel'),
Accordion   = require('Accordion'),
Button      = require('Button'),
Checkbox    = require('Checkbox'),
Switch      = require('Switch'),
Nav         = require('Nav');


const Main = props =>(
    <div>
    	<TextArea />
    	<Checkbox>abc</Checkbox>
    	<Checkbox/>
    	<Checkbox>def</Checkbox>
        <Accordion>Panelc content</Accordion>
    </div>
);

module.exports = Main;