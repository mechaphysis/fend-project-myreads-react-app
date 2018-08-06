import React, { Component } from 'react';
import { Route } from 'react-router-dom'
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
      this.setState({ books: books })
    })
  }

  /* The method below will be called in BookShelfChanger Component:
   * The update method called inside comes from BooksAPI
   * after calling update we call again getAll and we set a new state for the books
   * that includes the change of shelf
   */
  shelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    });
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
          <Search />
          <ListBooks
            books={this.state.books}
            shelfChanger={this.shelfChanger}
          />
      </div>
    )
  }
}

export default BooksApp;
