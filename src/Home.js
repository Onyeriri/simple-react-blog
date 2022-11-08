import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => {
        if (!response.ok) {
          throw Error(
            "could not fetch the data from http://localhost:8000/blogs"
          );
        }
        return response.json();
      })
      .then((data) => setBlogs(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="home">
      {blogs ? (
        <BlogList blogs={blogs} title={"All blogs!"} />
      ) : <h1>Loading...</h1> ? (
        error
      ) : (
        error
      )}
    </div>
  );
};

export default Home;
