import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Naviration from './components/Naviration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Naviration/> 
      <Routes>
        <Route index element = {<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
