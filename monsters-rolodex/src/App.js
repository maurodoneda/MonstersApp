import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


class App extends Component {
  constructor(){
    super();

    this.state = {
        monsters : [],
        search : ''
      };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState(() => {
          return { monsters : users };
        }
      ));
  }

  onSearchChange = (event) => {
    let search = event.target.value.toLowerCase();
    this.setState(() => {
      return { search }
    })
  }

  render(){
    const {monsters, search} = this.state;

    const filtered = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(search)
    })

    return (
      <div className="App">
        <h1 className='app-title'>Monsters</h1>
        <SearchBox className = 'search-box' onChangeHandler = {this.onSearchChange}/>
        <CardList monsters = {filtered}/>
      </div>
    )
  }
}

export default App;
