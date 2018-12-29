import React, {Component} from 'react';

import PostDetails from '../../containers/PostDetails';

import Comments from '../../containers/Comments';


class Post extends Component {

    render() {
        return (
            <div className="container list-container">
                <PostDetails id={this.props.match.params.id} />
                <hr/>
                <h4>Comments</h4>
                <Comments id={this.props.match.params.id} />
            </div>
        );
    }
}

export default Post;