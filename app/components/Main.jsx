var
React      = require('react'),
Loader      = require('Loader'),
Link      = require('Link'),
Rating      = require('Rating'),
Img      = require('Img'),
ProgressBar      = require('ProgressBar'),
Panel      = require('Panel'),
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
    this.state = {value: 0};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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
