import React, { Component } from 'react';
import '../style/style.css'

import Header from './header';
import BookList from '../containers/book-list';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
            </div>
        );
    }
}

export default App;
