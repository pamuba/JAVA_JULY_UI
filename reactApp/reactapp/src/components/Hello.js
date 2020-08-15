import React , { Component } from "react";

// const Hello = (props) => {
//   return (
//     <div>
//       <h1>Hello {props.name} a.k.a. {props.heroName}</h1>
//       {props.children}
//     </div>
//   );

//   // return React.createElement('div', 'null', React.createElement('h1', null, 'Hello World'));
// };

class Hello extends Component{
    render(){
        console.log(typeof this.props)
        // this.props.name = "sdasda";//props are immtable
        return (
                <div>
                  <h1>Hello {this.props.name} a.k.a. {this.props.heroName}</h1>
                  {this.props.children}
                </div>
              );
    }
}

export default Hello;
