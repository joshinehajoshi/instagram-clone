import React from 'react';
import '../stying/post.css';

function Post() {
  return <div>
      <h4>UserName</h4>
      <img 
      className="post_image"
      src="https://avatars.githubusercontent.com/u/40416505?v=4"
      alt="avatar" 
      />
      <h4>UserName: Caption</h4>
  </div>;
}

export default Post;
