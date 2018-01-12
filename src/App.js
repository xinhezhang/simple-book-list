import React, { Component } from 'react';
import './style/style.css'

import Header from './components/header'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(keyword) {
        console.log(keyword);
        this.setState({
            keyword,
        });
    }
    render() {
        return (
            <div className="App">
                <Header />
                <input
                    value={this.state.keyword}
                    onClick={(event) => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }
}

export default App;
