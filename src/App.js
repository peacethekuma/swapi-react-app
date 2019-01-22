import React from 'react';
import './App.css';
import 'tachyons';
import CategoriesList from './components/CategoriesList';
import PersonList from './components/PersonList';
import PlanetsList from './components/PlanetsList';
import SpeciesList from './components/SpeciesList';
import StarshipsList from './components/StarshipsList';
import FilmsList from './components/FilmsList';
import Wrapper from './components/Wrapper';
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
      loading: false
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
      loading: true
    })
    fetch(this.state.pages.next)
      .then((response) => response.json())
      .then((data) => this.setState({
        results: data.results,
        pages: {
          next: data.next,
          prev: data.previous
        },
        loading: false
      }))
  }

  onButtonPrevPage = () => {
    this.setState({
      loading: true
    })
    fetch(this.state.pages.prev)
      .then((response) => response.json())
      .then((data) => this.setState({
        results: data.results,
        pages: {
          next: data.next,
          prev: data.previous
        },
        loading: false
      }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.route !== prevState.route) {
      this.setState({
        loading: true
      })
      fetch(`https://swapi.co/api/${this.state.route}`)
        .then((response) => response.json())
        .then((data) => this.setState({
          results: data.results,
          pages: {
            next: data.next,
            prev: data.previous
          },
          loading: false
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
            <Wrapper route={ this.state.route } onButtonCategorySelection={ this.onButtonCategorySelection } pages={ this.state.pages } onButtonPrevPage={ this.onButtonPrevPage } onButtonNextPage={ this.onButtonNextPage }>
              <PersonList persons={ this.state.results } />
            </Wrapper>
          )
        case 'planets':
          return (
            <Wrapper route={ this.state.route } onButtonCategorySelection={ this.onButtonCategorySelection } pages={ this.state.pages } onButtonPrevPage={ this.onButtonPrevPage } onButtonNextPage={ this.onButtonNextPage }>
              <PlanetsList planets={ this.state.results } />
            </Wrapper>
          )
        case 'species':
          return (
            <Wrapper route={ this.state.route } onButtonCategorySelection={ this.onButtonCategorySelection } pages={ this.state.pages } onButtonPrevPage={ this.onButtonPrevPage } onButtonNextPage={ this.onButtonNextPage }>
              <SpeciesList species={ this.state.results } />
            </Wrapper>
          )
        case 'starships':
          return (
            <Wrapper route={ this.state.route } onButtonCategorySelection={ this.onButtonCategorySelection } pages={ this.state.pages } onButtonPrevPage={ this.onButtonPrevPage } onButtonNextPage={ this.onButtonNextPage }>
              <StarshipsList starships={ this.state.results } />
            </Wrapper>
          )
        case 'films':
          return (
            <div className="App w-80-l center">
              <h1 className="tc"> SW-API APP </h1>
              <CategoriesList route={ this.state.route } onButtonCategorySelection={ this.onButtonCategorySelection } />
              <FilmsList films={ this.state.results } />
            </div>
          )
        default:
          return (
            <Wrapper route={ this.state.route } onButtonCategorySelection={ this.onButtonCategorySelection } pages={ this.state.pages } onButtonPrevPage={ this.onButtonPrevPage } onButtonNextPage={ this.onButtonNextPage }>
            </Wrapper>
          )
      }
    }
  }
}

export default App;
