import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import '../../App.css'

class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            query: ''
        }
    }

    handleSearch = async (query) => {
        console.log('Im running')
        const resultsCurrentlyReading = await BooksAPI.search(query, 20);
        console.log(resultsCurrentlyReading);
    }

    handleChange = (event) => {
        let value = event.target.value
        this.setState({
            query: value
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <div className="close-search">
                        <Link
                            className="close-click"
                            to="/"
                        />
                    </div>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onSubmit={this.handleSearch}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
}

export default Search