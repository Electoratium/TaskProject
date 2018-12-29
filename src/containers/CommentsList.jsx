import React, {Component} from 'react';
import { connect } from 'react-redux';

import {commentsActions} from '../actions/comments';

class CommentsList extends Component {
    componentWillMount() {
        const id = this.props.id;
        this.props.fetchComments(id);
    }

    showComments() {
        return this.props.comments.map( comment => {
            return (
                <li className="comment" key={comment.id}>
                    <p>
                        {comment.body}
                    </p>
                </li>
            );
        })
    }
    render() {
        if(this.props.comments.length > 0) {

            return (
                <ul>
                    {this.showComments()}
                </ul>
            );
        }
        return (
            <p>No comments available</p>
        );
    }
}


function mapStateToProps(state) {
    return {
        comments: state.comments
    };
}
export default connect(mapStateToProps, dispatch => ({
    fetchComments: id => dispatch(commentsActions.fetchComments(id))
}))(CommentsList);