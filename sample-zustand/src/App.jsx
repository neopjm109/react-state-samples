import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Result from './pages/Result';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Result" element={<Result/>}/>
    </Routes>
  )
}

export default App
