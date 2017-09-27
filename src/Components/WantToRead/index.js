import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from '../Book'
import '../../App.css'

class WantToRead extends Component {
    static propTypes = {
        cover: PropTypes.string,
        title: PropTypes.string,
        authors: PropTypes.array,
        id: PropTypes.string
    }

    render() {
        return (
            <li>
                <Book
                    cover={this.props.cover}
                    title={this.props.title}
                    authors={this.props.authors}
                />
            </li>
        )
    }
}

export default WantToRead