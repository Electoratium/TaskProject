export default function comments(state, action) {
    switch (action.type) {
        case 'NEW_COMMENT':
            return [
              ...state,
              action.payload
            ];
            break;
        case 'FETCH_COMMENTS':
            return [
                ...action.payload,
            ];
        default:
            return { ...state }
    }
}