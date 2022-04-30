import { faker } from '@faker-js/faker';
import { Observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';
import UseStore from '../store/store';

function Home() {
  const { commonStore, memberStore } = UseStore;

  useEffect(() => {
    memberStore.name = faker.name.firstName()
  }, []);

  return (
    <Observer>
      {
        () =>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Hello Vite + React!</p>
              <p>
                <button type="button" onClick={() => commonStore.count = commonStore.count + 1}>
                  count is: { commonStore.count }
                </button>
              </p>
              <p>
                name is : { memberStore.name }
              </p>
              <Link to="/Result"><div>Go to result</div></Link>
              <p>
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
      }
    </Observer>
  )
}

export default Home
