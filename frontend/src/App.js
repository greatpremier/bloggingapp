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

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/editor' element={<Editor />} />
        <Route path='/search' element={<Search/>} />
        <Route path='/notifications' element={<Notifications/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='test' element={<Test/>}>
        <Route path='notifications' element={<Notifications/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
