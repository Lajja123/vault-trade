import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trade from "./components/trade/Trade";
import Vault from "./components/vault/Vault";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/user-dashboard/vault" element={<Vault />} />
        <Route path="/user-dashboard/trade" element={<Trade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
