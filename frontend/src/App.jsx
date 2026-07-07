import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import './index.css';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Signup from './components/Signup.jsx';
import AddApplication from './components/AddApplication.jsx';
import EditApplication from './components/EditApplication.jsx';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={isAuthenticated ? <Dashboard/> : <Navigate to="/login"/>}/>
        <Route path="/add" element={isAuthenticated ? <AddApplication/> : <Navigate to="/login"/>}/>
        <Route path="/edit" element={isAuthenticated ? <EditApplication/> : <Navigate to="/login"/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
