import React, {Component} from 'react';

import PostList from '../../containers/PostList';


class Posts extends Component {

    render() {
        return (
            <div className="container list-container">
                <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
                <PostList />
            </div>
        );
    }
}

export default Posts;