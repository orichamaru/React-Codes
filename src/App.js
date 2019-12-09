import React, { Component } from 'react';
//import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
//import { threadId } from 'worker_threads';

//Using Functional Component
// const app = (props) =>  {
     
//     const [personState , setPersonState] = useState(
//       {
//         persons : [
//                      {name : "Javed" ,age : 19},
//                      {name : "Ram Singh" , age : 20},
//                      {name : "Akhil" , age : 18}
//                   ],
//         otherState : "Some other value"
//       }
//     );

//     //Function inside a function
//     const switchNameHandler = () => {
    
//       setPersonState({
//        persons : [
//          {name : "Maximilian" ,age : 19},
//          {name : "Ram Singh" , age : 20},
//          {name : "Akhil" , age : 17}
//        ]
//      } )
//    }

//     return (
//       <div className="App">
//          <h1>Hi I'm a React Developer</h1>
//          <p>This is Really Working !!!</p>
//          <button onClick={switchNameHandler}>Switch Name</button>
//          <Person name= {personState.persons[0].name} age={personState.persons[0].age}/>
//          <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies are playing Football</Person>
//          <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
//       </div>
//      //Not Allowed <h1>sjndskn</h1>
//     );
// }

// state = {
//   persons : [
//     {name : "Javed" ,age : 19},
//     {name : "Ram Singh" , age : 20},
//     {name : "Akhil" , age : 18}
//   ]
// }
// switchNameHandler = () => {
 
//     //  console.log("Was Clicked");
//    //Dont'do this - this.state.persons[0].name = "Maximilian"; cannot mutate state
  
//    this.setState({
//      persons : [
//        {name : "Maximilian" ,age : 19},
//        {name : "Ram Singh" , age : 20},
//        {name : "Akhil" , age : 17}
//      ]
//    } )
//  }

 class App extends Component {
 
  state = {
    persons : [
      {name : "Javed" ,age : 19},
      {name : "Ram Singh" , age : 20},
      {name : "Akhil" , age : 18}
    ]
  }
  switchNameHandler = (newName) => {
   
      //  console.log("Was Clicked");
     //Dont'do this - this.state.persons[0].name = "Maximilian"; cannot mutate state
    
     this.setState({
       persons : [
         {name : newName ,age : 19},
         {name : "Ram Singh" , age : 20},
         {name : "Akhil" , age : 17}
       ]
     } )
   }

   nameChangeHandler = (event) => {
      
     this.setState({
      persons : [
        {name : "Javed",age : 19},
        {name : event.target.value , age : 20},
        {name : "Akhil" , age : 17}
      ]
     } )
  } 
  //Passing Argument - this.switchHandler.bind(this,"Jello")
  //                   onClick = { () => this.switchHandler("Jerk") }

  //Pass By reference - in Person call add click={this.switchHandler}
  //                    and in Person.js add onClick={props.click}

  render() {

    const Mystyle = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
         <h1>Hi I'm a React Developer</h1>
         <p>This is Really Working !!!</p>   
         <button  style={Mystyle} onClick={ () => this.switchNameHandler("Jersy")}>Switch Name</button>
         <Person 
             name= {this.state.persons[0].name} 
             age={this.state.persons[0].age}/>
         <Person 
             name={this.state.persons[1].name}
             age={this.state.persons[1].age}
             click = {this.switchNameHandler.bind(this,"Helleluyah")}
             changed = {this.nameChangeHandler}>
             My Hobbies are playing Football  
         </Person>
         <Person 
             name={this.state.persons[2].name} 
             age={this.state.persons[2].age}/>
      </div>
     //Not Allowed <h1>sjndskn</h1>
    );
    
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,"Does it work now !!"));
  }
}

export default App;