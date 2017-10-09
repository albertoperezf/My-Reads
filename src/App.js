import React from 'react'
import { Route } from 'react-router-dom'
import BookList from './Components/BookList'
import Search from './Components/Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            bookList: []
        }
    }

    async componentDidMount () {
        const results = await BooksAPI.getAll();
        if (results) {
            this.setState({
                bookList: results
            });
        }
    }

  render() {
    return (
      <div className="app">
        <Route
            exact
            path="/"
            render={() => (
                <BookList
                    books={this.state.bookList}
                />
        )}/>
        <Route
            exact
            path="/search"
            render={() => (
                <Search
                    books={this.state.bookList}
                />
        )}/>
      </div>
    )
  }
}

export default BooksApp
