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


export const postsActions = {
    showAll: showAll,
    getPost: getPost
};