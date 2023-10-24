import logo from './logo.svg';
import './App.css';
import {Outlet, Link} from 'react-router-dom';
import {Fade} from './etc/Fade';
import {useState} from 'react';

function App() {

  const [isIn, setIsIn] = useState(true);

  return (
    <div className="App">
      <h1>Bookkeeper!</h1>

      <Fade in={isIn}/>
      <button onClick={() => setIsIn(!isIn)}>Нажми меня!</button>

      <nav>
        <Link to="/catalog">Каталог</Link> | { ' ' }
        <Link to="/basket">Корзина</Link> | { ' ' }
        <Link to="/about">О нас</Link>
      </nav>
      <Outlet />

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
