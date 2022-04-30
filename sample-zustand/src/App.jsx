import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CommonStore from './store/common'
import MemberStore from './store/member';
import { faker } from '@faker-js/faker';

function App() {
  const commonStore = CommonStore();
  const setCommonStore = CommonStore.setState;
  const memberStore = MemberStore();
  const setMemberStore = MemberStore.setState;

  useEffect(() => {
    console.log(commonStore);
    setMemberStore({ name: faker.name.firstName() })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCommonStore({ zuCount: commonStore.count + 1 }) }>
            count is: { commonStore.count }
          </button>
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
  )
}

export default App
