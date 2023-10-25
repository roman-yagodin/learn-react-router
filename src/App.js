import logo from './logo.svg';
import './App.css';
import {Outlet, Link} from 'react-router-dom';
import {Fade} from './etc/Fade';
import {useState} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';

function App() {

  const [isIn, setIsIn] = useState(true);

  const [inProp, setInProp] = useState(true);

  const [state, setState] = useState(false);

  return (
    <div className="App">
      <h1>Bookkeeper!</h1>

      <SwitchTransition mode="out-in">
        <CSSTransition
          key={state ? "Goodbye, world!" : "Hello, world!"}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames='fade'
        >
        <button onClick={() => setState(state => !state)}>
          {state ? "Goodbye, world!" : "Hello, world!"}
        </button>
        </CSSTransition>
      </SwitchTransition>

      <CSSTransition in={inProp} timeout={1000} classNames="my">
        <div>
          Привет, мир! from CSSTransition
        </div>
      </CSSTransition>
      <button onClick={() => setInProp(!inProp)}>CSSTransition</button>

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
