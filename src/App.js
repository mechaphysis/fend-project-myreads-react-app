import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import ListBooks from './ListBooks'

class BooksApp extends Component {
  state = {
    books: []
  }

  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false
  // }
  componentDidMount() {
    //We fetch the list of books from the backend server
    //by linking this action to componentDidMount method:
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render() {
    console.log(this.state.books)
    return (
      <div className="app">
          <Search />
          <ListBooks
            books={this.state.books}
          />
      </div>
    )
  }
}

export default BooksApp;
