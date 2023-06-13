import './App.css';
// import React, { Component } from 'react';
import CardList  from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState,useEffect } from 'react'; //useEffect is a hook that runs after the component is mounted to the DOM
const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState(''); // this is a hook, it is a function that returns an array with two values, the first is the state value, the second is a function that updates the state value
  const [filteredMonsters,setFilteredMonsters]=useState(monsters);
  // console.log(searchField);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) 
    .then(users => setMonsters(users));
  },[]);// changes when the dependencies changes in the array
  useEffect(()=>{
    const newFilterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    setFilteredMonsters(newFilterMonsters);
    
  },[monsters,searchField])
  const onsearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
  }
  
  return (
    <div className="App">
      <h1 className='app-title mint'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onsearchChange} placeholder='search monsters' className='monsters-search-box'/>
      <CardList  monsters={filteredMonsters} />
    </div>
  );
}


// class App extends Component {
//   constructor() { // constructor is a lifecycle method that runs before the component is mounted to the DOM constructor is called first then render and then componentDidMount and then render again
//     super();
//     this.state = {
//       monsters : [ ],
//       searchField: ''
//     };
//   }
//   componentDidMount() { // lifecycle method that runs after the component is mounted to the DOM 
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json()) // convert response to json
//     .then(users => this.setState({monsters: users})); // set state with the response data 
//   }
//   onsearchChange = (event) => {
//     this.setState({searchField: event.target.value});
//   } // this is a class method, so we need to bind it to the class instance in the constructor

  
//   render(){
//     const { monsters, searchField } = this.state;
//     const { onsearchChange } = this;
//     const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

//     return (
//       <div className="App">
//       <h1 className='app-title mint'>Monsters Rolodex</h1>
//       <SearchBox onChangeHandler={onsearchChange} placeholder='search monsters' className='search-box'/>
//       {/* <input className='search-box' type="search" placeholder="search monsters" onChange={onsearchChange}
//         // console.log(event.target.value);
//         /> */}
//         <CardList monsters={filterMonsters} />
//       </div>
//     );
//   }
// }

export default App;
