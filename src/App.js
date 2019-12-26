import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''

    }
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render(){

    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      <div className='App'>
        {/* Pass Data1 */}
        {/* <CardList name="Hai">
        {
          this.state.monsters.map(monsters => 
          <h1 key={monsters.id}>{monsters.name}</h1>

          )
       }
        </CardList> */}
        {/* <input 
        className='m-2'
        type='search' 
        placeholder='search monters'
        onChange={e => this.setState({searchField: e.target.value})}/> */}


        <h1>Monster Rolodex</h1>

        <SearchBox 
          placeholder='search monters'
          handleChange={e => this.setState({searchField: e.target.value})}
        />

        <CardList monsters={filterMonsters}>

        </CardList>
      </div>
    );
  }

}

export default App;
