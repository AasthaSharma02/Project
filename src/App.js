import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login';
import CustomerStats from './components/CustomerStats';

window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
})



function App() {
  return (
    <div>
      
      {/* <Cart /> */}
      <Router>
        <Routes>
          <Route path="/" element={<><NavBar /><CustomerStats /></>}/>
          <Route path="/login" element={<><NavBar /><Login /></> }/>
          <Route path="/search" element={<><NavBar /><SearchBar /></> }/>
          <Route path="/cart" element={<><NavBar /><Cart /></> }/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
