import "/src/assets/bootstrap/bootstrap-502.min.css";
import "/src/assets/bootstrap/bootstrap-custom.min.css";
import "./App.css";
import WoafNavbar from "./components/WoafNavbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./assets/utils/CartContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <WoafNavbar></WoafNavbar>
      <div className="container-fluid align-items-center p-0 d-flex flex-column page-container flex-fill">
        <Routes>
          <Route path="/bit02spa">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
