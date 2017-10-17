import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from '../BookShelf'
import '../../App.css'

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array
    }

    static defaultProps = {
        books: []
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.books.map((book) => (
                                        book.shelf === "currentlyReading"
                                            ? <BookShelf
                                                cover={book.imageLinks ? book.imageLinks.thumbnail : ''}
                                                title={book.title}
                                                authors={book.authors}
                                                key={book.id}
                                                shelf={book.shelf}
                                                book={book}
                                            />
                                            : ''
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.books.map((book) => (
                                        book.shelf === "wantToRead"
                                            ? <BookShelf
                                                cover={book.imageLinks ? book.imageLinks.thumbnail : ''}
                                                title={book.title}
                                                authors={book.authors}
                                                key={book.id}
                                                shelf={book.shelf}
                                                book={book}
                                            />
                                            : ''
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.books.map((book) => (
                                        book.shelf === "read"
                                            ? <BookShelf
                                                cover={book.imageLinks ? book.imageLinks.thumbnail : ''}
                                                title={book.title}
                                                authors={book.authors}
                                                key={book.id}
                                                shelf={book.shelf}
                                                book={book}
                                            />
                                            : ''
                                        ))
                                    }
                                </ol>
                            </div>
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