import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"


function App() {
  return (
   <Router>
      <Routes>
        <Route exact path ="/" element={<HomePage/>}/>
        <Route exact path ="/login" element={<Login/>}/>
      </Routes>
   </Router>
  );
}

export default App;
