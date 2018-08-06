import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'

class Search extends Component {
  state = {
    query: '',
    bookResults: []
}


  updateQuery = (query) => {
    this.setState({ query: query })
    this.searchBooksUpdate(query)
  }

  searchBooksUpdate = (query) => {
    if (query) {
      BooksAPI.search(query).then( (bookResults) => {
        {/*.error allows us to handle the errors when searching
           incorrect queries so that we can reset back bookResults
           to being an array. If we don't reset it an error would
           stop the app process and the user would be stuck */}
        if (bookResults.error) {
          this.setState({ bookResults: [] })
        } else {
          this.setState({ bookResults: bookResults})
        }
      })
    } else {
      this.setState({bookResults: []})
    }
  }
  render() {
    return (
      <div className="search-books">
      <div className="search-books-bar">
      <Link className="close-search" to="/">Close</Link>
      <div className="search-books-input-wrapper">
      {/*
        NOTES: The search from BooksAPI is limited to a particular set of search terms.
        You can find these search terms here:
        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
        you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input type="text" placeholder="Search by title or author"
          value={this.state.query}
          onChange={(evt) => this.updateQuery(evt.target.value)}/>

        </div>
        </div>
        <div className="search-books-results">
        <ol className="books-grid">
          {this.state.bookResults.map( (bookResult) => (
            <li key={bookResult.id}>
              <Book
                book={bookResult}
                shelf={this.props.shelf}
                shelfChanger={this.props.shelfChanger}
              />
            </li>
          ))}
        </ol>
        </div>
        </div>
      );
  }
}
export default Search;
