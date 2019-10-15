import React, { Component } from 'react';
import './App.css';
import FormInputs from './formInputs.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        noun: '',
        pluralNoun1: '',
        verb1: "",
        verb2: '',
        partOfBody: '',
        adjective1: '',
        pluralNoun2: '',
        adjective2: '',
      },  
      madLib: ""
    }
  }
  
  madLibReturn = () => {
    var { noun , pluralNoun1 , verb1 , verb2 , partOfBody , adjective1 , pluralNoun2 , adjective2 } = this.state.form
    let paragraph = `Today, every student has a computer small enough to fit into his ${noun}. He can solve any math problem by simply pushing the computer's little ${pluralNoun1}. Computers can add, multiply, divide, and ${verb1}. They can also ${verb2} better than a human. Some computers are ${partOfBody}. Others have a/an ${adjective1} screen that shows all kinds of ${pluralNoun2} and ${adjective2} figures.`
    this.setState({madLib : paragraph})
  }
  
  resetDefault = () => {
        const defaultForm = {
        noun: '',
        pluralNoun1: '',
        verb1: "",
        verb2: '',
        partOfBody: '',
        adjective1: '',
        pluralNoun2: '',
        adjective2: '',
      }
       this.setState({ madLib : ''})
      this.setState({form:defaultForm})
  }
  
  inputChange = (e) => {
    const {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({form})
  }
  
  render () {  
    return (
      <div className="App">
        <div className="Form">
          < FormInputs 
              form={this.inputChange} 
              formNoun={this.state.form.noun}
              pluralNoun1={this.state.form.pluralNoun1}
              verb1={this.state.form.verb1}
              verb2={this.state.form.verb2}
              partOfBody={this.state.form.partOfBody}
              adjective1={this.state.form.adjective1}
              adjective2={this.state.form.adjective2}
              pluralNoun2={this.state.form.pluralNoun2}
          />
        </div>
        <button onClick={this.madLibReturn}>
          Get your hilarious MadLib!
        </button>
        <p>
          {this.state.madLib}
        </p>
        <button onClick={this.resetDefault}>
        Reset 
        </button>
      </div>
    );

  }  
}

export default App;
