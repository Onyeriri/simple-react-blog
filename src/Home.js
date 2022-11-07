import { useState } from "react";

const Home = () => {
  // let name = [1];
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name.push("Lugi");
    // console.log(name);
    setAge(30);
    setName("Lugi");
  };

  const handleClickedAgain = (name, e) => {
    // console.log("Hello " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Home page</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickedAgain("Chinonso", e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
