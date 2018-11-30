import React from 'react';
import './App.css';
import 'tachyons';
import CategoriesList from './components/CategoriesList';
import Pagination from './components/Pagination';
import PersonList from './components/PersonList';
import PlanetsList from './components/PlanetsList';
import SpeciesList from './components/SpeciesList';
import StarshipsList from './components/StarshipsList';
import FilmsList from './components/FilmsList';
import Loading from './components/Loading';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      results: [],
      pages: {
        next: '',
        prev: ''
      },
      loading:false
    }
    // this.onButtonCategorySelection = this.onButtonCategorySelection.bind(this);
  }

  onButtonCategorySelection = (category) => {
    this.setState({
      route: category,
    })
  }

  onButtonNextPage = () => {
    this.setState({
      loading:true
    })
    fetch(this.state.pages.next)
      .then((response) => response.json())
      .then((data) => this.setState({
        results: data.results,
        pages: {
          next: data.next,
          prev: data.previous
        },
        loading:false
      }))
  }

  onButtonPrevPage = () => {
    this.setState({
      loading:true
    })
    fetch(this.state.pages.prev)
      .then((response) => response.json())
      .then((data) => this.setState({
        results: data.results,
        pages: {
          next: data.next,
          prev: data.previous
        },
        loading:false
      }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.route !== prevState.route) {
      this.setState({
        loading:true
      })
      fetch(`https://swapi.co/api/${this.state.route}`)
        .then((response) => response.json())
        .then((data) => this.setState({
          results: data.results,
          pages: {
            next: data.next,
            prev: data.previous
          },
          loading:false
        }))
    }
  }



  render() {
    
    if (this.state.loading === true) {
      return (<Loading />)
    } else {
      switch (this.state.route) {
        case 'people':
          return (
            <div className="App w-80-l center">
              <h1 className="tc"> SW-API APP </h1>
              <CategoriesList route={this.state.route} onButtonCategorySelection={this.onButtonCategorySelection} />
              <PersonList persons={this.state.results} />
              <Pagination pages={this.state.pages} onButtonPrevPage={this.onButtonPrevPage} onButtonNextPage={this.onButtonNextPage} />
            </div>
          )
        case 'planets':
          return (
            <div className="App w-80-l center">
              <h1 className="tc"> SW-API APP </h1>
              <CategoriesList route={this.state.route} onButtonCategorySelection={this.onButtonCategorySelection} />
              <PlanetsList planets={this.state.results} />
              <Pagination pages={this.state.pages} onButtonPrevPage={this.onButtonPrevPage} onButtonNextPage={this.onButtonNextPage} />
            </div>
          )
          case 'species':
          return (
            <div className="App w-80-l center">
              <h1 className="tc"> SW-API APP </h1>
              <CategoriesList route={this.state.route} onButtonCategorySelection={this.onButtonCategorySelection} />
              <SpeciesList species={this.state.results} />
              <Pagination pages={this.state.pages} onButtonPrevPage={this.onButtonPrevPage} onButtonNextPage={this.onButtonNextPage} />
            </div>
          )
          case 'starships':
          return (
            <div className="App w-80-l center">
              <h1 className="tc"> SW-API APP </h1>
              <CategoriesList route={this.state.route} onButtonCategorySelection={this.onButtonCategorySelection} />
              <StarshipsList starships={this.state.results} />
              <Pagination pages={this.state.pages} onButtonPrevPage={this.onButtonPrevPage} onButtonNextPage={this.onButtonNextPage} />
            </div>
          )          
          case 'films':
          return (
            <div className="App w-80-l center">
              <h1 className="tc"> SW-API APP </h1>
              <CategoriesList route={this.state.route} onButtonCategorySelection={this.onButtonCategorySelection} />
              <FilmsList films={this.state.results} />
            </div>
          )
        default:
          return (
            <div className="App w-80-l center">
              <h1 className="tc"> SW-API APP </h1>
              <CategoriesList route={this.state.route} onButtonCategorySelection={this.onButtonCategorySelection} />
            </div>
          )
      }
    }
  }
}

export default App;
