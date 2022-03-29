
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src = "./images/Portfolio/icon.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>./scripts/portfolio.js</code> and save to reload.
        </p>
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
}