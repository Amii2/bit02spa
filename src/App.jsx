import "/src/assets/bootstrap/bootstrap-latest.min.css";
import "/src/assets/bootstrap/bootstrap-custom.min.css";
import "./App.css";
import WoafNavbar from "./components/WoafNavbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main className="container-fluid p-0 vh-100 d-flex flex-column">
        <WoafNavbar></WoafNavbar>
        <Routes>
          <Route path="/bit02spa">
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
