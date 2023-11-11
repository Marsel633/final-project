import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Notebook, Contact, Feedback, Home, Login, MyProfile, MyTickets, Packages, Services, Settings, SignUp, Transactions } from './pages';
import { PrivateRoute } from './shared';
import { Loader } from './components';

function App() {

  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
       <Route path='/profile' element={<PrivateRoute><MyProfile /></PrivateRoute>} />
          <Route path='/packages' element={<PrivateRoute><Packages /></PrivateRoute>} />
          <Route path='/diary' element={<PrivateRoute><Notebook/></PrivateRoute>} />
          <Route path='/mytickets' element={<PrivateRoute><MyTickets /></PrivateRoute>} />
          <Route path='/transactions' element={<PrivateRoute><Loader/></PrivateRoute>} />
          <Route path='/settings' element={<PrivateRoute><Settings /></PrivateRoute>} />
          <Route path='/feedback' element={<PrivateRoute><Feedback /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
