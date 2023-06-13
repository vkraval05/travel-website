import './App.css';
import {
  Routes, // instead of "Switch"
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Product from './Pages/Product';
import Signup from './Pages/Signup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Product />} />
        <Route path='/login' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
