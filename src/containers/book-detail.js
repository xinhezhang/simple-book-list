import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    hasAtLeasBook = () => {
        const defaultText = 'Select a book to get started';
        return this.props.book ? this.props.book.title : defaultText;
    }

    render() {
        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.hasAtLeasBook()}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook,
    };
}

export default connect(mapStateToProps)(BookDetail);