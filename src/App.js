import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { id: 1, name: 'Frankenstein' },
        { id: 2, name: 'Dracula' },
        { id: 3, name: 'Zombie' }]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}
export default App;