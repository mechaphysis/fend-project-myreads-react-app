import React, { Component } from 'react';
import Book from './Book.js'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
      <div className="list-books-title">
      <h1>MyReads</h1>
      </div>
        <div className="list-books-content">
          <div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {this.props.books
                    .filter( book => book.shelf === 'currentlyReading')
                    .map(book => (
                      <li key={book.id}>
                      <Book
                        book={book}
                        shelf={book.shelf}
                        shelfChanger={this.props.shelfChanger}
                      />
                      </li>
                    ))
                  }
                  </ol>
                </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {this.props.books
                    .filter( book => book.shelf === 'wantToRead')
                    .map(book => (
                      <li key={book.id}>
                      <Book
                        book={book}
                        shelf={book.shelf}
                        shelfChanger={this.props.shelfChanger}
                      />
                      </li>
                    ))
                  }
                  </ol>
                </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {this.props.books
                    .filter( book => book.shelf === 'read')
                    .map(book => (
                      <li key={book.id}>
                      <Book
                        book={book}
                        shelf={book.shelf}
                        shelfChanger={this.props.shelfChanger}
                      />
                      </li>
                    ))
                  }
                  </ol>
                </div>
            </div>

          </div>
        </div>
        <div className="open-search">
        <Link className="to-search" to="/search">Add a book</Link>
        </div>
      </div>
      // TODO: Substitute this open-search functionality for a Link component
      // <Link className='open-search' to='/search'>Add a book</Link>
    );
  }
}

export default ListBooks;
