const Home = () => {
  const handleClick = () => {
    console.log("Hello, World!!!");
  };

  const handleClickedAgain = (name, e) => {
    console.log("Hello " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Home page</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickedAgain("Chinonso", e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
