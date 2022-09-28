import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Info from "./pages/Information";
import DetailProduct from "./pages/DetailProduct";
import Nav from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
   <Router>
      <Nav/>
      <Routes>
        <Route exact path ="/" element={<HomePage/>}/>
        <Route exact path ="/cart" element={<Cart/>}/>
        <Route exact path ="/info" element={<Info/>}/>
        <Route exact path ="/detail-product" element={<DetailProduct/>}/>
        <Route exact path ="/category" element={<HomePage/>}/>
      </Routes>
      <Footer/>
   </Router>
  );
}

export default App;
