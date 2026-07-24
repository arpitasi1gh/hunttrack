import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import './index.css';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Signup from './pages/Signup.jsx';
import AddApplication from './pages/AddApplication.jsx';
import EditApplication from './pages/EditApplication.jsx';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={isAuthenticated ? <Dashboard/> : <Navigate to="/login"/>}/>
        <Route path="/add" element={isAuthenticated ? <AddApplication/> : <Navigate to="/login"/>}/>
        <Route path="/edit/:id" element={isAuthenticated ? <EditApplication/> : <Navigate to="/login"/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
