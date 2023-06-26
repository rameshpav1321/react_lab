import "./styles.css";
import React from "react";

export default function App() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products?limit=20&skip=${page * 20 - 20}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products.length);
        setData(data.products);
        setTotalPages(data.total / 20);
      });
  };
  const handlePageClick = (pageNo) => {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setPage(pageNo);
    }
  };
  React.useEffect(() => fetchData(), [page]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data.length > 0 && (
        <div className="products">
          {data.map((item) => (
            <span key={item.id} className="product_single">
              <h2>{item.id}</h2>
              <img src={item.thumbnail} alt={item.title} />
            </span>
          ))}
        </div>
      )}
      {data.length > 0 && (
        <div className="pagination">
          <span
            role="img"
            aria-label="left"
            onClick={() => handlePageClick(page - 1)}
            className={page > 1 ? "" : "button_disable"}
          >
            ⬅️
          </span>
          {[...Array(totalPages)].map((_, ind) => (
            <span
              className={page === ind + 1 ? "selected_page" : ""}
              onClick={() => handlePageClick(ind + 1)}
            >
              {ind + 1}
            </span>
          ))}
          <span
            role="img"
            aria-label="right"
            onClick={() => handlePageClick(page + 1)}
            className={page < totalPages ? "" : "button_disable"}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}
