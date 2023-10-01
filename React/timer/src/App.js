import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import {Routes,Route} from 'react-router-dom';
import Product from "./pages/Product";
import Layout from "./component/layouts/Layout";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
    <Layout>
     <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/contact" element={<Contact />}></Route>
     <Route path="/product" element={<Product />}></Route>
     <Route path="/product/cart" element={<Cart />}></Route>
     </Routes>
    </Layout>
    </div>
  );
}

export default App;
