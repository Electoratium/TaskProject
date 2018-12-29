import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router'


import {postsActions} from '../actions/index';

class Post extends Component {
    componentWillMount() {
        const idPost = this.props.match.params.id;
        this.props.fetchPost(idPost);
    }


    render() {
        if(this.props.posts.currPost) {

            if (this.props.posts.currPost.status === 404) {
                return <Redirect to='/404' />
            }
            return (
                <div className="container post-container">
                    <h2>{this.props.posts.currPost.title}</h2>
                    <p>{this.props.posts.currPost.body}</p>
                </div>
            )
        }
        return <h1>Post is loading</h1>
    }
}


function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}
export default connect(mapStateToProps, dispatch => ({
    fetchPost: id => dispatch(postsActions.getPost(id))
}))(Post);


    {/*<li className="media text-muted pt-3 blog-container">*/}
        {/*<svg className="bd-placeholder-img mr-2 rounded" width="32" height="32"*/}
             {/*xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"*/}
             {/*role="img">*/}
            {/*<rect fill="#007bff" width="100%" height="100%"></rect>*/}
        {/*</svg>*/}
        {/*<p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">*/}
            {/*<strong className="d-block text-gray-dark">{post.title}</strong>*/}
            {/*{post.body}*/}
        {/*</p>*/}
    {/*</li>*/}