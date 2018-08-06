import React, { Component } from 'react';
//This component would be reused by Book component
/* The way of implementing value and onChange in select comes from:
 * https://reactjs.org/docs/forms.html#why-select-value
 */
class BookShelfChanger extends Component {
  state = {value: this.props.shelf};
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={(evt) => this.props.shelfChanger(this.props.book, evt.target.value)}>
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
