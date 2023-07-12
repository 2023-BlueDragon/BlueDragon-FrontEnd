import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
