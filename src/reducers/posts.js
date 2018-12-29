const initialState = {};

export default function posts(state, action) {
    switch (action.type) {
        case 'FETCH_POST':
            return {
                ...state,
                currPost: {...action.payload}
            };
            break;
        case 'ALL_POSTS':
            return {
                allPosts: [...action.payload]
            };
        default:
            return initialState;
    }
}