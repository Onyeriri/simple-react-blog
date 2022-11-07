import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev tips", body: "lorem ipsum...", author: "victor", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title={"All blogs!"}
        handleDelete={handleDelete}
      />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title={"Mario blogs!"}
      /> */}
    </div>
  );
};

export default Home;
