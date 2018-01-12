// reducer will be called only when "action" occurs
// "state" argument is not application state, only the state this reducer is responsible for
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            // originally is undefined, which is NOT allowed, so we set default to "null"
            return state;
    }
}