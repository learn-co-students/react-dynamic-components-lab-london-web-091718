import React, { Component } from 'react'
import BlogPost from './BlogPost'

class Comments extends Component {
  render () {
    return (
      <div className='comment'>{this.props.commentText}</div>
    )
  }
}

export default Comments
