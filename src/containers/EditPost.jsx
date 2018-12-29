import React, {Component} from 'react';
import { connect } from 'react-redux';
import {postsActions} from "../actions/posts";
import { Redirect } from 'react-router'


class EditPost extends Component {
    componentWillMount() {
        const idPost = this.props.match.params.id;
        this.props.fetchPost(idPost);
    }
    editPost(e) {
        e.preventDefault();

        const editedData = {
          title: this.title.value,
          body: this.body.value
        };

        this.props.onEditPost(this.props.match.params.id, editedData);

    }

    render() {
        if(this.props.posts.currPost) {
            return (
                <div className="container">
                    <form onSubmit={e => this.editPost(e)} id="editForm">
                        <div className="form-group">
                            <label htmlFor="postTitle">Title: *</label>
                            <input type="text" className="form-control" id="postTitle"
                                   maxLength="128"
                                   required ref={input => this.title = input} defaultValue={this.props.posts.currPost.title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="postBody">Post: *</label>
                            <textarea className="form-control" id="postBody"
                                      rows="2" maxLength="1000" required
                                      ref={input => this.body = input} defaultValue={this.props.posts.currPost.body}></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-info">Edit</button>
                    </form>
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
    fetchPost: id => dispatch(postsActions.getPost(id)),
    onEditPost: (idPost, editedData) => dispatch(postsActions.editPost(idPost, editedData))
}))(EditPost);


