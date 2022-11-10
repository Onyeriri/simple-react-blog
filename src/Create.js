import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
      body,
      author,
    };

    console.log(data);
    setTitle("");
    setBody("");
    setAuthor("");
    console.log(data);
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Blog title:</label>
        <input
          value={title}
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          value={body}
          required
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog title:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
