import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Contact, Home, Login, MyProfile, Packages, Services, SignUp } from './pages';
import ProfileLayout from './components/ProfileLayout/ProfileLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/profile' element={<MyProfile/>}/>
      <Route path='/packages' element={<ProfileLayout/>}/>
    </Routes>
  );
}

export default App;
