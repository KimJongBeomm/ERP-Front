import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignIn } from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './pages/ui/Header';
import SideBar from './pages/ui/SideBar';
import Home from './pages/Home';
import UserModify from './pages/UserModify';


function App() {
  return (
    <>
      <div className="App">
      <Header className="Header" />
      <div className="Main">
        <SideBar className="SideBar" />
        <div className="Content">
          <Routes>
            <Route path="/UserModify" element={<UserModify />}></Route>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
