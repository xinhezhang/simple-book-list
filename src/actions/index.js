// This is a "action creator", which is just a function
// it needs to return an action (an object with a type property)
export function selectBook(book) {
    //console.log('A book has been selected: ', book.title);
    return {
        type: 'BOOK_SELECTED',  // an action must have a type, usually not a string
        payload: book,          // payload is just more info of the action
    };
}