import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "./components/PostList/index";

function App(props) {
  const [postList, setPostList] = useState();

  useEffect(() => {
    async function axiosPostList() {
      const url = `http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1`;
      const response = await axios.get(url);
      const result = response.status === 200 ? response.data : {};
      console.log(result);
      setPostList(result.data);
    }

    axiosPostList();
    console.log("POST list effect");
  }, []); // dependencies(emty array): duoc dung khi chay dung 1 lan sau render

  useEffect(() => {
    console.log("TODO list effect");
  }); // dependencies khong duoc khai bao thi se luon duoc chay sau moi lan render
  console.log("rendering");
  return (
    <div>
      <h1>React hooks - useEffect</h1>
      <PostList posts={postList} />
    </div>
  );
}

export default App;
