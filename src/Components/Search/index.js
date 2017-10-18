import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import _ from 'lodash';
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book'
import '../../App.css'

class Search extends Component {
    static propTypes = {
        books: PropTypes.array
    };

    static defaultProps = {
        books: []
    };

    constructor (props) {
        super(props)
        this.state = {
            books: [],
            bookList: [],
            value: '',
            compare: [],
            rest: []
        }
    };

    handleSearch = () => {
        new Promise(async (resolve, reject) => {
            const results = await BooksAPI.search(this.state.value, 20);
            if (results) { resolve(results) }
            else { reject(results) }
        })
            .then((successContent) => {
            this.setState({books: successContent})
                const searchBooks = this.state.books ? this.state.books : [];
                const currentBooks = this.props.books ? this.props.books : [];
                const compare = currentBooks.filter(o1 => searchBooks.some(o2 => o1.title === o2.title && o1.id === o2.id));
                const currentCompare = compare
                const rest = searchBooks.filter(o1 => !currentCompare.some(o2 => o1.title === o2.title && o1.id === o2.id));
                this.setState({
                    compare: compare,
                    rest: rest
                });
        })
            .catch((errorContent) => {
                console.table(errorContent)
                this.setState({books: []});
            });
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {
        const debounceSearch = _.debounce(this.handleSearch, 2000);
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
                            onKeyUp={debounceSearch}
                            value={this.state.value}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.compare !== 0 && this.state.rest !==0
                            ? this.state.compare.map((book) => (
                                <li
                                    key={book.id}
                                >
                                    <Book
                                        cover={book.imageLinks ? book.imageLinks.thumbnail : ''}
                                        title={book.title}
                                        authors={book.authors}
                                        book={book}
                                        shelf={book.shelf}
                                    />
                                </li>
                            ))
                            : ''
                        }
                        {this.state.compare !== 0 && this.state.rest !==0
                            ? this.state.rest.map((book) => (
                                <li
                                    key={book.id}
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
                        {this.state.books && this.state.compare.length === 0 && this.state.rest.length === 0
                            ? this.state.books.map((book) => (
                                <li
                                    key={book.id}
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