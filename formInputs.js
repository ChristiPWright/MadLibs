import React, { Component } from 'react';

class FormInputs extends Component {
   render(){
       return(
          
         <React.Fragment>
         {console.log('running?')}
         <input 
            placeholder="type a noun"
            type="text"
            name="noun"
            value={this.props.formNoun}
            onChange = {this.props.form}
          />
          <input
            placeholder="type a plural noun"
            type="text"
            name="pluralNoun1"
            value={this.props.pluralNoun1}
            onChange = {this.props.form}
          />
          <input
            placeholder="type a verb"
            type="text"
            name="verb1"
            value={this.props.verb1}
            onChange = {this.props.form}
          />
          <input
            placeholder="type a verb"
            type="text"
            name="verb2"
            value={this.props.verb2}
            onChange = {this.props.form}
          />
          <input
            placeholder="type a part of the body"
            type="text"
            name="partOfBody"
            value={this.props.partOfBody}
            onChange = {this.props.form}
          />
          <input
            placeholder="type a adjective"
            type="text"
            name="adjective1"
            value={this.props.adjective1}
            onChange = {this.props.form}
          />
          <input
            placeholder="type a plural noun"
            type="text"
            name="pluralNoun2"
            value={this.props.pluralNoun2}
            onChange = {this.props.form}
          />
          <input
            placeholder="type a adjective"
            type="text"
            name="adjective2"
            value={this.props.adjective2}
            onChange = {this.props.form}
          />
          </React.Fragment>
        );
       
   }      
}

export default FormInputs;