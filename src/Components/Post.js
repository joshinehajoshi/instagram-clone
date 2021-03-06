import React from 'react';
import '../stying/post.css';
import Avatar from '@mui/material/Avatar';

function Post() {
  return <div className="post">
    <div className="post_header">
      <Avatar 
      className="post_avatar"
      alt="Neha Joshi" 
      src="/static/images/avatar/1.jpg" 
      />
        <h4>UserName</h4>
    </div>
        <img 
        className="post_image"
        src="https://avatars.githubusercontent.com/u/40416505?v=4"
        alt="avatar" 
        />
        <h4 className="post_text"><strong>UserName</strong>: Caption</h4>
     
  </div>;
}

export default Post;
