import { Observer } from 'mobx-react-lite';
import '../App.css';
import logo from '../logo.svg';
import UseStore from '../store/store';

function Result() {
  const { commonStore, memberStore } = UseStore;

  return (
    <Observer>
      {
        () =>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Hello Vite + React!</p>
              <p>
                count is: { commonStore.count }
              </p>
              <p>
                name is : { memberStore.name }
              </p>
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

export default Result
