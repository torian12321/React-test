var
React      = require('react'),
Loader      = require('Loader'),
Link      = require('Link'),
Rating      = require('Rating'),
Img      = require('Img'),
Input      = require('Input'),
ProgressBar      = require('ProgressBar'),
Panel      = require('Panel'),
Accordion = require('Accordion'),
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
    this.state = {
      value: 22,
      acc  : true
    };

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
  acc(){
      this.setState({acc: !this.state.acc});
  }

  render() {
    return (
      <div>
        <input 
            type    = "number"
            value   = {this.state.value}
            onChange= {this.handleChange}
        />

        <Accordion isOpen={this.state.acc} />

        <Button onClick={this.acc.bind(this)} />
        <Input onChange={this.handleNewNumber} value={this.state.value} type='number' min={10} max={33} />


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