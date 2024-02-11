import Mainheader from './components/Mainheader'
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home'
import Contact from './components/Contact';
import About from './components/About';
import PageNot from './components/PageNot';
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashbord from './Pages/Dashbord';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} ></Navbar>
     <Routes>
      <Route path='/' element={<Mainheader></Mainheader>}>
      <Route index element={<Home></Home>}/>
      <Route path='/Contact' element={<Contact></Contact>}/>
      <Route path='/About' element={<About></About>}/>
      <Route path='/Navbar' element={<Navbar></Navbar>}/>
      <Route path='/Login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
      <Route path='/SignUp' element={<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></SignUp>}></Route>
      <Route path='/Dashbord' element={<Dashbord></Dashbord>}></Route>
      <Route path='*' element={<PageNot></PageNot>}></Route>
      </Route>
     </Routes>
     
    </div>
  );
}

export default App;
