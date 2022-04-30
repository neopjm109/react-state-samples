import { useEffect, useState } from 'react'
import logo from '../logo.svg'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from '../store/commonStore';
import { setName } from '../store/memberStore';
import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';

function Home() {
  const count = useSelector((state) => state.common.count);
  const name = useSelector((state) => state.member.name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setName(faker.name.firstName()));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => dispatch(setCount(count + 1))}>
            count is: {count}
          </button>
        </p>
        <p>
          name is: { name }
        </p>
        <p>
        <Link to="/Result"><div>Go to result</div></Link>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default Home
