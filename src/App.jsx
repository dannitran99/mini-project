import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Info from "./pages/Information";
import Nav from './components/Navbar';

function App() {
  return (
   <Router>
      <Nav></Nav>
      <Routes>
        <Route exact path ="/" element={<HomePage/>}/>
        <Route exact path ="/cart" element={<Cart/>}/>
        <Route exact path ="/info" element={<Info/>}/>
      </Routes>
   </Router>
  );
}

export default App;
