import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// global application state
const rootReducer = combineReducers({
    books: BooksReducer,
});

export default rootReducer;