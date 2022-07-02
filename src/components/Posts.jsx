import React from "react";

function Posts(props) {
  return (
    <div className="post">
      <div className="post-content">
        <strong>
          {props.number}. {props.post.postTitle}
        </strong>
        <div>{props.post.postBody}</div>
      </div>
      <div className="post-buttons">
        <button>удалить пост</button>
      </div>
    </div>
  );
}

export default Posts;
