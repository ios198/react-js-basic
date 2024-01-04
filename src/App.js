import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";

const App = () => {
  const x = "Quan";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Xin chao {x}</p>

        <TodoList />
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
