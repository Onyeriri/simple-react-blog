import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((err) => err.massage);
  }, []);

  return (
    <div className="home">
      {blogs ? (
        <BlogList blogs={blogs} title={"All blogs!"} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Home;
