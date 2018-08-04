import React, { Component } from 'react';
//This component would be reused by Book component

class BookShelfChanger extends Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.props.shelfChanger}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger;
