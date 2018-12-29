import Axios from 'axios';


const baseUrl = 'http://127.0.0.1:3001';
const showAll = () => {

    return dispatch => {
        return Axios.get(`${baseUrl}/posts`)
            .then( response => {
                dispatch ({
                    type: 'ALL_POSTS',
                    payload: [
                        ...response.data
                    ]
                })
            });
    }
};


const getPost = id => {
    return dispatch => {
        return Axios.get(`${baseUrl}/posts/${id}`)
            .then(response => {
                dispatch ({
                    type: 'FETCH_POST',
                    payload: {
                        status: 200,
                        ...response.data
                    }
                })
            })
            .catch(err => {
                dispatch ({
                    type: 'FETCH_POST',
                    payload: {
                        status: 404
                    }
                })
            })
    }
};


const createPost = newPostData => {
    return dispatch => {
        return Axios.post(`${baseUrl}/posts/`, newPostData)
            .then(response => {
                console.log(response.data);

                dispatch ({
                    type: 'NEW_POST',
                    payload: {
                        ...response.data
                    }
                })
            })
    }
};


export const postsActions = {
    showAll: showAll,
    getPost: getPost,
    createPost: createPost
};