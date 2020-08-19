import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [{ id: 1, name: 'Frankenstein' }, { id: 2, name: 'Dracula' }, { id: 3, name: 'Zombie' }]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(m => (
              <h1 key={m.id}>{m.name}</h1>
            ))
        }
        <button onClick={() => this.setState({ newProp: 'Just changed' })}>Change Me!</button>
      </div>
    );
  }
}
export default App;