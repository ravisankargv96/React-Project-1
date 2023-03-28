import React from "react";
import { Link } from "react-router-dom";

function Home({ children }) {
  return (
    <div>
      <h1>Fakestore App</h1>
      <div>Hello from Home component</div>

      <Link to="/products">Goto Products</Link>
      <br />
      <Link to="/not-found">Goto Not found</Link>
      {children}
    </div>
  );
}

export default Home;
