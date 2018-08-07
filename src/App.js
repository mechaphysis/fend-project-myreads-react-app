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
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))
    })
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
          books={this.state.books}
          shelfChanger={this.shelfChanger}
          />
        )}/>
        <Route path='/search' render={() => (
          <Search
          shelfChanger={this.shelfChanger}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp;
