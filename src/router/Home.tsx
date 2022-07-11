import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/drop">Drag n Drop</Link>
    </>
  );
};

export default Home;
