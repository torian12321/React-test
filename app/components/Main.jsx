var
React  = require('react'),
Button = require('Button'),
Icon   = require('Icon'),
Modal  = require('Modal');

var test = function(){
	console.log('abc');
}
const Main = props =>(
    <div>
        Hello world
        <Button onClick={test} />
        <Icon />
        <Icon name='rocket'/>
        <Icon name='rockettt'/>
        <Icon name='home' library='Material'/>

        <Icon library='Octicons' />
<Icon library='Ionicons' />
<Icon library='Material' />
<Icon library='Typicons' />
    </div>
);


module.exports = Main;