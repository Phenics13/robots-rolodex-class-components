import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super()

    this.state = {
      robots: [],
      searchField: '',
    };
    console.log('constructor')
  }

  componentDidMount() {
    console.log('didMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(() => {
          return { robots: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    console.log('render');

    const { robots, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='title'>Robots Rolodex</h1>
        <SearchBox
          className='robots-search-box'
          placeholder='search robots'
          onSearchChange={onSearchChange}
        />
        <CardList filteredRobots={filteredRobots} />
      </div>
    );
  }

}

export default App;
