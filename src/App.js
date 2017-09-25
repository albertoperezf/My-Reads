
import React from 'react'
import { Route, Link } from 'react-router-dom'
import BookLIst from './Components/BookList'
import Search from './Components/Search'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from "./Components/BookList/index";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Route
            path="/" exact render={() => (
            <BookList/>
        )}
        />
        <Route
            path="/search" exact render={() => (
            <Search/>
        )}
        />
      </div>
    )
  }
}

export default BooksApp
