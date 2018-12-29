export default function posts(state={}, action) {
    switch (action.type) {
        case 'FETCH_POST':
            return {
                ...state,
                currPost: {...action.payload}
            };
            break;
        case 'ALL_POSTS':
            return {
                ...state,
                allPosts: [...action.payload]
            };
        case 'NEW_POST':
            return {
                allPosts: [
                    ...state.allPosts,
                    action.payload
                ]
            };
            break;
        default:
            return {...state};
    }
}