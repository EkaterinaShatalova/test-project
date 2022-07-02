import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";

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

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <h1>{value}</h1>
      <input type="text" value={value} onChange={changeValue}></input>
      <Counter />
      <Counter />
      <ClassCounter />
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Список постов 1" />
      <PostList posts={posts2} title="Список постов 2" />
    </div>
  );
}

export default App;
