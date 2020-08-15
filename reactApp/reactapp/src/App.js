import React, {Component} from 'react';
import  {Greet}  from './components/first'
import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';


class App extends Component{
  render(){
    return (
      <div className="App">
       {/* <Greet /> */}
       {/* <Hello name="Bruce" heroName="Batman">
         <p>Data for childern props1</p>
         <p>Data for childern props2</p>
       </Hello>
       <Hello name="Clark" heroName="Superman">
         <button>CLICK</button>
       </Hello>
       <Hello name="Diana" heroName="Wonder Woman"/> */}
       {/* <Welcome></Welcome> */}
       {/* <Counter></Counter> */}
       {/* <FunctionClick></FunctionClick> */}
       {/* <ClassClick></ClassClick> */}
       {/* <EventBind></EventBind> */}

       {/* <ParentComponent /> */}
       <UserGreeting></UserGreeting>
      </div>
    );
  }
}

export default App;
