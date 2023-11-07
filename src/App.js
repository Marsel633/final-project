import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Contacts, Home, Login, SignUp } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
