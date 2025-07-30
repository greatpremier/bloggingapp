import logo from './logo.svg';
import './App.css';
import './index.css'
import Header from './components/Common/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Common/Search';
import Editor from './components/Blog/Editor';
import Notifications from './components/Common/Notifications';
import Profile from './components/Blog/Profile';
import Test from './components/Test';
import Tester from './components/Tester';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Common/Home';
import { AuthProvider } from './components/Auth/AuthContext';

function App() {
  return (
    <div>
      <Home />
      <AuthProvider>
      <Routes>
        <Route path='/editor' element={<Editor />} />
        <Route path='/search' element={<Search/>} />
        <Route path='/notifications' element={<Notifications/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='test' element={<Test/>}>
        <Route path='notifications' element={<Notifications/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
