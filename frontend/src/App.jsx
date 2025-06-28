import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/login';
import Home from './pages/Home';
import PrivateRoute from './utils/PrivateRoute';
import Upload from './pages/Upload';

const App = () => {
  return (
    <div>
    
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/dashboard'
             element ={<PrivateRoute><h1>Im a private route</h1></PrivateRoute>}
          >
          </Route>
        </Routes>
      
    </div>
  );
};

export default App;
