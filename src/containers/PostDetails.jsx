import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router'


import {postsActions} from '../actions/posts';

class PostDetails extends Component {
    componentWillMount() {
        const idPost = this.props.id;

        this.props.fetchPost(idPost);
    }
    // componentWillUpdate(nextProps) {
    //     if(this.props.posts.currPost) {
    //         console.log(this.props.posts.currPost);
    //     }
    // }


    render() {
        // console.log(this.props.posts);

        if(this.props.posts.currPost ) {


            if (this.props.posts.currPost.status === 404) {
                return <Redirect to='/404' />
            }
            return (
                <div className="container row post-container justify-content-center">
                    <h2 className="col-12">{this.props.posts.currPost.title}</h2>
                    <div className="col-10">
                        <p>{this.props.posts.currPost.body}</p>
                    </div>
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
}))(PostDetails);