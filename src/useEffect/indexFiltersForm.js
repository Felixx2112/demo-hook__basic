import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";
import PostList from "./components/PostList/index";
import Pagination from "./components/Pagination/index";
import PostFiltersForm from "./components/PostFiltersForm/index";

function App(props) {
  const [postList, setPostList] = useState();
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  useEffect(() => {
    async function axiosPostList() {
      const paramsString = queryString.stringify(filters);
      const url = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
      const response = await axios.get(url);
      const result = response.status === 200 ? response.data : {};
      console.log(result);
      const { data, pagination } = result;
      setPostList(data);
      setPagination(pagination);
      console.log("_page: ", pagination._page);
    }

    axiosPostList();
    console.log("POST list effect");
  }, [filters]); // dependencies(emty array): duoc dung khi chay dung 1 lan sau render, neu dependencies co tham so thi se chay 1 lan sau render va chay khi tham so ben trong thay doi

  useEffect(() => {
    console.log("TODO list effect");
  }); // dependencies khong duoc khai bao thi se luon duoc chay sau moi lan render
  console.log("rendering");

  function handlePageChange(newPage) {
    console.log("NewPage: ", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleFiltersChange(newFilters) {
    console.log("Filters: ", newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }
  return (
    <div>
      <h1>React hooks - useEffect</h1>
      <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
