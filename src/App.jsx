import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import Nav from './components/Navbar';

function App() {
  return (
   <Router>
      <Nav></Nav>
      <Routes>
        <Route exact path ="/" element={<HomePage/>}/>
      </Routes>
   </Router>
  );
}

export default App;
