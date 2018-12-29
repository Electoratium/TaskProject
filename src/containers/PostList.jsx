import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";


class PostList extends Component {
    showListPosts() {
        if(this.props.posts.allPosts) {
            return this.props.posts.allPosts.map( (post) => {
                return (
                    <Link to={`/posts/${post.id}`} key={post.id}>
                        <li className="media text-muted pt-3">
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <strong className="d-block text-gray-dark">{post.title}</strong>
                                {post.body}
                            </p>
                        </li>
                    </Link>
                );
            });
        }
        return <li>You haven't any blogs!</li>
    }

    render() {
        return (
            <ul>
                {this.showListPosts()}
            </ul>
        )
    }
}


function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}
export default connect(mapStateToProps)(PostList);


