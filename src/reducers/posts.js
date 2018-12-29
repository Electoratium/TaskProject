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
        case 'EDIT_POST':
            const newPosts = state.allPosts.map( post => {
                if(post.id === action.payload.id) {
                    return action.payload
                }
                return post;
            });

            return {
                ...state,
                allPosts: [
                    ...newPosts
                ]
            };
        default:
            return {...state};
    }
}