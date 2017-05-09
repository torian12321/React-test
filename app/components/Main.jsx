var
React  = require('react'),
Button = require('Button'),
Modal  = require('Modal');

var test = function(){
	console.log('abc');
}
const Main = props =>(
    <div>
        Hello world
        <Button onClick={test} />
        <Modal>
        	abc
        </Modal>
    </div>
);


module.exports = Main;