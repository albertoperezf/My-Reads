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
            bookList: [],
            value: ''
        }
    };

    async componentDidMount () {
        const results = await BooksAPI.getAll();
        if (results) {
            this.setState({
                bookList: results
            });
        }
    }

    handleSearch = async () => {
        const results = await BooksAPI.search(this.state.value, 20);
        if (results) {
            this.setState({
                books: results
            });
        }
        // console.log(this.state.bookList);
        // console.log(this.state.books);
        const searchResults = this.state.books;
        const currentBooks = this.state.bookList;
        let compare = searchResults.filter(function (o1) {
            return currentBooks.some(function (o2) {
                return o1.title === o2.title;
            });
        });
        // console.log(JSON.stringify(compare, null, 4));
        console.log(compare);
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
                        {this.state.books
                            ? this.state.books.map((book) => (
                                <li
                                    key={book.industryIdentifiers[0].identifier}
                                >
                                    <Book
                                        cover={book.imageLinks ? book.imageLinks.thumbnail : ''}
                                        title={book.title}
                                        authors={book.authors}
                                        book={book}
                                    />
                                </li>
                            ))
                            : ''
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search