import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const url = "http://localhost:8000/blog";
  const result = useFetch(url);

  return (
    <div className="home">
      {result.data ? (
        <BlogList blogs={result.data} title={"All blogs!"} />
      ) : <h1>Loading...</h1> ? (
        result.error
      ) : (
        result.error
      )}
    </div>
  );
};

export default Home;
