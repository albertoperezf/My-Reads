import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from '../Book'
import '../../App.css'

class Read extends Component {
    static propTypes = {
        cover: PropTypes.string,
        title: PropTypes.string,
        authors: PropTypes.array,
        id: PropTypes.string,
        shelf: PropTypes.string,
        book: PropTypes.object
    };

    render() {
        return (
            <li>
                <Book
                    cover={this.props.cover || ''}
                    title={this.props.title}
                    authors={this.props.authors}
                    shelf={this.props.shelf}
                    book={this.props.book}
                />
            </li>
        )
    }
}

export default Read