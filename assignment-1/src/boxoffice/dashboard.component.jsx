import React from 'react';
import apiService from './movie.service';

class DashboardComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      movies: [],
    };
    this.searchMovie = this.searchMovie.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  searchMovie(e) {
    e.preventDefault();
    apiService.searchMovies(this.state.title).then(res => {
      this.setState({ movies: res.Search });
    }).catch(err => {
      console.log(err);
    });
  }

  onChange(e) {
    this.setState({ title: e.target.value });
  }

  onMovieSelect(movie) {
    console.log('movie', movie);
    this.props.history.push({
      pathname: `/movie/${movie.imdbID}`,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchMovie}>
          <lable>user name:
           <input
              type='text'
              value={this.state.title}
              name='title'
              onChange={this.onChange}
            ></input>
          </lable>
          <input type='submit' value='submit'></input>
        </form>
        <ul>
          {this.state.movies.map(movie => <li key={movie.imdbID} onClick={() => { this.onMovieSelect(movie) }}>{movie.Title}</li>)}
        </ul>
      </div>
    )
  }
}

export default DashboardComponent;