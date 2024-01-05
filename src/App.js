import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

const App = () => {
  const x = "Quan";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Xin chao {x}</p>

        <Home />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
