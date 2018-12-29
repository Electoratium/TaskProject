import Axios from 'axios';

const baseUrl = 'http://127.0.0.1:3001';

const newComment = commentData => {
    return dispatch => {
        return Axios.post(`${baseUrl}/comments`, commentData)
            .then( response => {
                dispatch ({
                    type: 'NEW_COMMENT',
                    payload: {
                        ...response.data
                    }
                })
            })
    }
};

const fetchComments = id => {
    return dispatch => {
        return Axios.get(`${baseUrl}/comments`, { params: {postId: id}})
            .then( response => {
                dispatch ({
                    type: 'FETCH_COMMENTS',
                    payload: [
                        ...response.data
                    ]
                });
            });
    }
};


export const commentsActions = {
    newComment: newComment,
    fetchComments: fetchComments
};