import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  render() {
    const list = this.state.foods.map((item, i) => {
      return (
        <ul><h1 key={i}>{item}</h1></ul>
        ) 
    })
    return (
      <div className="App">
        <div>{list}</div>
      </div>
    );
  }
}

export default App;
