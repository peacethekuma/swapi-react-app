import React from 'react';
import './App.css';
import 'tachyons';
import CategoriesList from './CategoriesList';
import Pagination from './Pagination';
import PersonList from './components/PersonList';
import PlanetsList from './components/PlanetsList';
import SpeciesList from './components/SpeciesList';
import StarshipsList from './components/StarshipsList';
import FilmsList from './components/FilmsList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      results: [],
      pages: {
        next: '',
        prev: ''
      }
    }
    // this.onButtonCategorySelection = this.onButtonCategorySelection.bind(this);
  }

  onButtonCategorySelection = (category) => {
    this.setState({
      route: category,
    })
  }

  onButtonNextPage = () => {
    fetch(this.state.pages.next)
      .then((response) => response.json())
      .then((data) => this.setState({
        results: data.results,
        pages: {
          next: data.next,
          prev: data.previous
        }
      }))
  }

  onButtonPrevPage = () => {
    fetch(this.state.pages.prev)
      .then((response) => response.json())
      .then((data) => this.setState({
        results: data.results,
        pages: {
          next: data.next,
          prev: data.previous
        }
      }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.route !== prevState.route) {
      console.log(prevProps, prevState);

      fetch(`https://swapi.co/api/${this.state.route}`)
        .then((response) => response.json())
        .then((data) => this.setState({
          results: data.results,
          pages: {
            next: data.next,
            prev: data.previous
          }
        }))
    }
  }


  render() {

    if (this.state.results.length === 0 && this.state.route !== '') {
      return (<h1 className="pa3 tc">Loading...</h1>)
    } else {
      switch (this.state.route) {
        case 'people':
          return (
            <div className="App w-80-l center">
              <h1 className="tc"> Star Wars </h1>
              <CategoriesList onButtonCategorySelection={this.onButtonCategorySelection} />
              <PersonList persons={this.state.results} />
              <Pagination pages={this.state.pages} onButtonPrevPage={this.onButtonPrevPage} onButtonNextPage={this.onButtonNextPage} />
            </div>
          )
        case 'planets':
          return (
            <div className="App w-80-l center">
              <h1 className="tc"> Star Wars </h1>
              <CategoriesList onButtonCategorySelection={this.onButtonCategorySelection} />
              <PlanetsList planets={this.state.results} />
              <Pagination pages={this.state.pages} onButtonPrevPage={this.onButtonPrevPage} onButtonNextPage={this.onButtonNextPage} />
            </div>
          )
          case 'species':
          return (
            <div className="App w-80-l center">
              <h1 className="tc"> Star Wars </h1>
              <CategoriesList onButtonCategorySelection={this.onButtonCategorySelection} />
              <SpeciesList species={this.state.results} />
              <Pagination pages={this.state.pages} onButtonPrevPage={this.onButtonPrevPage} onButtonNextPage={this.onButtonNextPage} />
            </div>
          )
          case 'starships':
          return (
            <div className="App w-80-l center">
              <h1 className="tc"> Star Wars </h1>
              <CategoriesList onButtonCategorySelection={this.onButtonCategorySelection} />
              <StarshipsList starships={this.state.results} />
              <Pagination pages={this.state.pages} onButtonPrevPage={this.onButtonPrevPage} onButtonNextPage={this.onButtonNextPage} />
            </div>
          )          
          case 'films':
          return (
            <div className="App w-80-l center">
              <h1 className="tc"> Star Wars </h1>
              <CategoriesList onButtonCategorySelection={this.onButtonCategorySelection} />
              <FilmsList films={this.state.results} />
            </div>
          )
        default:
          return (
            <div className="App w-80-l center">
              <h1 className="tc"> Star Wars </h1>
              <CategoriesList onButtonCategorySelection={this.onButtonCategorySelection} />
            </div>
          )
      }
    }
  }
}

export default App;
