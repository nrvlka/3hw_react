import React, { useState } from 'react';
import './App.js'
function Blog() {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({ title: '', content: '', commentCount: 0 });

  const addComment = (comment) => {
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    setPost({ ...post, commentCount: updatedComments.length });
  };

  return (
    <div>
      <Post post={post} />
      <CommentSection comments={comments} addComment={addComment} />
    </div>
  );
}

function Post({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Комментариев: {post.commentCount}</p>
    </div>
  );
}

function CommentSection({ comments, addComment }) {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment) {
      addComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div>
      <h3>Комментарии</h3>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment}>Добавить комментарий</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
