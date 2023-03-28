import "./styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { useState } from "react";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //rendering part
  return (
    <Router>
      <div>
        <Navbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <ProductList selectedCategory={selectedCategory} />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
