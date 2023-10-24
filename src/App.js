import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/catalog">Каталог</Link> | { ' ' }
        <Link to="/basket">Корзина</Link> | { ' ' }
        <Link to="/about">О нас</Link>
      </nav>

      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      */}

    </div>
  );
}

export default App;
