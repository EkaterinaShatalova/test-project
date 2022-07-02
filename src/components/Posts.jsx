import React from "react";
import MyButton from "./UI/button/MyButton";

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
        <MyButton
          type="button"
          name="button"
          onClick={() => props.remove(props.post)}
        >
          удалить пост
        </MyButton>
      </div>
    </div>
  );
}

export default Posts;
