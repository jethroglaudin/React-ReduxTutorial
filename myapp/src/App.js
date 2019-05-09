import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome :)</p>
    {/* keep code modular by nesting Ninjas */}
    {/* child component */}
      <Ninjas name="Ryu" age="25" belt="black"/>
      <Ninjas name="Yoshi" age="30" belt="green"/>

    </div>
  );
  }
}

export default App;
