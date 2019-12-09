import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
         <h1>Hi I'm a React Developer</h1>
         <p>This is Really Working !!!</p>
      <Person name="Javed" age="19"/>
      <Person name="Ram Singh" age="20">My Hobbies are playing Football</Person>
      <Person name="Akhil" age="18"/>
      </div>
     //Not Allowed <h1>sjndskn</h1>
    );
    
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,"Does it work now !!"));
  }
}

export default App;
