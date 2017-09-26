import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book'
import '../../App.css'

class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            books: [],
            value: ''
        }
    };

    handleSearch = async () => {
        console.log(this.state.value)
        const results = await BooksAPI.search(this.state.value, 20);
        if (results) {
            console.log(results)
            this.setState({
                books: results
            });
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
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
                            onChange={this.handleChange}
                            onKeyUp={this.handleSearch}
                            value={this.state.value}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book) => (
                            <li
                                key={book.industryIdentifiers[0].identifier}
                            >
                                <Book
                                    cover={book.imageLinks.thumbnail}
                                    title={book.title}
                                    authors={book.authors}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search