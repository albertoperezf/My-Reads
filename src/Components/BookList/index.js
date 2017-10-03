import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import CurrentlyReading from '../CurrentlyReading'
import WantToRead from '../WantToRead'
import Read from '../Read'
import '../../App.css'

class BookList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: []
        }
    }

    async componentDidMount () {
        const results = await BooksAPI.getAll();
        this.setState({
            books: results
        });
        // console.log(this.state.books)
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
                                    {this.state.books
                                        ? this.state.books.map((book) => (
                                            book.shelf === "currentlyReading"
                                                ? <CurrentlyReading
                                                    cover={book.imageLinks ? book.imageLinks.thumbnail : ''}
                                                    title={book.title}
                                                    authors={book.authors}
                                                    key={book.id}
                                                    shelf={book.shelf}
                                                    book={book}
                                                />
                                                : ''
                                        ))
                                        : ''
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.state.books
                                        ? this.state.books.map((book) => (
                                            book.shelf === "wantToRead"
                                                ? <WantToRead
                                                    cover={book.imageLinks ? book.imageLinks.thumbnail : ''}
                                                    title={book.title}
                                                    authors={book.authors}
                                                    key={book.id}
                                                    shelf={book.shelf}
                                                    book={book}
                                                />
                                                : ''
                                        ))
                                        : ''
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.state.books
                                        ? this.state.books.map((book) => (
                                            book.shelf === "read"
                                                ? <Read
                                                    cover={book.imageLinks ? book.imageLinks.thumbnail : ''}
                                                    title={book.title}
                                                    authors={book.authors}
                                                    key={book.id}
                                                    shelf={book.shelf}
                                                    book={book}
                                                />
                                                : ''
                                        ))
                                        : ''
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