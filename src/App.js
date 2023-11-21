import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import Header from "./components/Header";
import Shop from "./Pages/Shop";
import ShoppingCart from "./Pages/ShoppingCart";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div className="App">
    <Router>
    <Provider store={store}>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shopping-cart" element={<ShoppingCart/>}/>
        <Route path="/productDetails/:id/:brandName/:title/:price/:imgUrl/:description/:diffItems" element={<ProductDetails/>}/>

      </Routes>
      <NewsLetter/>
   <Footer/>
     
    </Provider>
    </Router>

    </div>
  );
}

export default App;
