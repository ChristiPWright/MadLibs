import React, { Component } from 'react';
import './App.css';


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
          <input 
            placeholder="type a noun"
            type="text"
            name="noun"
            value={this.state.form.noun}
            onChange = {this.inputChange}
          />
          <input
            placeholder="type a plural noun"
            type="text"
            name="pluralNoun1"
            value={this.state.form.pluralNoun1}
            onChange = {this.inputChange}
          />
          <input
            placeholder="type a verb"
            type="text"
            name="verb1"
            value={this.state.form.verb1}
            onChange = {this.inputChange}
          />
          <input
            placeholder="type a verb"
            type="text"
            name="verb2"
            value={this.state.form.verb2}
            onChange = {this.inputChange}
          />
          <input
            placeholder="type a part of the body"
            type="text"
            name="partOfBody"
            value={this.state.form.partOfBody}
            onChange = {this.inputChange}
          />
          <input
            placeholder="type a adjective"
            type="text"
            name="adjective1"
            value={this.state.form.adjective1}
            onChange = {this.inputChange}
          />
          <input
            placeholder="type a plural noun"
            type="text"
            name="pluralNoun2"
            value={this.state.form.pluralNoun2}
            onChange = {this.inputChange}
          />
          <input
            placeholder="type a adjective"
            type="text"
            name="adjective2"
            value={this.state.form.adjective2}
            onChange = {this.inputChange}
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
