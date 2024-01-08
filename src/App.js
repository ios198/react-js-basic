import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";
import Product from "./components/Products/Product";
import "react-image-lightbox/style.css";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const x = "Quan";
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <header className="App-header content-left">
              <div style={{ textAlign: "center" }}>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <p>
                <span>Xin chao {x}</span>
              </p>
              <Home />
            </header>
            <div className="content-right">
              <AddNewProduct />
              <hr />
              <Product />
            </div>
          </div>
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/weather" exact>
          <div>Weather App</div>
        </Route>
        <Route path="/about" exact>
          <div>About</div>
        </Route>
        <Route path="*">
          <div>404 NOT FOUND</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
