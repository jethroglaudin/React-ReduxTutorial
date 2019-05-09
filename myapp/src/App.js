import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';


class App extends Component {
  state = {
    ninjas: [
      {name: 'Ryu', age: 30, belt: 'black', id: 1},
      {name: 'Yoshi', age: 20, belt: 'green', id: 2},
      {name: 'Crystal', age: 25, belt: 'pink', id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });

  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninjas =>{
      return ninjas.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  }
  componentDidMount(){
 //Fires when the component first mounts the dom
 console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState){
    //fires when a component has updated
    console.log('component updated');
    console.log(prevProps, prevState);

  }
 

  render() {
  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome :)</p>
    {/* keep code modular by nesting Ninjas */}
    {/* child component */}
      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
      <AddNinja addNinja={this.addNinja}/>  
    </div>
  );
  }
}

export default App;
