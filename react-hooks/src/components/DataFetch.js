import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetch() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [bId, setbId] = useState(1);
  const handleClick = () => {
    setbId(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${bId}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bId]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch post
      </button>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title} </li>
        ))}
      </ul> */}
      <h2>{posts.title}</h2>
    </div>
  );
}

export default DataFetch;
