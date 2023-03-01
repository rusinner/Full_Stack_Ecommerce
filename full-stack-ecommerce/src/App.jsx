import "./App.css";
import {
  Home,
  ProductList,
  Product,
  Register,
  Login,
  Cart,
  Success,
} from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />

          <Route
            path="/register"
            element={user ? <Navigate replace to="/" /> : <Register />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
