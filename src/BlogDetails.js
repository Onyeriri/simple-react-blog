import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const url = `http://localhost:8000/blogs/${id}`;
  const { data } = useFetch(url);

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Post deleted...");
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {data && (
        <article>
          <h2>{data.title}</h2>
          <br />
          <p>{data.body}</p>
          <br />
          <p>
            <b>written by {data.author}</b>
          </p>
          <button onClick={handleDelete}>Delete post</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
