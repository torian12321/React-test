var
React      = require('react'),
Loader      = require('Loader'),
Link      = require('Link'),
Rating      = require('Rating'),
Img      = require('Img'),
Input      = require('Input'),
ProgressBar      = require('ProgressBar'),
Panel      = require('Panel'),
PropTypes = require('prop-types'),
Button = require('Button'),
Nav        = require('Nav');


const Main = props =>(
    <div>
        <h2>Main funcition</h2>
        <Img />
        <Img alt="testing"/>

        <Link>link test</Link>
        <ProgressBar val={33} />
        <Rating val={2}/>
        <Panel>Panelc content</Panel>
    </div>
);




class Main_test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 22};

    this.handleChange   = this.handleChange.bind(this);
    this.handleNewNumber= this.handleNewNumber.bind(this);
  }

  handleChange(event) {
    //this.setState({value: event.target.value});
    this.handleNewNumber(event.target.value);
  }
  handleNewNumber(data){
      console.log('hola ' + data);
      this.setState({value: data});
  }
  aa(){
    console.log('aa');
  }
   bb(){
    console.log('bb');
  }

  render() {
    return (
      <div>
        <input 
            type    = "number"
            min     = {0}
            max     = {100}
            value   = {this.state.value}
            onChange= {this.handleChange}
        />
<Button />
<Button onClick={this.aa} />
<Input onChange={this.handleNewNumber} value={this.state.value} type='number' min={10} max={33} />
<Input onChange={this.handleNewNumber} disabled={true} type='number' />


        <ProgressBar val={this.state.value} />
        <Rating val={this.state.value/10} of={10} />
        <Panel>
            Value of {this.state.value}
        </Panel>
      </div>
    );
  }
}


module.exports = Main_test;