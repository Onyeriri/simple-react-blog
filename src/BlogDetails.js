import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();

  const url = `http://localhost:8000/blogs/${id}`;
  const { data } = useFetch(url);

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
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
