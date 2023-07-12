import './App.css';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import SignIn from './components/signIn/SignIn';
import Main from "./components/main/Main"
import SignUp from './components/signup/SignUp';
import Detail from './components/detail/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/signIn' element={<SignIn/>}></Route>
          <Route path='/signUp' element={<SignUp/>}></Route>
          <Route path='/detail' element={<Detail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
