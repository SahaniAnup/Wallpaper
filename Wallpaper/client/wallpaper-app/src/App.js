// import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { About } from './Components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Register from './Components/Register';
import Wallpapers from './Components/Wallpapers';
import SinglePaper from './Components/SinglePaper';
import { Sell } from './Components/Sell';
import Upload from './sell/Upload';
import { Delete } from './sell/Delete';



function Main() {
  const location = useLocation();
  const hideOnRoutes = ["/login", "/register"]
  return (
    <>
    {!hideOnRoutes.includes(location.pathname)&& <Navbar/>}
        
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/wallpapers" element={<Wallpapers />} />
            <Route path="/singlepaper/:id" element={<SinglePaper />} />
            <Route path="/sell/upload" element={<Upload />} />
            <Route path="/sell/delete" element={<Delete />} />
            <Route path='/sell' element={<Sell/>}/>


          </Routes>
        
    </>
  );
}

function App() {
  return (

  <Router>
    <Main />
  </Router>
  );
}

export default App;



