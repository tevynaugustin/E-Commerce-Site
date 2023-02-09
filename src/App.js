import './App.css';
import Navbar from './components/navbar/navbar';
import "./components/FontAwesomeIcons";
import Cart from './pages/cart/cart'
import Shop from './pages/shop/shop'
import {ShopContext} from './context/shop-context'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ShopContext.Provider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContext.Provider>
    </div>
  );
}

export default App;
