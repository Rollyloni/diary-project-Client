import './SearchComponent.scss';
import { Component} from 'react';
import axios from 'axios';

const movieAPI = "http://www.omdbapi.com/"
const movieAPIkey = "apikey=4a238fc0"

class SearchComponent extends Component {
  state = {
    typeOfSearch: "",
    placeholder: "",
    searchResults: ""
  }
  findMovie = () => {
    this.setState({
      typeOfSearch: "movie",
      placeholder:"enter movie title"
    })

  }

  getSearchResults = (event) => {
    event.preventDefault()
    let searchcriteria = event.target.searchcriteria.value

    if( this.state.typeOfSearch === "movie") {
      axios.get(`${movieAPI}?${movieAPIkey}&type=movie&t=${searchcriteria}`)
      .then(response => {
        let responseObj = response.data
        responseObj.searchType = "movie"
        this.setState({
          searchResults: responseObj
        })
      })
    }
    
  }

  handleCancelSearch () {
    this.props.searchFunc(false)
  }

  handleMovieClick () {
    this.props.stateFunc(this.state.searchResults)
    this.props.searchFunc(false)
  }

  render () {
    return (
      <div className='search-area'>
        <section>
            <button onClick={() =>{this.findMovie()}}> Add Movie</button>
            <button onClick={() => {this.handleCancelSearch()}}>Cancel Search</button>
            {/* <button> Add Music</button> */}
            {/* <button> Add Book</button> */}
        </section>
        
        {this.state.typeOfSearch 
        ? <form onSubmit={(event)=>{this.getSearchResults(event)}}>
            <input name="searchcriteria" placeholder={this.state.placeholder} />
            <button>Search</button>
          </form> 
        : null}

        {this.state.searchResults
        ? <section className="movie-card">
            <h3>{this.state.searchResults.Title}</h3>
            <p>Duration: {this.state.searchResults.Runtime}</p>
            <p>Rated: {this.state.searchResults.Rated}</p>
            <p>Genre: {this.state.searchResults.Genre}</p>
            <img src={this.state.searchResults.Poster} alt={this.state.searchResults.Title}/>
            <button onClick={() => {this.handleMovieClick()}}>Select</button>
          </section>
        :null}
        
        
      </div>
    );
  }
};

export default SearchComponent;
