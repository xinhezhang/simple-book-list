import React, { Component } from 'react';

import '../style/style.css'

import Header from './header';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <BookList />
                <BookDetail />
            </div>
        );
    }
}
