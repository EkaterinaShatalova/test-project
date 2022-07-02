import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [value, setValue] = useState("текст в инпуте");

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const [posts, setPosts] = useState([
    { id: 1, postTitle: "Javascript 1", postBody: "Description" },
    { id: 2, postTitle: "Javascript 2", postBody: "Description" },
    { id: 3, postTitle: "Javascript 3", postBody: "Description" },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, postTitle: "Python 1", postBody: "Description" },
    { id: 2, postTitle: "Python 2", postBody: "Description" },
    { id: 3, postTitle: "Python 3", postBody: "Description" },
  ]);

  const [post, setPost] = useState({ postTitle: "", postBody: "" });
  // const [postBody, setPostBody] = useState("");

  const addNewPost = () => {
    // const newPost = {
    //   id:
    //   postTitle,
    //   postBody,
    // };
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ postTitle: "", postBody: "" });
    // setPostBody("");
    // setPostTitle("");
  };
  return (
    <div className="App">
      <h1>{value}</h1>
      <input type="text" value={value} onChange={changeValue}></input>
      <Counter />
      <Counter />
      <ClassCounter />
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

      <PostList posts={posts} title="Список постов 1" />
      <PostList posts={posts2} title="Список постов 2" />
    </div>
  );
}

export default App;
