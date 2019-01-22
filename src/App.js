import React from 'react';
import './App.css';
import 'tachyons';
import Wrapper from './components/Wrapper';
import Loading from './components/Loading';

const PersonList = React.lazy(() => import('./components/PersonList'));
const PlanetsList = React.lazy(() => import('./components/PlanetsList'));
const SpeciesList = React.lazy(() => import('./components/SpeciesList'));
const StarshipsList = React.lazy(() => import('./components/StarshipsList'));
const FilmsList = React.lazy(() => import('./components/FilmsList'));

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

              <React.Suspense fallback={ <Loading /> }>
                <PersonList persons={ this.state.results } />
              </React.Suspense>

            </Wrapper>
          )
        case 'planets':
          return (
            <Wrapper route={ this.state.route } onButtonCategorySelection={ this.onButtonCategorySelection } pages={ this.state.pages } onButtonPrevPage={ this.onButtonPrevPage } onButtonNextPage={ this.onButtonNextPage }>
              <React.Suspense fallback={ <Loading /> }>
                <PlanetsList planets={ this.state.results } />
              </React.Suspense>
            </Wrapper>
          )
        case 'species':
          return (
            <Wrapper route={ this.state.route } onButtonCategorySelection={ this.onButtonCategorySelection } pages={ this.state.pages } onButtonPrevPage={ this.onButtonPrevPage } onButtonNextPage={ this.onButtonNextPage }>
              <React.Suspense fallback={ <Loading /> }>
                <SpeciesList species={ this.state.results } />
              </React.Suspense>
            </Wrapper>
          )
        case 'starships':
          return (
            <Wrapper route={ this.state.route } onButtonCategorySelection={ this.onButtonCategorySelection } pages={ this.state.pages } onButtonPrevPage={ this.onButtonPrevPage } onButtonNextPage={ this.onButtonNextPage }>
              <React.Suspense fallback={ <Loading /> }>
                <StarshipsList starships={ this.state.results } />
              </React.Suspense>
            </Wrapper>
          )
        case 'films':
          return (
            <Wrapper route={ this.state.route } onButtonCategorySelection={ this.onButtonCategorySelection } pages={ this.state.pages } onButtonPrevPage={ this.onButtonPrevPage } onButtonNextPage={ this.onButtonNextPage }>
              <React.Suspense fallback={ <Loading /> }>
                <FilmsList films={ this.state.results } />
              </React.Suspense>
            </Wrapper>
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
