import React, {Component} from 'react';
import { connect } from 'react-redux';
import {commentsActions} from "../actions/comments";


import CommentsList from './CommentsList';

class Comments extends Component {
    handleSubmit(e) {
        e.preventDefault();

        const newComment = {
            body: this.body.value,
            postId: this.props.id
        };

        this.props.onComment(newComment);

        this.clearInput();
    }
    clearInput() {
        this.body.value = '';
    }

    render() {
        return (
            <div>
                <CommentsList id={this.props.id} />
                <form onSubmit={ e => this.handleSubmit(e) }>
                    <div className="form-group">
                        <label htmlFor="postBody">Comment text:</label>
                        <textarea className="form-control" id="postBody"
                                  rows="2" ref={ input => this.body = input } maxLength="500" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        currPost: state.posts.currPost
    };
}
export default connect(mapStateToProps, dispatch => ({
    onComment: commentData => dispatch(commentsActions.newComment(commentData))
}))(Comments);