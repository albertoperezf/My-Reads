import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import * as BooksAPI from '../../BooksAPI'
import '../../App.css'

class Book extends Component {
    static propTypes = {
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array
    }

    constructor (props) {
        super(props)
        this.state = {
            book: {},
            shelf: '',
            value: ''
        }
    };

    /* This function controls the updates of the books shelf */
    handleUpdate = async () => {
        // const results = await BooksAPI.update();
        // console.log(results);
        console.log('Im a test!');
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
        console.log(this.state.value);
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.cover}")` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="none" disabled>Move to...</option>
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