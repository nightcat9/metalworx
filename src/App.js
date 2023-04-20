import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer';

import Home from "./components/Home";
import About from "./components/About";
import Machining from "./components/Machining";
import Products from "./components/Products";
import Castings from "./components/Castings";
import Contact from "./components/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/machining" element={<Machining/>}>
          </Route>
          <Route path="/products" element={<Products/>}>
          </Route>
          <Route path="/castings" element={<Castings/>}>
          </Route>
          <Route path="/contact" element={<Contact/>}>
          </Route>
        </Routes>
      <Footer />

    </div>
  );
}

export default App;
