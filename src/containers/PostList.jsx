import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

import NewPost from './NewPost';

class PostList extends Component {
    showListPosts() {
        if(this.props.posts.allPosts) {
            return this.props.posts.allPosts.map( (post) => {
                return (
                        <li className={`media text-muted pt-3 post post-${post.id}`} key={post.id}>
                            <div className="col-10">
                                <Link to={`/posts/${post.id}`}>
                                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong className="d-block text-gray-dark">{post.title}</strong>
                                        <span>{post.body} </span>
                                    </p>
                                </Link>
                            </div>
                            <div className="col-2 button-group">
                                <Link to={`/post/edit/${post.id}`}>
                                    <button type="button" className="btn btn-outline-info">Edit</button>
                                </Link>
                            </div>
                        </li>
                );
            });
        }
        return <li>You haven't any blogs!</li>
    }

    render() {
        return (
            <div>
                <ul>
                    {this.showListPosts()}
                </ul>
                <NewPost />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}
export default connect(mapStateToProps)(PostList);


