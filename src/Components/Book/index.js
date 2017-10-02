import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../../BooksAPI'
import '../../App.css'

class Book extends Component {
    static propTypes = {
        cover: PropTypes.string,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array,
        shelf: PropTypes.string,
        book: PropTypes.object
    }

    constructor (props) {
        super(props)
        this.state = {
            value: ''
        }
    };

    handleChange = async (event) => {
        this.setState({
            value: event.target.value
        });
        await BooksAPI.update(this.props.book, event.target.value);
        // location.reload();
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.cover ? this.props.cover : ''}")` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.props.shelf || "none" } onChange={this.handleChange}>
                            <option disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }
}

export default Book