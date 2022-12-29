import './App.css';
import {Component, useEffect, useState} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {
  const [searchString, setSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([monsters]);

  const onSearchChange = (event) => {
    setSearchString(event.target.value.toLowerCase());
  }

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => setMonsters(users))
  },    []);

  useEffect(()=>{
    const filtered = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchString)
    })

    setFilteredMonsters(filtered);
  }, [monsters, searchString])


  return (
    <div className="App">
      <h1 className='app-title'>Robot Search</h1>
      <SearchBox className='search-box' onChangeHandler={onSearchChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
