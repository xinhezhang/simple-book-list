import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item" key={book.title}>
                    {book.title} <code>by</code> {book.author}
                </li>
            );
        });
    }

    render() {
        //console.log(this.props.test);   // "200"
        //console.log(this.props.books);
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// This function connect react with redux
// whatever return by this function will show up as props inside of BookList
// whenever the state changes, this function will be called, and the new "books" will re-render
function mapStateToProps(state) {
    return {
        test: 200,
        books: state.books,     // "books" will be available for "this.props"
    };
}

// connect(function)(component) -> container,
// which is a component where the state contains in redux
export default connect(mapStateToProps)(BookList);