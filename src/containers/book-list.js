import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item" key={book.title}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        console.log(this.props.test); // "200"

        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// whatever return by this function will show up as props inside of BookList
function mapStateToProps(state) {
    return {
        test: 200,
        books: state.books,
    };
}

// export container
export default connect(mapStateToProps)(BookList);