import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="home">
      {blogs ? (
        <BlogList
          blogs={blogs}
          title={"All blogs!"}
          handleDelete={handleDelete}
        />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Home;
