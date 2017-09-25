
import React from 'react'
import { Route } from 'react-router-dom'
import BookList from './Components/BookList'
import Search from './Components/Search'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Route
            exact
            path="/"
            component={BookList}
        />
        <Route
            exact
            path="/search"
            component={Search}
        />
      </div>
    )
  }
}

export default BooksApp
