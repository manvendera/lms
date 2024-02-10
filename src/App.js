import Mainheader from './components/Mainheader'
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';
import PageNot from './components/PageNot';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Mainheader></Mainheader>}>
      <Route index element={<Home></Home>}/>
      <Route path='/Contact' element={<Contact></Contact>}/>
      <Route path='/About' element={<About></About>}/>
      <Route path='/Navbar' element={<Navbar></Navbar>}/>
      <Route path='*' element={<PageNot></PageNot>}></Route>
      </Route>
     </Routes>
     
    </div>
  );
}

export default App;
