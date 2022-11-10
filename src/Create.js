import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
      <form>
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
