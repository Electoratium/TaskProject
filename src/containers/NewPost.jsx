import React, {Component} from 'react';
import { connect } from 'react-redux';

import {postsActions} from '../actions/posts';
class NewPost extends Component {
    showForm() {
        document.getElementById('postForm').classList.toggle('hidden');
    }
    createPost(e) {
        e.preventDefault();

        const dataNewPost = {
            title: this.title.value,
            body: this.body.value
        };
        this.props.onCreatePost(dataNewPost);

        this.clearInputForm();
    }
    clearInputForm() {
        this.title.value = '';
        this.body.value = '';

        document.getElementById('postForm').classList.add('hidden');
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-success" onClick={this.showForm}>Add new post</button>

                <form onSubmit={ e => this.createPost(e)} id="postForm" className="hidden">
                    <div className="form-group">
                        <label htmlFor="postTitle">Title: *</label>
                        <input type="text" className="form-control" id="postTitle"
                               maxLength="128" required ref={ input => this.title = input }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postBody">Post: *</label>
                        <textarea className="form-control" id="postBody"
                                  rows="2" maxLength="1000" required ref={ input => this.body = input}></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-info">Create</button>
                </form>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}
export default connect(mapStateToProps, dispatch => ({
    onCreatePost: dataNewPost => dispatch(postsActions.createPost(dataNewPost))
}))(NewPost);


