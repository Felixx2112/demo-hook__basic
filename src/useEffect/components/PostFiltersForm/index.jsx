//link: https://www.youtube.com/watch?v=WF3pUtvC01M&list=PLeS7aZkL6GOsHNoyeEpeL8B1PnbKoQD9m&index=10
//
//PostFiltersForm
// . Props
//      . onSubmit: goi ham nay khi filter thay doi
// . State: searchTerm
// . Render: form > input[type="text"]
// . Luu y: doi user nhap xong roi moi goi API(ap dung ky thuat debounce don gian)

//Cach su dung PostFiltersForm
/*    
function App(){
     function handleFiltersChange(){
    Call API to re-fetch data with new filters
      }
    

return (
    <PostFiltersForm onSubmit={handleFiltersChange} />
)
}
*/

import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;

    // SET -- 100 -- CLEAR, SET -- 300 --> SUBMIT
    //  SET -- 300 --> SUBMIT

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
  }
  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  );
}
PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

export default PostFiltersForm;
