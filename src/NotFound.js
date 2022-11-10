import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>The page your looking for doesn't exist</h2>
      <Link to="/">Go back to the home page</Link>
    </div>
  );
};

export default NotFound;
