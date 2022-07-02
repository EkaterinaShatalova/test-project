import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function PostForm({ create }) {
  const [post, setPost] = useState({ postTitle: "", postBody: "" });

  const addNewPost = () => {
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ postTitle: "", postBody: "" });
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="название поста"
        title="Enter your search here"
        name="input1"
        value={post.postTitle}
        onChange={(e) => {
          setPost({ ...post, postTitle: e.target.value });
        }}
      />
      <MyInput
        type="text"
        placeholder="текст поста"
        title="Enter your search here"
        name="input2"
        value={post.postBody}
        onChange={(e) => {
          setPost({ ...post, postBody: e.target.value });
        }}
      />
      <MyButton
        // disabled={true}
        type="button"
        name="button"
        onClick={addNewPost}
      >
        отправить
      </MyButton>
    </form>
  );
}

export default PostForm;
