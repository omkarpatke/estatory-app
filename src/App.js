import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProductListing from './Components/ProductListing/ProductListing';
import { Routes , Route } from 'react-router-dom';
import Favourite from './Components/Favourite/Favourite';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductListing />} />
        <Route path='/favourite' element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
