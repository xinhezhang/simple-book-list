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


// How does react/redux connect?
//
// Redux generated a state object that contain our "books",
// and map that state as props to our component,
// because the state is updated (through reducer),
// our component re-rendered with that new "BookList"

// What is a "container"?
//
// The container is a normal react component that got bounded with the application state
// Whenever the application state changes, the container will re-render as well