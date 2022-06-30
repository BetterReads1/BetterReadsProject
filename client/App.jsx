import React, { Component } from "react";
import MainContainer from './MainContainer.jsx'

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/genre')
    .then(data => data.json())
    .then((data) => {
      console.log(data);
    })
  }

  render() {
    return (
      <div id="App">
        <MainContainer/>
      </div>
    );
  }
}

export default App;