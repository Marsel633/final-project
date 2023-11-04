import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Home } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element="Contacts"/>
      <Route path='/registration' element="Registration"/>
    </Routes>
  );
}

export default App;
