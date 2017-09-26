import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book'
import '../../App.css'

class BookList extends Component {
    state = {
        books: []
    }

    async componentDidMount () {
        const results = await BooksAPI.getAll();
        this.setState({
            books: results
        });
        console.log(this.state.books);
    }

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
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                    />
                </div>
            </div>
        )
    }
}

export default BookList