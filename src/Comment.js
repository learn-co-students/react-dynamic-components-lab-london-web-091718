import React, { Component } from 'react'

class Comment extends React.Component {
    render () {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment

// CONTINUE WITH PART 1 OF THIS EXCERCISE